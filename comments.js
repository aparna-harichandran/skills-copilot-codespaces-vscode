// Create web server
const express = require('express');
const router = express.Router();

// Import the model
const Comment = require('../models/comment');

// Import the middleware
const auth = require('../middleware/auth');

// Import the controller
const commentCtrl = require('../controllers/comment');

// Create a comment
router.post('/', auth, commentCtrl.createComment);

// Update a comment
router.put('/:id', auth, commentCtrl.updateComment);

// Delete a comment
router.delete('/:id', auth, commentCtrl.deleteComment);

// Get all comments
router.get('/', auth, commentCtrl.getAllComments);

// Get one comment
router.get('/:id', auth, commentCtrl.getOneComment);

// Export the router
module.exports = router;