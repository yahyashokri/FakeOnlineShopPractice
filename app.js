const container = document.getElementById("cont")
const header = document.getElementById("header")

addEventListener("load", async event =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        products.forEach(product => {
            const productCard = document.createElement("div")
            productCard.classList.add("productCard")
            productCard.setAttribute("id",`${product.id}`)
            //?First way
            // productCard.innerHTML = `
            // <h2 class="title">${product.title}</h2>
            // <p class="description">${product.description}</p>
            // <p class="price">Price: $${product.price}</p>
            // <img src="${product.image}" alt="${product.title}" width="450px" height="450px">
            // <button class="btn">Add to Basket</button>
            // `;
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

            // container.appendChild(productCard)
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