const express= require('express');
const {register, allAnimal, singleAnimal,deletedAnimal,getAllMatured,animalNotSold,sellAnimal}=require('../controller/farmController');

const router= express.Router();

router.post('/register-animal',register)
router.get('/allAnimal',allAnimal)
router.get('/singleAnimal/:id',singleAnimal)
router.delete('/deleteAnimal/:id',deletedAnimal)
router.get('/allMatured',getAllMatured)
router.get('/notSold',animalNotSold)
router.put('/sellAnimal/:id/sell',sellAnimal)

module.exports= router