const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ products: ['Laptop', 'Phone', 'Tablet'] });
});

router.get('/:id', (req, res) => {
  res.json({ product: `Product ID ${req.params.id}` });
});

module.exports = router;