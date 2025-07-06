import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
const PORT = 4000;

app.use(cors());          // izinkan akses dari origin lain (React dev server)
app.use(express.json());  // parse JSON body

// --- DATABASE MINIMAL DI MEMORI ---
let products = [
  { id: nanoid(), name: "Laptop", price: 15000000 },
  { id: nanoid(), name: "Mouse",  price: 250000 },
];

// --------- ROUTES RESTful ----------
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const prod = products.find(p => p.id === req.params.id);
  prod ? res.json(prod) : res.status(404).json({ message: "Not found" });
});

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProd = { id: nanoid(), name, price };
  products.push(newProd);
  res.status(201).json(newProd);
});

app.put("/api/products/:id", (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  products[idx] = { ...products[idx], ...req.body };
  res.json(products[idx]);
});

app.delete("/api/products/:id", (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`🚀 API ready at http://localhost:${PORT}`));
