// @desc Get all stores
// @route GET /api/v1/stores
// @access Public

import { Request, Response, NextFunction } from 'express'

const getStores = () => (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world!')
}

export { getStores }
