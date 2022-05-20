$(async()=>{
    let data_privacy = await getProductsData("./data/content_privacy_policy.json");

    $("#eng").click(()=>{
        switchNavFooterEn();
        $("#ttprivacy").text(data_privacy.en.ttprivacy);
    });

    $("#vie").click(()=>{
        switchNavFooterVi();
        $("#ttprivacy").text(data_privacy.vi.ttprivacy);
    });

})
