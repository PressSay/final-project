$(async()=>{
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;

    $("#eng").click(()=>{
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);

        $("#ttdelivery1").text(dataProduct.content_delivery.ttdelivery1);
        $("#pdelivery1").text(dataProduct.content_delivery.pdelivery1);
        $("#pdelivery2").text(dataProduct.content_delivery.pdelivery2);
        $("#adelivery1").text(dataProduct.content_delivery.adelivery1);
        $("#ttdelivery2").text(dataProduct.content_delivery.ttdelivery2);
        $("#pdelivery3").text(dataProduct.content_delivery.pdelivery3);
        $("#ttdelivery3").text(dataProduct.content_delivery.ttdelivery3);
        $("#pdelivery4").text(dataProduct.content_delivery.pdelivery4);
        $("#ttdelivery4").text(dataProduct.content_delivery.ttdelivery4);
        $("#ttdelivery5").text(dataProduct.content_delivery.ttdelivery5);
        $("#pdelivery5").text(dataProduct.content_delivery.pdelivery5);
        $("#ttdelivery6").text(dataProduct.content_delivery.ttdelivery6);
        $("#pdelivery6").text(dataProduct.content_delivery.pdelivery6);
        $("#ttdelivery7").text(dataProduct.content_delivery.ttdelivery7);
        $("#pdelivery7").text(dataProduct.content_delivery.pdelivery7);
    });

    $("#vie").click(()=>{
        dataProduct = vi;
        switchNavFooterEn(dataProduct.content_nav_footer);

        $("#ttdelivery1").text(dataProduct.content_delivery.ttdelivery1);
        $("#pdelivery1").text(dataProduct.content_delivery.pdelivery1);
        $("#pdelivery2").text(dataProduct.content_delivery.pdelivery2);
        $("#adelivery1").text(dataProduct.content_delivery.adelivery1);
        $("#ttdelivery2").text(dataProduct.content_delivery.ttdelivery2);
        $("#pdelivery3").text(dataProduct.content_delivery.pdelivery3);
        $("#ttdelivery3").text(dataProduct.content_delivery.ttdelivery3);
        $("#pdelivery4").text(dataProduct.content_delivery.pdelivery4);
        $("#ttdelivery4").text(dataProduct.content_delivery.ttdelivery4);
        $("#ttdelivery5").text(dataProduct.content_delivery.ttdelivery5);
        $("#pdelivery5").text(dataProduct.content_delivery.pdelivery5);
        $("#ttdelivery6").text(dataProduct.content_delivery.ttdelivery6);
        $("#pdelivery6").text(dataProduct.content_delivery.pdelivery6);
        $("#ttdelivery7").text(dataProduct.content_delivery.ttdelivery7);
        $("#pdelivery7").text(dataProduct.content_delivery.pdelivery7);
    });

})