# Node-CRUD-API

This repository contains a Node.js API for managing real estate products. It uses Express for handling HTTP requests and Mongoose for interacting with MongoDB.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Skarvy/Node-CRUD-API
Install dependencies:

bash
Copy code
cd Node-CRUD-API
npm install
Set up MongoDB:

Create a MongoDB Atlas account.
Create a cluster and obtain the connection string.
Replace the connection string in app.js with your own.
Run the application:

bash
Copy code
npm start
Usage
Access the API at http://localhost:3000.
Endpoints:
GET /products: Get all products.
GET /products/:id: Get a specific product by ID.
PUT /products/:id: Update a product by ID.
DELETE /products/:id: Delete a product by ID.
POST /products: Create a new product.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

Node-CRUD-API (Español)
Este repositorio contiene una API de Node.js para gestionar productos inmobiliarios. Utiliza Express para manejar solicitudes HTTP y Mongoose para interactuar con MongoDB.

Instalación
Clona el repositorio:

bash
Copy code
git clone https://github.com/Skarvy/Node-CRUD-API
Instala las dependencias:

bash
Copy code
cd Node-CRUD-API
npm install
Configura MongoDB:

Crea una cuenta en MongoDB Atlas.
Crea un clúster y obtén la cadena de conexión.
Reemplaza la cadena de conexión en app.js con la tuya.
Ejecuta la aplicación:

bash
Copy code
npm start
Uso
Accede a la API en http://localhost:3000.
Endpoints:
GET /products: Obtiene todos los productos.
GET /products/:id: Obtiene un producto específico por ID.
PUT /products/:id: Actualiza un producto por ID.
DELETE /products/:id: Elimina un producto por ID.
POST /products: Crea un nuevo producto.