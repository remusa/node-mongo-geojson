import express, { Router, Request, Response } from 'express'
import { getStores } from '../../controllers/stores'

const router: Router = express.Router()

router.route('/').get(getStores())

export default router
