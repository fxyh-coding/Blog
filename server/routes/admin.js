const express = require('express');
const checkToekn = require('../middleware/checkToken');
const router = express.Router();
router.get('/admin',checkToekn,(req,res,next)=>{
  res.send({
    type:true,
    name:'dailu'
  });
});
module.exports = router