$(async()=>{
    let data_aboutus = await getProductsData("./data/content_aboutus.json");

    $("#eng").click(()=>{
        switchNavFooterEn();
        $("#ttaboutus1").text(data_aboutus.en.ttaboutus1);
        $("#paboutus1").text(data_aboutus.en.paboutus1);
        $("#ttaboutus2").text(data_aboutus.en.ttaboutus2);
        
    });

    $("#vie").click(()=>{
        switchNavFooterVi();
        $("#ttaboutus1").text(data_aboutus.vi.ttaboutus1);
        $("#paboutus1").text(data_aboutus.vi.paboutus1);
        $("#ttaboutus2").text(data_aboutus.vi.ttaboutus2);
    });

})