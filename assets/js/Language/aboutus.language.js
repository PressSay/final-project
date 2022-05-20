$(async()=>{
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;

    $("#eng").click(()=>{
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
    });

    $("#vie").click(()=>{
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
    });

})