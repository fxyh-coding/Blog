require('dotenv').config()
const UserModel = require('../api');
const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const createToken = require('../middleware/createToken');
router.post('/reg',function (req,res,next) {
    let name = req.body.account;
    let password = req.body.checkPass;
    password  = sha1(password);
    let user = {
      name:name,
      password:password
    }

    UserModel.create(user)
      .then(()=>{
        res.send({
          // 创建用户成功
          code:200,
          token:createToken(name)
        })
      })
      .catch(err=>{
        // 操作数据库的时候发生错误
        if(err.message.match('E11000 duplicate key')){
          return res.json({
            code:-200,
            message:'用户名重复'
          })
        }
        // 服务器发生错误（例如status:）
        return res.json({
          code:-200,
          message:err.toString()
        })
      })
})
module.exports = router;
