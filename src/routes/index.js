import express from 'express'
import UserRoutes from './users.js'
const router = express.Router()


router.get ('/', (req,res)=>{
        res.status (200).send(`
        <h1 style="text-align: center">welcome to backend <h1/>`)
})

router.use('/user', UserRoutes,)

export default router