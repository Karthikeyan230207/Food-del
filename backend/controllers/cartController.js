import usermodel from "../models/userModel.js";

// add item to cart
const addToCart = async (req, res) => {

    try {
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }

        await usermodel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        res.json({ message: "Error adding item to cart." });
    }
}

// remove item from cart
const removeFromCart = async (req, res) => {
    try{
        let userData = await usermodel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Removed from cart"})
    }
    catch(error){
        res.json({success:false,message:"Error removing item from cart"})
    }
}

//fetch cart items
const getCartItems = async (req, res) => {
    try{
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    }
    catch(error){
        res.json({success:false,message:"Error fetching cart items"})
    }
}

export {addToCart,removeFromCart,getCartItems};