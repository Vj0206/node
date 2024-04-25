import express from 'express'
const router = express.Router()


router.get ('/', (req,res)=>{
        res.status (200).send(`
        <h1 style="text-align: center">welcome to users <h1/>`)
})


export default router