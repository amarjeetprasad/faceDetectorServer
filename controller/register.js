const handleRegister=(req,res,db,bcrypt)=>{
    if(!req.body.name||req.body.email||req.body.password)
    {
        return res.status(400).json("invalid inputs");
    }
// bcrypting the password

const hash = bcrypt.hashSync(req.body.password, 10);

db('users')
.insert({
    name:req.body.name,
    email:req.body.email,
    password:hash,
    joined:new Date()
})
.then(user=>{
    res.json('success');
})
.catch(err=>res.status(400).json(err))
}

module.exports={
    handleRegister
};