import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ 
    path: '/.env'

});

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    })
    app.listen(process.env.PORT||8000, () => {  

    console.log("Connected to the database successfully.",process.env.PORT||8000);
})})
.catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
})