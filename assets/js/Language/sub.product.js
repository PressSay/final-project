$(async () => {
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;

    if (location.hash === "#en") {
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#titleSP").text(dataProduct.content_products[localStorage.getItem("product-id")].header);
        $("#contentProduct").text(dataProduct.content_products[localStorage.getItem("product-id")].detail);
    } else if (location.hash === "#vi") {
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#titleSP").text(dataProduct.content_products[localStorage.getItem("product-id")].header);
        $("#contentProduct").text(dataProduct.content_products[localStorage.getItem("product-id")].detail);
    }

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