<footer id="footer" class="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <h4 id="ttshop" class="font-rubik font-size-20">Shop Giày</h4>
            <p id="detailttshop" class="font-size-14 font-rale text-white-50">
              Shop chuyển bán các loại giày dép mang thương hiệu con cá
            </p>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <h4 id="news" class="font-rubik font-size-20">Bản tin</h4>
            <form>
              <div class="input-group">
                <div class="input-group-prepend">
                  <label
                    for="email"
                    class="input-group-text"
                    id="subscribe-desc"
                    >@</label
                  >
                </div>
                <input id="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-describedby="subscribe-desc"/>
                <div class="input-group-append">
                  <button id="subscriber" type="submit" class="btn btn-primary">
                    Đăng ký
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 col-12">
            <h4 id="informationWeb" class="font-rubik font-size-20">
              Thông tin
            </h4>
            <div class="d-flex flex-column flex-wrap">
              <a
                id="aboutus"
                href="aboutus.html"
                class="font-rale font-size-14 text-white-50 pb-1"
                >Về chúng tôi</a
              >
              <a
                id="delivery"
                href="delivery.html"
                class="font-rale font-size-14 text-white-50 pb-1"
                >Thông tin giao hàng</a
              >
              <a
                id="privacy"
                href="PrivacyPolicy.html"
                class="font-rale font-size-14 text-white-50 pb-1"
                >Chính sách bảo mật</a
              >
              <a
                id="terms"
                href="#"
                class="font-rale font-size-14 text-white-50 pb-1"
                >Điều khoản và điều kiện</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
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
    let input_group_prepend_footer = $("<div class='input-group-prepend'></div>");
    let input_email_footer
    let input_group_append_footer

    let colfooter3
    let informationWebFooter

    let d_flex_footer
    let aboutus_footer
    let delivery_footer
    let privacy_footer
    let terms_footer



});
