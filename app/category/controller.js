const Category = require('./model');

const index = async (req, res, next) => {
    try {
        let count = await Category.find().countDocuments();
        let category = await Category.find();
        return res.json({
            data: category,
            count
        });
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const store = async (req, res, next) => {
    try {
        let payload = req.body;
        let category = new Category(payload);
        await category.save();
        return res.json(category);
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }

        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        let payload = req.body;
        let category = await Category.findByIdAndUpdate(req.params.id, payload, {
            new: true,
            runValidators: true
        });
        return res.json(category);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        let category = await Category.findByIdAndDelete(req.params.id);
        return res.json(category);
    } catch(err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }

        next(err);
    }
}

module.exports = {
    index,
    store,
    update,
    destroy
}