const handleSignin=(req,res,db,bcrypt)=>{

    let result;
    db('users').where({
        email:req.body.email
      }).select("password","email","id","name","entries")
      .then(data=>{
        result= bcrypt.compareSync(req.body.password, data[0].password);
            if(req.body.email===data[0].email&&result)
            {
                res.json({success:"success",id:data[0].id,name:data[0].name,entries:data[0].entries});
            }
            else
            res.json("not found")
      })
      .catch(err=>res.status(400).json(err));
}

module.exports={
    handleSignin
};
    
