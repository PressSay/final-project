$(async()=>{
    let data_privacy = await getProductsData("./data/content_privacy_policy.json");

    $("#eng").click(()=>{
        switchNavFooterEn();
        $("#ttprivacy").text(data_privacy.en.ttprivacy);
        $("#liprivacy1").text(data_privacy.en.liprivacy1);
        $("#liprivacy2").text(data_privacy.en.liprivacy2);
        $("#liprivacy3").text(data_privacy.en.liprivacy3);
        $("#liprivacy4").text(data_privacy.en.liprivacy4);
        $("#liprivacy5").text(data_privacy.en.liprivacy5);
        $("#liprivacy6").text(data_privacy.en.liprivacy6);
        $("#liprivacy7").text(data_privacy.en.liprivacy7);
        $("#liprivacy8").text(data_privacy.en.liprivacy8);
        $("#liprivacy9").text(data_privacy.en.liprivacy9);
        $("#liprivacy10").text(data_privacy.en.liprivacy10);

    });

    $("#vie").click(()=>{
        switchNavFooterVi();
        $("#ttprivacy").text(data_privacy.vi.ttprivacy);
        $("#liprivacy1").text(data_privacy.vi.liprivacy1);
        $("#liprivacy2").text(data_privacy.vi.liprivacy2);
        $("#liprivacy3").text(data_privacy.vi.liprivacy3);
        $("#liprivacy4").text(data_privacy.vi.liprivacy4);
        $("#liprivacy5").text(data_privacy.vi.liprivacy5);
        $("#liprivacy6").text(data_privacy.vi.liprivacy6);
        $("#liprivacy7").text(data_privacy.vi.liprivacy7);
        $("#liprivacy8").text(data_privacy.vi.liprivacy8);
        $("#liprivacy9").text(data_privacy.vi.liprivacy9);
        $("#liprivacy10").text(data_privacy.vi.liprivacy10);
    });

})
