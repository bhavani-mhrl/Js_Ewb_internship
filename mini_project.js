let productName=prompt("Enter product name");
let price=Number(prompt("Enter the price of Product"));

let allProducts = [
    {
        productName:"Mobile",
        price:150,
        category:"Budget"
    },
    {
        productName:"Ipad",
        price:500,
        category:"Premium"
    },
    {
        productName:"Charger",
        price:250,
        category:"Standard"
    },
    {
        productName:"Sony Tv",
        price:1550,
        category:"Premium"
    },
];

if(price > 0){
    let category="";
    switch(true){
        case price>500:
            category="Premium";
            break;
        case price>200:
            category="Standard";
            break;
        default:
            category="Budget";
            break;
    }
    allProducts.push({productName,price,category});
}else{
    alert("reload and enter the correct price! otherwise product cannot be added");
}


for(let i=0;i<allProducts.length;i++){
    if(allProducts[i].productName==''){
        alert("you have not entered product name , reload and enter again");
    }
}

let sum=0;
function totalPrice(){
    for(let i=0;i<allProducts.length;i++){
        sum+=allProducts[i].price;
    }
}
totalPrice();

let res=[];
function filteredProductsName(){
    filteredProducts.forEach(pro=>{
        res.push(`"${pro["productName"]}"'`);
    });
    return res;
}


let filteredProducts=allProducts.filter(pro =>pro["price"]<=300);

let mappedProducts=allProducts.map(pro=>`"${pro["productName"].toUpperCase()}: $${pro["price"]}"`)

console.log("--- Initializing Inventory System ---");
console.log(`[Prompt executed: User adds "${productName}" at "$${price}"]`);

console.log("--- Processing Inventory Roster (forEach) ---");

allProducts.forEach(pro=>{
    console.log(`Item: ${pro.productName} ($${pro.price}) -> Category: ${pro.category}`);
})

console.log("--- Financial Analytics ---");
console.log(`Total Inventory Value: $${sum}`);

console.log(`Filtered Affordable Items (Under $300): [${filteredProductsName()}]`);
console.log(`Formatted Report List: [${mappedProducts}]`);