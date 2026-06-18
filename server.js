const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes    = require('./routes/users.js');
const productRoutes = require('./routes/products.js');

app.use('/users',    userRoutes);     // Mount users router
app.use('/products', productRoutes);  // Mount products router

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});