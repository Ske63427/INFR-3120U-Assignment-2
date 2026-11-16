var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', projects: [
    { name: 'Movie Website', image: 'public/images/Screenshot 2026-10-10 162203.png', alt: 'picture of project one',
        description: 'Used Vite, React, Google Firebase, and TMDB API to make a streaming website, grade 12 summative.' }, 
    { name: 'First-Year OOP Program', image: 'public/images/Screenshot 2026-10-10 163530.png', alt: 'picture of project two',
        description: 'CSCI 1061U 4X Lab Assignment; CLI Game. C++ and git were used.' }, 
    { name: 'Robotics Club Website', image: 'public/images/Screenshot 2026-10-10 164829.png', alt: 'picture of project three',
        description: 'A website for my high school robotics club. I used react typescript (as opposed to javascript, like in my movie website). It was supposed to hold docs and an inventory system.' }, 
    { name: 'Project Four', alt: 'picture of project four',
        description: 'I dont have a project 4 :(. Lorem Ipsum Dolor Sit Amet' }
  ]});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Co tact Me' });
});

module.exports = router;
