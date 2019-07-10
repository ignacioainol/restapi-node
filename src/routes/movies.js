const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');

router.get('/',(req,res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;

    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.send("Wrong request");
    }
});

module.exports = router;