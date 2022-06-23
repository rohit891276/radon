const AuthorModel = require('../models/authorModel');
const BlogModel = require('../models/blogModel');
const jwt = require('jsonwebtoken');

const createBlog = async function (req, res) {
    try {
        let data = req.body;
        if (!data.authorId)
            return res.status(400).send({ status: false, msg: 'enter author id' });
        let check = await AuthorModel.findById(data.authorId);
        if (!check)
            return res.status(400).send({ status: false, msg: 'enter valid author id' });
        let token = req.headers['x-api-key'];
        let decodedToken = jwt.verify(token, 'group-21');
        if (decodedToken.authorId != data.authorId)
            return res.status(403).send({ status: false, msg: 'This author is not allowed to post this blog.' });
        const createdBlog = await BlogModel.create(data);
        if (!createdBlog)
            return res.status(500).send({ status: false, msg: 'data required' });
        res.status(201).send({ status: true, msg: createdBlog });
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        });
    }
};

const getAllBlogs = async function (req, res) {
    try {
        let data = req.query;
        let filter = { isDeleted: false, isPublished: true };
        if (Object.keys(data).length > 0) {
            if (data.tags) {
                data.tags = { $in: data.tags.split(',') };
            }
            if (data.subcategory) {
                data.subcategory = { $in: data.subcategory.split(',') };
            }
            filter['$or'] = [
                { authorId: data.authorId },
                { category: data.category },
                { subcategory: data.subcategory },
                { tags: data.tags },
            ];
        }
        let allBlogs = await BlogModel.find(filter);
        if (allBlogs.length == 0) {
            return res.status(404).send({ msg: 'blogs not found' });
        }
        res.status(200).send(allBlogs);
    } catch (err) {
        res.status(500).send({ msg: 'Error', error: err.message });
    }
};

const updateBlog = async function (req, res) {
    try {
        let id = req.params.blogId;
        let data = req.body;
        let blog = await BlogModel.findOne({ _id: id, isDeleted: false });
        if (Object.keys(blog).length == 0) {
            return res.status(404).send('No such blog found');
        }
        if (data.title) blog.title = data.title;
        if (data.category) blog.category = data.category;
        if (data.body) blog.body = data.body;
        if (data.tags) {
            blog.tags.push(data.tags);
        }
        if (data.subcategory) {
            blog.subcategory.push(data.subcategory);
        }
        blog.isPublished = true;
        blog.publishedAt = Date();
        let updateData = await BlogModel.findByIdAndUpdate({ _id: id }, blog, {
            new: true,
        });
        res.status(200).send({ msg: updateData });
    } catch (err) {
        res.status(500).send({ msg: 'Error', error: err.message });
    }
};

const deleteByParams = async function (req, res) {
    try {
        let id = req.params.blogId;
        const allBlogs = await BlogModel.findOne({ _id: id, isDeleted: false });
        if (!allBlogs) {
            return res
                .status(404)
                .send({ status: false, Msg: 'This blog is deleted.' });
        }
        allBlogs.isDeleted = true;
        const updated = await BlogModel.findByIdAndUpdate({ _id: id }, allBlogs, {
            new: true,
        });
        res.status(200).send({ status: true, Msg: 'Successfully Deleted' });
    } catch (err) {
        res.status(500).send({ Status: 'SERVER ERROR', Msg: err.message });
    }
};

const deletedByQuery = async function (req, res) {
    try {
        let data = req.query;
        let queryData = { isDeleted: false };
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: 'no query params' });
        }
        if (data.tags) {
            data.tags = { $in: data.tags.split(',') };
        }
        if (data.subcategory) {
            data.subcategory = { $in: data.subcategory.split(',') };
        }
        queryData['$or'] = [
            { authorId: data.authorId },
            { category: data.category },
            { subcategory: data.subcategory },
            { tags: data.tags },
            { isPublished: data.isPublished },
        ];
        const check = await BlogModel.find(queryData).count();
        if (check == 0)
            return res.status(404).send({ status: false, msg: 'data not found' });
        const deletedData = await BlogModel.updateMany(queryData, {
            $set: {
                isDeleted: true,
                deletedAt: Date(),
            },
        });
        res.status(200).send({
            status: true,
            data: 'successfully deleted',
        });
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        });
    }
};

module.exports.createBlog = createBlog;
module.exports.getAllBlogs = getAllBlogs;
module.exports.updateBlog = updateBlog;
module.exports.deleteByParams = deleteByParams;
module.exports.deletedByQuery = deletedByQuery;