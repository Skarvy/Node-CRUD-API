var express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/ProductModels'); // Importing the Product model
var app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Route to the homepage
app.get("/", (req, res) => {
    res.send("Hello, Node API!");
});

// Endpoint to get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to get a specific product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to update a product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Cannot find any product with ID ${id}` });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to create a new product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Connecting to the MongoDB database
mongoose.connect('mongodb+srv://admin:admin@inmobiliariaapi.yiry0vx.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        // Start the server on port 3000
        app.listen(3000, () => {
            console.log('Connected to the database');
            console.log("Node API is running on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });
