const Router = require('express').Router;
const router = Router();
const Category = require('../models/category');
const respond = require('../utils/respond');

router
    .get('/', respond( async () => {
        return await Category.find().lean();
    }))

    .get('/:id', respond( async req => {
        const category = await Category.findById(req.params.id).lean();
        if (!category) {
            throw {code: 404, error: `id ${req.params.id} does not exist`};
        }
        else return category;
    }))