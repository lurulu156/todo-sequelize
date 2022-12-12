// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const db = require('../../models')
const Todo = db.Todo
// 定義首頁路由
router.get('/', (req, res) => {
  const UserId = req.user.id
  Todo.findAll({
    where: { UserId }, order: [
      ['id', 'ASC']
    ], raw: true,
    nest: true
  })
    .then(todos => res.render('index', {todos}))
    .catch(error => console.error(error))
})
// 匯出路由模組
module.exports = router