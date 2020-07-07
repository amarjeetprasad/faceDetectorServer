const handleProfile=(req,res,db)=>{
    
    db('users').where({
        id:req.params.id
      }).select("*")
      .then(data=>{
          if(data.length>0)
          res.json(data[0])
          else
          res.status(400).json('invalid id')
      })
      .catch(err=>res.status(400).json(err))
}


module.exports={
    handleProfile
}
    
