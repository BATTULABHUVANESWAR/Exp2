const express = require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.json({users:['Alice','Bob','Charlie']});
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.json({user: 'User with Id ' + id});
});
router.post('/',(req,res)=>{
    const newUser = req.body.name;
    res.status(201).json({ created: newUser });
});
module.exports = router;