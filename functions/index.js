const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets'
  }
};

const nuxt = new Nuxt(config);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// function handleRequest(req, res) {
//   res.set("Cache-Control", "public, max-age=300, s-maxage=600")
//   nuxt.renderRoute('/')
//     // eslint-disable-next-line promise/always-return
//     .then(result => {
//       res.send(result.html)
//     })
//     .catch(e => {
//       res.send(e)
//     })
// }

// app.set('*', handleRequest)

// exports.checkpoint = functions.https.onRequest(app)
