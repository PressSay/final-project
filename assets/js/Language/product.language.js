$(async () => {
    let vie = $("#vie");
    let eng = $("#eng");

    eng.click(() => {
        switchNavFooterEn();
        for ([key, value] of Object.entries(dataProduct)) {
            $("#"+key).text(value.en.header);
        }
        $("#casual").text("casual")
        $("#flip_flop_slippers").text("flip flop slippers");
        $("#formal").text("formal");
        $("#sandals").text("sandals")
    })

    vie.click(() => {
        switchNavFooterVi();
        for ([key, value] of Object.entries(dataProduct)) {
            $("#"+key).text(value.vi.header);
        }
        $("#casual").text("bình thường")
        $("#flip_flop_slippers").text("dép xỏ ngón");
        $("#formal").text("chính thức");
        $("#sandals").text("Dép xăng đan")
    })

    console.log("Hello");

})