const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/landing', (req, res) => {
    res.send(
      {
        message: 'Hello!'
      }
    )
  })

  app.listen(process.env.PORT || 3000)