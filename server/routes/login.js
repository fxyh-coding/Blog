require('dotenv').load();
const express = require('express');
const router  = express.Router();
const api = require('../api');
const createToken = require('../middleware/createToken');
const sha1 = require('sha1');
router.post('/login',(req,res,next)=>{
  let name= req.body.account;
  let password = sha1(req.body.checkPass);
  api.getUserByName(req.body.account)
            .then((user)=>{
              if(user&&(password==user.password)){
                // 用户名存在通过验证
                res.json({
                  code:200,
                  token:createToken(name)
                });
              }else{
                // 用户名或者密码错误没有通过验证，要么重新输入，要么点击注册()
                res.json({
                  code:-200,
                  message:'用户名或密码错误'
                })
              }
            })
            .catch(err=>{
              // 查找数据库发生错误，或者一些
              next(err)
              return res.json({
                code:-200,
                message:err.toString()
              })
            })
})
module.exports = router;