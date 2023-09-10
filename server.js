// necessary imports for custom routing
const express = require('express')
const next = require('next')

// conditional statement which watches for if it is run in dev or production
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // custom routing for what appears in the url vs what gets called in the browser
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    // /post is what actually renders
    app.render(req, res, actualPage, queryParams)
})

//handles all calls not customly routed
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  //listening on port 3000
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})