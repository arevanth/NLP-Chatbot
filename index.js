'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
	res.send("Hello")
})


app.listen(app.get('port'), function(){
	console.log("runing on port 5000")
})