# Node API for Real Estate Management

This Node.js API is designed for managing real estate products. It uses Express to handle HTTP requests and Mongoose to interact with MongoDB.

## Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Skarvy/Node-CRUD-API
    ```

2. **Install Dependencies:**
    ```bash
    cd your-repo
    npm install
    ```

3. **Set Up MongoDB:**
    - Create a MongoDB Atlas account.
    - Create a cluster and obtain the connection string.
    - Replace the connection string in `app.js` with your own.

4. **Run the Application:**
    ```bash
    npm start
    ```

## Usage

Access the API at [http://localhost:3000](http://localhost:3000).

### Endpoints:

- **GET /products:** Get all products.
- **GET /products/:id:** Get a specific product by ID.
- **PUT /products/:id:** Update a product by ID.
- **DELETE /products/:id:** Delete a product by ID.
- **POST /products:** Create a new product.
