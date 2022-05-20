<nav
      class="navbar navbar-expand-lg navbar-light sticky-top"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/logo.png" alt="Logo" width="32" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a id="index" class="nav-link active" aria-current="page" href="#"
                >Trang Chủ</a
              >
            </li>
            <li class="nav-item">
              <a id="product" class="nav-link" href="product.html">Sản Phẩm</a>
            </li>
            <li class="nav-item">
              <form class="d-flex" action="search.html">
                <input
                  id="search-vaue"
                  class="form-control me-2"
                  type="search"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                  name="word"
                />
                <button
                  id="search-buton"
                  class="btn-outline-success btn text-nowrap"
                  type="submit"
                >
                  Tìm kiếm
                </button>
              </form>
            </li>
          </ul>
          <div class="d-flex">
            <a
              class="btn btn-outline-secondary mx-1"
              id="signin"
              href="login.html"
              >Đăng Nhập</a
            >
            <a
              class="btn btn-outline-secondary mx-1"
              id="signup"
              href="signup.html"
              >Đăng Ký</a
            >
            <a aria-current="page" href="cart.html">
              <i class="btn btn-outline-secondary mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </nav>


$(async()=>{
    let nav = $("<nav class='navbar navbar-expand-lg navbar-light sticky-top' style='background-color: #e3f2fd'></nav>");
    let container_fluid = $("<div class='container-fluid'></div>");

    let navbar_brand = $("<a class='navbar-brand href='index.html'></a>");
    let img_navbar = $("<img src='./assets/images/logo.png' alt='Logo' width='32' />");

    let button_navbar_toggler = $("<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'></button>");
    let span_navbar_toggler_icon = $("<span class='navbar-toggler-icon'></span>");

    let collapse_navbar_collapse = $("<div class='collapse navbar-collapse' id='navbarSupportedContent'></div>");

    let ul_navbar_me_auto = $("<ul class='navbar-nav me-auto mb-2 mb-lg-0'></ul>");

    let li_nav_item_index = $("<li class='nav_item'></li>");
    let a_li_index = $("<a id='index' class='nav-link active' aria-current='page' href='index.html#vi'>Trang Chủ</a>");

    let li_nav_item_sp = $("<li class='nav-item'></li>");
    let a_li_sp = $("<a id='product' class='nav-link' href='product.html#vi'>Sản phẩm</a>");

    let li_nav_item_form = $("<li class='nav-item'></li>");
    let a_li_form = $("<form class='d-flex' action='search.html#vi'`></form>");
    let input_search = $("<input id='search-vaue' class='form-control me-2' type='search' placeholder='Tìm kiếm' aria-label='Search' name='word'/>");

    let d_flex = $("<div class='d-flex'></div>");

    nav.append(container_fluid);

    container_fluid.append(navbar_brand);
    container_fluid.append(button_navbar_toggler);
    container_fluid.append(collapse_navbar_collapse);

    navbar_brand.append(img_navbar);

    button_navbar_toggler.append(span_navbar_toggler_icon);

    collapse_navbar_collapse.append(ul_navbar_me_auto);

    ul_navbar_me_auto.append(li_nav_item_form)


})