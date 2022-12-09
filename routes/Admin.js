const { Router } = require('express');
const route = Router;

route.get("/", (req,res)=>{
    const id = req.params.id;
    res.send("Discover Admin")
})

route.get("/:cat1", (req,res)=>{
    const name = req.params.name;
    res.send(name)
})
route.get("/:cat2", (req,res)=>{
    const name2 = req.params.name;
    res.send(name2);
})
route.get("/:cat3", (req,res)=>{
    const name3 = req.params.name;
    res.send(name3);
});

route.get("/:cat4", (req,res)=>{
    const name4 = req.params.name;
    res.send(name4);
});


module.exports = route;