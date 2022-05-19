$(async () => {
    let vie = $("#vie");
    let eng = $("#eng");


    eng.click(() => {
        switchNavFooterEn();
        // $("#headerProduct").text(dataProduct[])
        $("#titleSP").text(dataProduct[localStorage.getItem("product-id")].en.header);
        $("#contentProduct").text(dataProduct[localStorage.getItem("product-id")].en.detail);
    })

    vie.click(() => {
        switchFooterNavFooterVi();
        $("#titleSP").text(dataProduct[localStorage.getItem("product-id")].vi.header);
        $("#contentProduct").text(dataProduct[localStorage.getItem("product-id")].vi.detail);
    })


})