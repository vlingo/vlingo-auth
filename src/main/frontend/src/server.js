import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const { json } = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = polka(); // You can also use Express

server
	.use('/api', createProxyMiddleware({ target: 'http://localhost:9019', changeOrigin: true }))
	.use(json())
	.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
	.listen(PORT, (err) => err && console.log('error', err));

module.exports = server;
