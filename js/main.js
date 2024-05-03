let products = [];//empty array is declared
var productListId = document.querySelector("#product-list-id");//returns the Element of the document that matches the specified selector
async function getProductDetails(_this) {
    _this.innerHTML = "Loading";
    _this.disabled = true;
    let response = await fetch("https://fakestoreapi.com/products");//used to wait for a Promise
    products = await response.json();
    _this.style.display = "none";
    await printProductDetails();

}


async function  printProductDetails(){
    console.log(products);
    let htmlList = products
    .map((product) => { //printing product images,title,price 
        return `<div class="product-item">
        <img src="${product.image} " data-bs-toggle="modal" data-bs-target="#exampleModal"  >
        <p>${product.title}</p>
        <p>${"$:"+product.price+"/-"}</p>
        
        </div> 
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><p>${product.title}</p></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <img src="${product.image} " class="w-50 mx-5" >
                <p>${product.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>`;
    })
    .join("");

    productListId.innerHTML = htmlList; //used print the array in dynamic
}