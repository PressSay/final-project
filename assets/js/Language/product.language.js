$(async () => {
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct

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

    $("#vie").click(() => {
        dataProduct = vi;

        switchNavFooterVi(dataProduct.content_nav_footer);
        for ([key, value] of Object.entries(dataProduct.content_products)) {
            $("#"+key).text(value.header);
        }
        $("#casual").text("bình thường")
        $("#flip_flop_slippers").text("dép xỏ ngón");
        $("#formal").text("chính thức");
        $("#sandals").text("Dép xăng đan");
        $("#sneaker").text("giày thể thao");
    });
    
    $("#eng").click(() => {
        dataProduct = en;
        
        switchNavFooterEn(dataProduct.content_nav_footer);
        for ([key, value] of Object.entries(dataProduct.content_products)) {
            $("#"+key).text(value.header);
        }
        $("#casual").text("casual");
        $("#flip_flop_slippers").text("flip flop slippers");
        $("#formal").text("formal");
        $("#sandals").text("sandals");
        $("#sneaker").text("sneaker");
    });

})