const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: 'Utilisateur enregistré avec succès', user: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Erreur de serveur' });
    }
  };
  

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      // On recherche l'utilisateur par email dans la base de données
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
  
      if (!user) {
        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
      }
  
      // On compare le mot de passe fourni avec le mot de passe haché dans la base de données
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
      }
  
      // On génère un token d'authentification
      const token = jwt.sign({ userId: user.id }, 'JWT_KEY', { expiresIn: '24h' });
  
      res.status(200).json({
        userId: user.id,
        token: token,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
