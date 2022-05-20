$(async()=>{
    let data_delivery = await getProductsData("./data/content_delivery.json");

    $("#eng").click(()=>{
        switchNavFooterEn();
        $("#ttdelivery1").text(data_delivery.en.ttdelivery1);
        $("#pdelivery1").text(data_delivery.en.pdelivery1);
        $("#pdelivery2").text(data_delivery.en.pdelivery2);
        $("#adelivery1").text(data_delivery.en.adelivery1);
        $("#ttdelivery2").text(data_delivery.en.ttdelivery2);
        $("#pdelivery3").text(data_delivery.en.pdelivery3);
        $("#ttdelivery3").text(data_delivery.en.ttdelivery3);
        $("#pdelivery4").text(data_delivery.en.pdelivery4);
        $("#ttdelivery4").text(data_delivery.en.ttdelivery4);
        $("#ttdelivery5").text(data_delivery.en.ttdelivery5);
        $("#pdelivery5").text(data_delivery.en.pdelivery5);
        $("#ttdelivery6").text(data_delivery.en.ttdelivery6);
        $("#pdelivery6").text(data_delivery.en.pdelivery6);
        $("#ttdelivery7").text(data_delivery.en.ttdelivery7);
        $("#pdelivery7").text(data_delivery.en.pdelivery7);
    });

    $("#vie").click(()=>{
        switchNavFooterVi();
        $("#ttdelivery1").text(data_delivery.vi.ttdelivery1);
        $("#pdelivery1").text(data_delivery.vi.pdelivery1);
        $("#pdelivery2").text(data_delivery.vi.pdelivery2);
        $("#adelivery1").text(data_delivery.vi.adelivery1);
        $("#ttdelivery2").text(data_delivery.vi.ttdelivery2);
        $("#pdelivery3").text(data_delivery.vi.pdelivery3);
        $("#ttdelivery3").text(data_delivery.vi.ttdelivery3);
        $("#pdelivery4").text(data_delivery.vi.pdelivery4);
        $("#ttdelivery4").text(data_delivery.vi.ttdelivery4);
        $("#ttdelivery5").text(data_delivery.vi.ttdelivery5);
        $("#pdelivery5").text(data_delivery.vi.pdelivery5);
        $("#ttdelivery6").text(data_delivery.vi.ttdelivery6);
        $("#pdelivery6").text(data_delivery.vi.pdelivery6);
        $("#ttdelivery7").text(data_delivery.vi.ttdelivery7);
        $("#pdelivery7").text(data_delivery.vi.pdelivery7);
    });

})