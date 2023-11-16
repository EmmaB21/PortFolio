
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Route POST pour créer un nouveau projet
exports.createProject = async (req, res, next) => {
    try {
        const { nom, alt, description, technos, liens } = req.body;
        console.log('Received request body:', req.body);
        const image = req.file.path;
        const newProject = await prisma.project.create({
            data: {
                nom,
                image,
                alt,
                description,
                technos,
                liens,
            },
        });


        res.status(201).json({ message: 'Projet enregistré avec succès!', project: newProject });
    } catch (error) {
        res.status(400).json({ error });
    }
};


// Route PUT pour modifier un projet
exports.modifyProject = async (req, res, next) => {
    try {
        const { nom, alt, description, technos, liens } = req.body;
        const image = req.file.path;
        const updatedProject = await prisma.project.update({
            where: {
                id: parseInt(req.params.id),
            },
            data: {
                nom,
                image,
                alt,
                description,
                technos,
                liens
            },
        });

        res.status(200).json({ message: 'Objet modifié !', project: updatedProject });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Route DELETE pour supprimet un projet
exports.deleteProject = async (req, res, next) => {
    try {
        await prisma.project.delete({
            where: {
                id: parseInt(req.params.id),
            },
        });

        res.status(200).json({ message: 'Objet supprimé !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Route GET pour récupérer tous les projets
exports.getAllProjects = async (req, res, next) => {
    try {
        const projects = await prisma.project.findMany();

        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.getOneProject = async (req, res, next) => {
    try {
        const project = await prisma.project.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
        });

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ error: 'Projet non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}

