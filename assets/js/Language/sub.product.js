$(async () => {
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;

    $("#eng").click(() => {
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#titleSP").text(dataProduct.content_products[localStorage.getItem("product-id")].header);
        $("#contentProduct").text(dataProduct.content_products[localStorage.getItem("product-id")].detail);
    })

    $("#vie").click(() => {
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#titleSP").text(dataProduct.content_products[localStorage.getItem("product-id")].header);
        $("#contentProduct").text(dataProduct.content_products[localStorage.getItem("product-id")].detail);
    })


})