import indexTemplate from './public/indexTemplate.js'
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from './src/index.js'
import {StaticRouter} from 'react-router'

var Express = require('express')
var app = Express()
var path = require('path')

app.use(Express.static(path.join(__dirname, 'public')))

app.get("*", function(req, res){
    const page = renderToString(
        <StaticRouter location = {req.url} context = {{}}><App/></StaticRouter>)
    res.send(indexTemplate(page)) 
})


app.listen(3000)
