const { Router } = require('express');
const router = Router();

router.get('/test',(req,res) => {
    const data = {
        "name": "Ignacio",
        "website": "cyrax.cl"
    }
    res.json(data);
});

module.exports = router; 