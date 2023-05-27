import mongoose from "mongoose";

const collection = "Cart";

const schema = new mongoose.Schema({
    products: {
     type: [
      {
        product: {
        type: mongoose.Types.ObjectId,
        ref: "Products", // Referencia a la colección "Products"
       },
       quantity: {
        type: Number,
        default: 1, // Valor por defecto de la cantidad: 1
       },
      },
     ],
     default: [], // Valor por defecto del array de productos: vacío
    },
   },{timestamps: { createdAt: "created_at", updatedAt: "updated_at" }});
   
schema.pre("find", function () {
    this.populate("products.product")
})

const cartModel = mongoose.model(collection, schema);

export default cartModel;


