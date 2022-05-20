$(async () => {
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct

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