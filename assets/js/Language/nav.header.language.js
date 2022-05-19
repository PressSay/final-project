$(async () => {
    data = await getProductsData("./data/content_nav_footer.json");

    let vie = $("#vie");
    let eng = $("#eng");

    eng.click(()=>{
        // thanh nav
        $("#index").text(data.nav.en.index);
        $("#product").text(data.nav.en.product);
        $("#search-vaue").attr("placeholder",`${data.nav.en.search_value}`);
        $("#search-buton").text(data.nav.en.search_button);
        $("#signin").text(data.nav.en.signin);
        $("#signup").text(data.nav.en.signup);
        // thanh footer
        $("#ttshop").text(data.footer.en.ttshop);
        $("#detailttshop").text(data.footer.en.detailttshop);
        $("#news").text(data.footer.en.news);
        $("#subscriber").text(data.footer.en.subscriber);
        $("#informationWeb").text(data.footer.en.information_web);
        $("#aboutus").text(data.footer.en.aboutus);
        $("#delivery").text(data.footer.en.delivery);
        $("#privacy").text(data.footer.en.privacy);
        $("#terms").text(data.footer.en.terms);
        $("#topsale_header").text(data.footer.en.topsale_header);
    })
    
    vie.click(()=>{
        $("#index").text(data.nav.vi.index);
        $("#product").text(data.nav.vi.product);
        $("#search-value").attr(`placeholder='${data.nav.vi.search_value}'`);
        $("#search-button").text(data.nav.vi.search_button);
        $("#signin").text(data.nav.vi.signin);
        $("#signup").text(data.nav.vi.signup);
        // thanh footer
        $("#ttshop").text(data.footer.vi.ttshop);
        $("#detailttshop").text(data.footer.vi.detailttshop);
        $("#news").text(data.footer.vi.news);
        $("#subscriber").text(data.footer.vi.subscriber);
        $("#informationWeb").text(data.footer.vi.information_web);
        $("#aboutus").text(data.footer.vi.aboutus);
        $("#delivery").text(data.footer.vi.delivery);
        $("#privacy").text(data.footer.vi.privacy);
        $("#terms").text(data.footer.vi.terms);
        $("#topsale_header").text(data.footer.vi.topsale_header);
        // location.reload(true);
    })
});