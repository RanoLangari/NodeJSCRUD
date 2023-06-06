import express from "express"
import cors from "cors"
import engine from "ejs-layout"
import userRoute from "./routes/userRoutes.js"


const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoute);

app.use((req, res) => {
    res.status(404).send({
        status: 404,
        error: 'Not found'
    });
});


app.listen(9000, () => console.log(`Listening on: http://localhost:8000`));
