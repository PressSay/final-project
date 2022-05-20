$(async()=>{
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;
    
    if (location.hash === "#en") {
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
        $("#index").attr("href", "index.html#en");
        $("#product").attr("href", "product.html#en");
        $("formsearch").attr("action","search.html#en");
    } else if (location.hash === "#vi") {
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
        $("#index").attr("href", "index.html#vi");
        $("#product").attr("href", "product.html#vi");
        $("formsearch").attr("action","search.html#vi");
    }

    $("#eng").click(()=>{
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
        $("#index").attr("href", "index.html#en");
        $("#product").attr("href", "product.html#en");
        $("formsearch").attr("action","search.html#en");
    });

    $("#vie").click(()=>{
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttaboutus1").text(dataProduct.content_aboutus.ttaboutus1);
        $("#paboutus1").text(dataProduct.content_aboutus.paboutus1);
        $("#ttaboutus2").text(dataProduct.content_aboutus.ttaboutus2);
        $("#index").attr("href", "index.html#vi");
        $("#product").attr("href", "product.html#vi");
        $("formsearch").attr("action","search.html#vi");
    });

})