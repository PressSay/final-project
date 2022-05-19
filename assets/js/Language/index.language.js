$(async()=>{
    $(async () => {
        let vie = $("#vie");
        let eng = $("#eng");
    
        eng.click(()=>{
            switchNavFooterEn();
            $("#abros_olive_punto_o_lace_up_casual_shoes").text(dataProduct.abros_olive_punto_o_lace_up_casual_shoes.en.header);
            $("#campus_black_explore_mid_top_lace_up_casual_shoes").text(dataProduct.campus_black_explore_mid_top_lace_up_casual_shoes.en.header);
            $("#campus_black_round_toe_thong_style_flip_flops_").text(dataProduct.campus_black_round_toe_thong_style_flip_flops_.en.header);
        })
        
        vie.click(()=>{
            switchFooterNavFooterVi();
            $("#abros_olive_punto_o_lace_up_casual_shoes").text(dataProduct.abros_olive_punto_o_lace_up_casual_shoes.vi.header);
            $("#campus_black_explore_mid_top_lace_up_casual_shoes").text(dataProduct.campus_black_explore_mid_top_lace_up_casual_shoes.vi.header);
            $("#campus_black_round_toe_thong_style_flip_flops_").text(dataProduct.campus_black_round_toe_thong_style_flip_flops_.vi.header);
            // location.reload(true);
        })
    });
})