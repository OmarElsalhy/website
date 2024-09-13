/*const search = () => {
    const searchbox = document.getElementsById("search-item").value.toUpperCase();
    const storeitems = document.getElementsById("product-list")
    const product = document.querySelectorAll(".pro")
    const pname = storeitems.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];

        if (match) {

            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].computedStyleMap.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}*/



function search() {

    let searchBar = document.querySelector('.search-item').Value.toUpperCase();
    let productList = document.querySelector('.product-list');
    let product = document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('h5');
    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar >= 0)) {
            product[i].Style.display = "";
        } else {
            product[i].Style.display = "none";
        }
    }
}

