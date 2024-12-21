const Carts= require('../models/Carts');
const getCartByEmail = async(req,res)=>{
    try{
        const email = req.query.email;
        const query = {email:email};
        const result = await Carts.find(query).exec();
        res.status(200).json(result);
    }catch (error){
        res.status(500).json({message: error.message });
    }
}

const addToCart = async(req,res)=>{
    const {menuItemId,name,recipe,image,price,quantity,email} = req.body;
    try{
        const existingCartItem = await Carts.findOne({ menuItemId });
        if(existingCartItem){
            return res.status(400).json({message: "Product already exists in the cart!", status: 400});
        }

        const cartItem = await Carts.create({
            menuItemId, name, recipe, image, price, quantity, email  
        })
        res.status(201).json(cartItem)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteCart = async (req, res)=>{
    console.log("Gunit")
    const cartid = req.params.id;
    try{
        const deletedCart = await Carts.findByIdAndDelete(cartid);
        if(!deletedCart){
            return res.status(401).json({message:"Cart Items not Found!"})
        }
        res.status(200).json({message:"Cart Item Deleted Successfully!"})
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateCart =async (req,res)=>{
    const cartId = req.params.id;
    const{menuItemId,name, recipe, image, price, quantity, email}=req.body;
    try{
        const updateCart= await Carts.findByIdAndUpdate(
            cartId,{menuItemId,name,recipe,image,price,quantity,email},{
                new:true, runValidators: true,
            }
        )
        if(!updateCart){
            return res.status(404).json({message:"Cart Item not found"})
        }
        res.status(200).json(updateCart)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const getSingleCart = async (req, res)=>{
    const cartId = req.params.id;
    try{
        const cartItem = await Carts.findById(cartId)
        res.status(200).json(cartItem) 
    }catch(error){
        res.staus(500).json({message: error.message});
    }
}
module.exports = {
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}