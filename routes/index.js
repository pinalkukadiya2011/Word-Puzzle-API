var express = require('express');
const multer = require('multer');

const puzzle = require('../controller/puzzlecontroller')
var router = express.Router();

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) { 
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })
  
  
  
  router.post('/insert',upload.single('images'),puzzle.insert)
  router.get('/view',puzzle.view)




module.exports = router;
