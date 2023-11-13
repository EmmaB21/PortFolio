const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

// On importe les fichiers de route
const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/user');
const skillRoutes = require('./routes/skills');


// On utilise les fichiers de route comme middleware
app.use('/api/projects', projectRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/skills', skillRoutes);


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

module.exports = app;