$(async () => {
    let vie = $("#vie");
    let eng = $("#eng");

    eng.click(() => {
        switchNavFooterEn();
        for ([key, value] of Object.entries(dataProduct)) {
            $("#"+key).text(value.en.header);
        }
    })

    vie.click(() => {
        switchFooterNavFooterVi();
        for ([key, value] of Object.entries(dataProduct)) {
            $("#"+key).text(value.vi.header);
        }
    })

    console.log("Hello");

})