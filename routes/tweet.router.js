import express from 'express'
import isAuthenticated from '../middleware/auth.js'
import { createTweet } from '../controllers/tweet.controller.js'

const router = express.Router()

router.route('/tweet').post(isAuthenticated,createTweet)

export default router