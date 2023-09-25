const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const category = require('./data/category.json')
const banner = require('./data/banner.json')
const products = require('./data/product.json')
const chefs = require('./data/chefs.json')


app.use(cors())
app.use(express.json())


app.get('/chefs', (req, res) => {
    res.send(chefs)
});
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = chefs.find(n => n.id == id);
    res.send(selectedId);
})
app.get('/products', (req, res) => {
    res.send(products)
});
app.get('/category', (req, res) => {
    res.send(category)
});
app.get('/banner', (req, res) => {
    res.send(banner)
});
app.get('/', (req, res) => {
    res.send('recipe is running.......')
});
app.listen(port, () => {
    console.log(`Recipe is running on PORT: ${port}`);
})