const container = document.getElementById("cont")
const header = document.getElementById("header")
const loader = document.getElementById("loader")

addEventListener("load", async event =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        loader.style.display = "none"
        products.forEach(product => {
            const productCard = document.createElement("div")
            productCard.classList.add("productCard")
            productCard.setAttribute("id",`${product.id}`)
            //?First way
            productCard.innerHTML = `
            <h2 class="title">${product.title}</h2>
            <p class="description">${product.description}</p>
            <p class="price">Price: $${product.price}</p>
            <p class="rating">Rating: ${product.rating.rate}</p>
            <p class="ratingCount">${product.rating.count} People rated</p>
            <img src="${product.image}" alt="${product.title}" class="image" width="350px" height="350px">
            <span class="category">Product category: ${product.category}</span>
            <button class="btn" id="${product.id}" onclick="checkId(this)">Add to Basket</button>
            `;
            //?Second way
            // const title = document.createElement("h2");
            // title.classList.add("title")
            // title.innerText = `Title: ${product.title}`;
            // const description = document.createElement("p");
            // description.classList.add("description")
            // description.innerText = `Description: ${product.description}`;
            // const price = document.createElement("p");
            // price.classList.add("price")
            // price.innerText = `Price: $${product.price}`;
            // const image = document.createElement("img")
            // image.src = product.image;
            // image.alt = product.title;
            // image.width = "450px";
            // image.height = "450px";
            // const button = document.createElement("button");
            // button.classList.add("btn")
            // button.innerText = "Add to Basket";
            // productCard.appendChild(title)
            // productCard.appendChild(description)
            // productCard.appendChild(price)
            // productCard.appendChild(image)

            container.appendChild(productCard)
        });
        //?third way
        // products.forEach( product => {
        //     const productCard = document.getElementById(`${product.id}`)
        //     container.appendChild(productCard)
        // });
    }
    catch(err){
        console.error(err)
    }
})


let basket = []



function checkId(element){
    const id = element.id
    if (!basket.includes(id)) {
        basket.push(id)
};
    let basketCount = basket.length;
    document.getElementById("basketCount").innerText = basketCount;
}



let basketItems = []


function appendObject(array, newObject) {
    const exists = array.some(item => JSON.stringify(item) === JSON.stringify(newObject));
    if (!exists) {
        array.push(newObject);
    }
}


function showBasket(){
    basket.forEach(async id=>{
        try{
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        const product = products.find(product => product.id == id);
        appendObject(basketItems,product)
        }
        catch(err){console.error(err)}
    })
    setTimeout(()=>{console.log(basketItems)},10000)
    return basketItems
}