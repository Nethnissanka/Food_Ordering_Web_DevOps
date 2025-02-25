// import mongoose from "mongoose";

// export const connectDB = async () => {
//     (await mongoose.connect('mongodb+srv://AvinashMourya:Baroda2024@cluster0.nijp76z.mongodb.net/food-dev')).isObjectIdOrHexString(()=>console.log("DB Connected"));
// }

// // MONGO_URI = mongodb+srv://gunasinghepmue23:Manusha2001@cluster0.pgeby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("DB Connection Failed:", error);
        process.exit(1); // Exit process if DB connection fails
    }
};
