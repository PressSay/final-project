function switchNavFooterEn(data) {
   // thanh nav
    $("#index").text(data.nav.index);
    $("#product").text(data.nav.product);
    $("#search-vaue").attr("placeholder",`${data.nav.search_value}`);
    $("#search-buton").text(data.nav.search_button);
    $("#signin").text(data.nav.signin);
    $("#signup").text(data.nav.signup);
    // thanh footer
    $("#ttshop").text(data.footer.ttshop);
    $("#detailttshop").text(data.footer.detailttshop);
    $("#news").text(data.footer.news);
    $("#subscriber").text(data.footer.subscriber);
    $("#informationWeb").text(data.footer.information_web);
    $("#aboutus").text(data.footer.aboutus);
    $("#delivery").text(data.footer.delivery);
    $("#privacy").text(data.footer.privacy);
    $("#terms").text(data.footer.terms);
    $("#topsale_header").text(data.footer.topsale_header);
    $("#formsearch").attr("action","search.html#en");
}

function switchNavFooterVi(data) {
    // thanh nav
    $("#index").text(data.nav.index);
    $("#product").text(data.nav.product);
    $("#search-vaue").attr("placeholder",`${data.nav.search_value}`);
    $("#search-button").text(data.nav.search_button);
    $("#signin").text(data.nav.signin);
    $("#signup").text(data.nav.signup);
    // thanh footer
    $("#ttshop").text(data.footer.ttshop);
    $("#detailttshop").text(data.footer.detailttshop);
    $("#news").text(data.footer.news);
    $("#subscriber").text(data.footer.subscriber);
    $("#informationWeb").text(data.footer.information_web);
    $("#aboutus").text(data.footer.aboutus);
    $("#delivery").text(data.footer.delivery);
    $("#privacy").text(data.footer.privacy);
    $("#terms").text(data.footer.terms);
    $("#topsale_header").text(data.footer.topsale_header);
    $("#formsearch").attr("action","search.html#vi");
    // location.reload(true);
}