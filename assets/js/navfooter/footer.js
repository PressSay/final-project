$(async() => {
    let footer = $("footer");

    let containerfooter = $("<div class='container'></div>");
    let rowfooter = $("<div class='row'></div>");

    let colfooter1 = $("<div class='col-lg-4 col-12'></div");
    let ttshopfooter = $("<h4 id='ttshop' class='font-rubik font-size-20'>Shop Giày</h4>");
    let deailttshopfooter = $("<p id='detailttshop' class='font-size-14 font-rale text-white-50'>Shop chuyển bán các loại giày dép mang thương hiệu con cá</p>");

    let colfooter2 = $("<div class='col-lg-4 col-12 mb-4'></div>");
    let newsfooter = $("<h4 id='news' class='font-rubik font-size-20'>Bản tin</h4>");
    let formfooter = $("<form></form>");

    let input_group_footer = $("<div class='input-group'></div>");
    let input_group_prepend_footer = $("<div class='input-group-prepend'><label for='email' class='input-group-text' id='subscribe-desc'>@</label></div>");
    let input_email_footer = $("<input id='email' type='email' class='form-control' placeholder='Email' aria-describedby='subscribe-desc'/>");
    let input_group_append_footer = $("<div class='input-group-append'><button id='subscriber' type='submit' class='btn btn-primary'>Đăng ký</button></div>");

    let colfooter3 = $("<div class='col-lg-4 col-12'></div>");
    let informationWebFooter = $("<h4 id='informationWeb' class='font-rubik font-size-20'>Thông tin</h4>");
    let d_flex_footer = $("<div class='d-flex flex-column flex-wrap'></div>");
    //aboutus
    let aboutus_footer = $("<a id='aboutus' href='aboutus.html' class='font-rale font-size-14 text-white-50 pb-1'>Về chúng tôi</a>");
    //delivery
    let delivery_footer = $("<a id='delivery' href='delivery.html' class='font-rale font-size-14 text-white-50 pb-1'>Thông tin giao hàng</a>");
    //privacy
    let privacy_footer = $("<a id='privacy' href='PrivacyPolicy.html' class='font-rale font-size-14 text-white-50 pb-1'>Chính sách bảo mật</a>");
    //terms
    let terms_footer = $("<a id='terms' href='#' class='font-rale font-size-14 text-white-50 pb-1'>Điều khoản và điều kiện</a>");

    footer.append(containerfooter);

    containerfooter.append(rowfooter);

    rowfooter.append(colfooter1);
    rowfooter.append(colfooter2);
    rowfooter.append(colfooter3);

    colfooter1.append(ttshopfooter);
    colfooter1.append(deailttshopfooter);

    colfooter2.append(newsfooter);
    colfooter2.append(formfooter);
    formfooter.append(input_group_footer);
    input_group_footer.append(input_group_prepend_footer);
    input_group_footer.append(input_email_footer);
    input_group_footer.append(input_group_append_footer);

    colfooter3.append(informationWebFooter)
    colfooter3.append(d_flex_footer);

    d_flex_footer.append(aboutus_footer);
    d_flex_footer.append(delivery_footer);
    d_flex_footer.append(privacy_footer);
    d_flex_footer.append(terms_footer);
});
