const mongoose = require('mongoose');

var puzzlemodel = require('../model/puzzlemodel')

function shuffleWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}


exports.insert = async(req,res) => {

  const letters = 'abcdefghijklmnopqrstuvwxyz';
      
    let result = '';
    var total_len = req.body.name.length;
    
    for (let i = 0; i < 16-total_len; i++) {

      const randomIndex = Math.floor(Math.random() * letters.length);
      result += letters.charAt(randomIndex);
    }

    result += req.body.name;

    result = shuffleWord(result)

    req.body.images = req.file.originalname
    req.body.word = result;

    var data = await puzzlemodel.create(req.body);
   
      res.status(200).json({
         status:"Success",
         data,
      }) 
      
 }

 exports.view = async(req,res) => {

    var data =await puzzlemodel.find();
   //  const upload = await puzzlemodel.findById(req.params.id);
   //  const letters = generate16Letters();
 
   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const randomletters=data+letters;
   

   
   const randomletter= Array.from({ length: 16 }, () => randomletters[Math.floor(Math.random() * randomletters.length)]);
  
    // const randomletter =Array.from({length:16},()=>randomletters[ Math.floor(Math.random() * randomletters.length)]);
    
    
   
    res.status(200).json({
      status:"success",
        randomletter
    })  
}
  

// module.exports = router;