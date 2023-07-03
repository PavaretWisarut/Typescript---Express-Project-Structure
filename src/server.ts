import express, { Request, Response } from 'express';
import cors from "cors"
import { getTestpages } from "./controllers/testpage"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! This is type script');
});

app.get('/test', getTestpages)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
