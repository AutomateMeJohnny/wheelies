const express = require('express')


const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send(`
  <!doctype html>
  <html>
    <h1>Hello World</h1>
  </html>
  `)
})


app.listen(PORT, () => {
  console.log(`App up a http://localhost:${PORT}`)
})
