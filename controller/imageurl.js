const  Clarifai = require("clarifai");

const app=new Clarifai.App({
    apiKey:"ef319ee049754705b4d41497db8271e3"
  });

  const handleImageurl=(req,res)=>{
    app.models.predict(
        //here we can use model_id or model_name
        // Clarifai.FACE_DETECT_MODEL, 
        "a403429f2ddf4b49b307e318f00e528b",
        req.body.input)
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json("unable to work with API"));
  }

module.exports={
    handleImageurl
}
