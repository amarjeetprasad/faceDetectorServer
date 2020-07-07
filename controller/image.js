const handleImage=(req,res,db)=>{
    let Name;
    db('users').where({id:req.body.id}).select("name")
    .then(name=>Name=name[0].name);

    db('users')
    .where({id:req.body.id})
    .increment('entries', 1)
    .returning('entries')
    .then(data=>res.json({name:Name,entries:data[0]}))
    .catch(err=>res.status(400).json(err))
}

module.exports={
    handleImage
};
