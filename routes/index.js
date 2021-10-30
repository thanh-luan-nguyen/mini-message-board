const { text } = require('express')
var express = require('express')
var router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello world!',
    user: 'Charles',
    added: new Date(),
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages })
})
/* GET new message form page */
router.get('/new', function (req, res) {
  res.render('form', { title: '' })
})
router.post('/new', function (req, res) {
  const { messageText, user } = req.body
  messages.push({ text: messageText, user: user, added: new Date() })
  res.redirect('/')
})

module.exports = router
