const router = require("express").Router();
const Phone = require('../models/Phone.model')

// get /api/phones -> lista de telefonos
router.get('/', async (req,res,next)=>{
    try {
      const response = await Phone.find().select('name')
      res.json(response)   
    } catch (error) {
        next(error)
    }
})

//get /api/phones/:id  ->detalles de telefono
router.get('/:id', async (req,res,next)=>{
  const {id} =req.params
  try {
    const singlePhone = await Phone.findById(id)
    res.json(singlePhone);
  } catch (error) {
    next(error)
  }
})


module.exports = router;