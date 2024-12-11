const firebaseApp = require('../config/firebaseModule')
const express = require('express')
const cors = require('cors')
const { credential } = require('firebase-admin');

const Fauth = firebaseApp.auth()
const Fdb = firebaseApp.database()

const router = express.Router()
router.use(cors());
router.options('*',cors)

router.post('/user/new', (req,res,next) => {
  const {email,password,nickname} = req.body

  Fauth.createUser({
    email,
    password,
    displayName: nickname
  }).then(credential => {
    const {uid} = credential;
    //유저 프로필 DB 만들어서 DB 에 저장하기

    Promise.all([
      Fdb.ref(`users/${uid}/profile`).set({
      email,
      nickname,
      timestamp: Date.now()
  }),
      Fdb.ref(`statics/nicknames/${uid}`).set(nickname)
    ]).then(() => {
    res.status(200).json({
      msg : '계정이 생성되었습니다'
    }).catch(error => {
      res.status(400).json({
        msg : error
      })
    })
    }).catch(error => {
    res.status(400).json({
      msg : error
    })
    })
  })
})

router.get('/helloworld', (req, res,next) => {

  const email = 'aaa@aaa.com'
  const password = '12345678'

  Fauth.createUser({
    email,
    password,
  }).then(credential => {
    const {uid} = credential;

    console.log(uid)
  }).catch(error => {
    console.log(error)
  })

  res.json({
    message: 'Hello World!'
  })
})



module.exports = router