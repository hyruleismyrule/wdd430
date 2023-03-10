const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://admin:rxK4G8ruhGwrpQzT@cluster0.zxiazbs.mongodb.net/wdd430?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(() => {
        console.log("Connection failed!")
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    // const post = req.body;
    // console.log(post);
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        // console.log(result);
        res.status(201).json({
            message: "Post added successfully.",
            postId: createdPost._id
        });
    });
});

app.get('/api/posts', (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully",
            posts: documents
        });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
    // console.log(req.params.id);
    Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
    })
});

module.exports = app; 