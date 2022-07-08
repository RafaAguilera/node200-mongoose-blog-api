const express = require('express');
var router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

    router.get('/', (req, res) => {
    Blog.find()
    .then( blogs => res.status(200).json(blogs) )
    .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });

    router.post('/', (req, res) => {
    User.findById(req.body.author)
    .then(author => {
        let newBlog = new Blog(req.body); 
        newBlog.save()
        .then( savedBlog => { author.blogs.push(savedBlog); 
            author.save();
            res.status(201).json(savedBlog), console.log(`Blog has been added.`) })
        })
    .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });
      
      router.get('/featured', (req,res) => {
      Blog.find({featured: true})
        .then(blogs => {res.status(200).json(blogs)});
      });  

    router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
    .then( blog =>  blog ? res.status(200).json(blog) : res.status(404).json({message: `Blog ${req.params.id} is not in the database.`}))
    .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });
  
      router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
    .then( User => { res.status(204).json(User), console.log(`Blog ${req.params.id} has been updated.`) })
    .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });
      router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id)
    .then( blog => { res.status(200).json(blog), console.log(`Blog ${req.params.id} has been deleted.`) })
    .catch( error => { res.status(500).json({ 'error': error }); console.log(error)});
      });
  
module.exports = router;