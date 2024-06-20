// TO CREATE AN ANIMAL 
const register= async(req,res)=>{
    try {
        const {Name,Breed,Colour,Age}=req.body;
        let isMatured = false;
        if(Age >= 10){
            isMatured = true;
        }
        const newAnimal=await farmModel.create({
            Name,
            Breed,
            Colour,
            Age,
            isMatured
        });

        res.status(201).json({
            message:`Animal profile created successfully`,
            data: newAnimal
        });
        
    } catch (error) {
        res.status(500).json({
            message:error.message 
        })
    }
}

// TO GET ALL ANIMAL
const allAnimal= async(req,res)=>{
    try {
        const allAnimal= await farmModel.find();

        if (!allAnimal || allAnimal.length===0){
            res.status(404).json({
                message:`No Animal Found`
            })
        }else{
            res.status(200).json({
                message:`These are the list of Animals Available:`,
                data:allAnimal,
                totalNumberofAnimal:allAnimal.length
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:error.message 
        })
        
    }
}


// TO GET A  SINGLE ANIMAL
const singleAnimal= async(req,res)=>{
    try {
        const id=req.params.id;
        const singleAnimal= await farmModel.findById(id);

        if(!singleAnimal){
            res.status(404).json({
                message:`Animal with the ID:${id} is not found.`
            })
        }else{
            res.status(200).json({
                message:`Animal with the ID:${id} is found.`,
                data:singleAnimal
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}

// TO GET ALL MATURED ANIMAL
const getAllMatured= async(req,res)=>{
    try {
        const matured= {isMatured:true};
        allMatured= await farmModel.find(matured);

        if(allMatured){
            res.status(200).json({
                message:`These are all the matured Animals:`,
                data: allMatured,
                totalNumberofAnimal: allMatured.length
            })
         }else{
            res.status(404).json({
                message:`Matured Animals not found.`
            })
         }

        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}

// TO GET ANIMAL NOT SOLD YET
const animalNotSold= async (req,res)=>{
    try {
        const notSold= {isSold:false};
        const animalNotSold= await farmModel.find(notSold);

        if(animalNotSold){
            res.status(200).json({
                message:`These are the list of Animals not sold:`,
                data: animalNotSold,
                totalNumberofAnimalNotSold: animalNotSold.length
            })
        }else{
            res.status(404).json({
                message:`All animals have been sold.`
            })
        }
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}


// TO SELL AN ANIMAL
const sellAnimal= async(req,res)=>{
    try {
        const animalId=req.params.id
    const sellAnimal=await farmModel.findByIdAndUpdate(animalId,{new:true})

        if(!sellAnimal){
            res.status(404).json({
                message:`Animal with ID:${animalId} is not found.`
            })
        }else{
            res.status(200).json({
                message:`Animal with ID:${animalId} is up for sale.`,
                data:sellAnimal
            })
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



// TO DELETE AN ANIMAL
const deletedAnimal=async (req,res)=>{
    try {
        const animalId=req.params.id;
        deleteAnimal=await farmModel.findByIdAndDelete(animalId)

        if(!deleteAnimal){
            res.status(404).json({
                message:`Animal with this ID:${animalId} is not found, so it cannot be deleted.`
            })
        }else{
            res.status(200).json({
                message:`Animal with this ID:${animalId} is found and has been deleted successfully.`
            })
        }
    
        
    } catch (error) {
        console.error('Error deleting animal:', error);
        res.status(500).json({
            message:error.message
        })
        
    }
}

module.exports={register,allAnimal,singleAnimal,deletedAnimal,getAllMatured,animalNotSold,sellAnimal}
