
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Route POST pour créer une nouvelle techCard
exports.createSkill = async (req, res, next) => {
    try {
        const { nom, alt } = req.body;
        const image = req.file.filename;
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
        console.log(req.body);
        const image = req.file.filename;
        console.log(req.file);
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


    exports.getOneSkill = async (req, res, next) => {
        try {
            const skill = await prisma.project.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
    
            if (project) {
                res.status(200).json(skill);
            } else {
                res.status(404).json({ error: 'Skill non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    
    