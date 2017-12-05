const Router = require('express').Router;
const router = Router();
const Category = require('../models/category');
const respond = require('../utils/respond');

const updateOptions = { 
    new: true,
    runValidators: true
};

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

    .post('/', respond( async req => {
        return await Category(req.body).save();
    }))

    .put('/:id', respond (async req => {
        return await Category.findByIdAndUpdate(req.params.id, req.body, updateOptions);
    }))

    .delete('/:id', respond( async req => {
        const result = await Category.findByIdAndRemove(req.params.id);
        return({removed: (result != null) });
    }));

module.exports = router;