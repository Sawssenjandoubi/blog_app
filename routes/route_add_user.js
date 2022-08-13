const express = require('express');
const route = express.Router();
const route_poste = require('./add_user')
const route_login = require('./login')
const route_create_blog = require('./add_blog')
const route_update_blog = require('./update_blog')
const route_get_all_blog = require('./get_all_blog')
const route_delete_blog = require('./delete_blog')
const route_get_myblog = require('./get_myblog')
const verifyToken = require('../middlewares/verifytoken')
route.post('/add_user',route_poste)
route.get('/login',route_login)
route.post('/add_blog/:id',verifyToken,route_create_blog)
route.put('/update_blog/:id',verifyToken,route_update_blog)
route.get('/get_all_blogs',route_get_all_blog)
route.delete('/delete_blog/:id',verifyToken,route_delete_blog)
route.get('/get_myblog/:id',verifyToken,route_get_myblog)
module.exports = route ;

