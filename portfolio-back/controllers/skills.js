
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Route POST pour créer une nouvelle techCard
exports.createSkill = async (req, res, next) => {
    try {
        const { nom, alt } = req.body;
        const image = req.file.path;
        const newSkill = await prisma.skill.create({
            data: {
                nom,
                image,
                alt
            },
        });

        res.status(201).json({ message: 'Compétence enregistrée avec succès!', skill: newSkill });
    } catch (error) {
        res.status(400).json({ error });
    }
};


// Route PUT pour modifier une techCard
exports.modifySkill = async (req, res, next) => {
    try {
        const { nom, alt } = req.body;
        const image = req.file.path;
        const updatedSkill = await prisma.skill.update({
            where: {
                id: parseInt(req.params.id),
            },
            data: {
                nom,
                image,
                alt
            },
        });

        res.status(200).json({ message: 'Objet modifié !', skill: updatedSkill });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Route DELETE pour supprimer une TechCard
exports.deleteSkill = async (req, res, next) => {
    try {
        await prisma.skill.delete({
            where: {
                id: parseInt(req.params.id),
            },
        });

        res.status(200).json({ message: 'Objet supprimé !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Route GET pour récupérer toutes les TechCard
exports.getAllSkills = async (req, res, next) => {
        try {
            const skills = await prisma.skill.findMany();

            res.status(200).json(skills);
        } catch (error) {
            res.status(400).json({ error });
        }
    };