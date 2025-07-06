import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
const PORT = 4000;

app.use(cors()); //izinkan akses dari origin lain (React dev server)
app.use(express.json()); // parse JSON body

// --- DATABASE MINIMAL DI MEMORI ---
let products = [
    {id: nanoid(), name: "Laptop", price: 15000000 },
    {id: nanoid(), name: "Mouse", price: 250000 },
];
