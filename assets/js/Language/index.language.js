$(async () => {
    $(async () => {
        vi = await getProductsData("./data/vi.json");
        en = await getProductsData("./data/en.json");

        let dataProduct

        $("#vie").click(() => {
            dataProduct = vi;
            switchNavFooterVi(dataProduct.content_nav_footer);
            $("#abros_olive_punto_o_lace_up_casual_shoes").text(dataProduct.content_products.abros_olive_punto_o_lace_up_casual_shoes.header);
            $("#campus_black_explore_mid_top_lace_up_casual_shoes").text(dataProduct.content_products.campus_black_explore_mid_top_lace_up_casual_shoes.header);
            $("#campus_black_round_toe_thong_style_flip_flops_").text(dataProduct.content_products.campus_black_round_toe_thong_style_flip_flops_.header);
        })

        $("#eng").click(() => {
            dataProduct = en;
            switchNavFooterEn(dataProduct.content_nav_footer);
            $("#abros_olive_punto_o_lace_up_casual_shoes").text(dataProduct.content_products.abros_olive_punto_o_lace_up_casual_shoes.header);
            $("#campus_black_explore_mid_top_lace_up_casual_shoes").text(dataProduct.content_products.campus_black_explore_mid_top_lace_up_casual_shoes.header);
            $("#campus_black_round_toe_thong_style_flip_flops_").text(dataProduct.content_products.campus_black_round_toe_thong_style_flip_flops_.header);
            // location.reload(true);
        })
    });
})