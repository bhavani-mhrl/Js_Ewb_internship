let products=[
    {
        productName:"Laptop",
        Price:800
    },
    {
        productName:"Mouse",
        Price:25
    },
    {
        productName:"Keyboard",
        Price:45
    },
    {
        productName:"Camera",
        Price:75
    },
];

console.log("-- All Products (forEach) --");

products.forEach(product => {
    console.log(`Item: ${product["productName"]} - Price $${product["Price"]}`);
});


console.log("\n-- Filtered Products (Price < $50) --");

let filteredProducts = products.filter(product=>product["Price"]<50);

console.log(filteredProducts);

console.log("\n-- Mapped Product Tags (map) --");

let mappedProduct=products.map(pro=> `${pro["productName"].toUpperCase()} Costs $${pro["Price"]}`);

console.log(mappedProduct);