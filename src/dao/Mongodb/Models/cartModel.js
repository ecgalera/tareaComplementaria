import mongoose from "mongoose";

const collection = "Cart";

const schema = new mongoose.Schema({

    products: {
        type: [
            {
                product: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: "Products",
                },
            }

        ]
    },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

schema.pre("find", function () {
    this.populate("products.product")
})

const cartModel = mongoose.model(collection, schema);

export default cartModel;
