$(async()=>{
    vi = await getProductsData("./data/vi.json");
    en = await getProductsData("./data/en.json");

    let dataProduct;

    $("#eng").click(()=>{
        dataProduct = en;
        switchNavFooterEn(dataProduct.content_nav_footer);
        $("#ttprivacy").text(dataProduct.content_privacy_policy.ttprivacy);
        $("#liprivacy1").text(dataProduct.content_privacy_policy.liprivacy1);
        $("#liprivacy2").text(dataProduct.content_privacy_policy.liprivacy2);
        $("#liprivacy3").text(dataProduct.content_privacy_policy.liprivacy3);
        $("#liprivacy4").text(dataProduct.content_privacy_policy.liprivacy4);
        $("#liprivacy5").text(dataProduct.content_privacy_policy.liprivacy5);
        $("#liprivacy6").text(dataProduct.content_privacy_policy.liprivacy6);
        $("#liprivacy7").text(dataProduct.content_privacy_policy.liprivacy7);
        $("#liprivacy8").text(dataProduct.content_privacy_policy.liprivacy8);
        $("#liprivacy9").text(dataProduct.content_privacy_policy.liprivacy9);
        $("#liprivacy10").text(dataProduct.content_privacy_policy.liprivacy10);

    });

    $("#vie").click(()=>{
        dataProduct = vi;
        switchNavFooterVi(dataProduct.content_nav_footer);
        $("#ttprivacy").text(dataProduct.content_privacy_policy.ttprivacy);
        $("#liprivacy1").text(dataProduct.content_privacy_policy.liprivacy1);
        $("#liprivacy2").text(dataProduct.content_privacy_policy.liprivacy2);
        $("#liprivacy3").text(dataProduct.content_privacy_policy.liprivacy3);
        $("#liprivacy4").text(dataProduct.content_privacy_policy.liprivacy4);
        $("#liprivacy5").text(dataProduct.content_privacy_policy.liprivacy5);
        $("#liprivacy6").text(dataProduct.content_privacy_policy.liprivacy6);
        $("#liprivacy7").text(dataProduct.content_privacy_policy.liprivacy7);
        $("#liprivacy8").text(dataProduct.content_privacy_policy.liprivacy8);
        $("#liprivacy9").text(dataProduct.content_privacy_policy.liprivacy9);
        $("#liprivacy10").text(dataProduct.content_privacy_policy.liprivacy10);
    });

})
