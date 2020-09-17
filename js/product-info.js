var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("chevroletImagesGallery").innerHTML = htmlContentToAppend;
    }
}
   


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let chevroletNameHTML  = document.getElementById("productName");
            let chevroletDescriptionHTML = document.getElementById("productDescription");
            let chevroletCostHTML = document.getElementById("productCost");
            let chevroletCountHTML = document.getElementById("productCount");
            let chevroletRelateHTML = document.getElementById("productRelate")
            let chevroletCurrencyHTML = document.getElementById("productCurrency")
        
            chevroletNameHTML.innerHTML = product.name;
            chevroletDescriptionHTML.innerHTML = product.description;
            chevroletCountHTML.innerHTML = product.soldCount;
             
            
            showImagesGallery(product.images);
            
        }
    });
});
//comentarios
document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            comments = resultObj.data;
            showComents(comments);
        }
    });
});

var comments = [];

function showComents() {

    let htmlContentToAppend = "";

    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];

        htmlContentToAppend += `
            <div class="row">
                <div class="col">
                   <div style="margin-bottom: 20px;">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${ comment.user } </h5>
                            <small class="text-muted"> ${ comment.score } Puntuacion</small>
                        </div>
                        <div class="d-flex w-100 justify-content-between">
                            <small class="mb-1">Fecha: ${ comment.dateTime } </small>
                        </div>
                        <p class="mb-1"> ${ comment.description }</p>
                   </div>
                </div>
            </div>        
        `
        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }
}



//productos relacionados
var products = {};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
          
            products = resultObj.data;
            
          relatedProducts(products);
          
        }
    });
});



function relatedProducts(array){

    let htmlContentToAppend = "";

    for(let i = 1; i < array.length; i=i+2){
        let productImg = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + productImg.imgSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
};