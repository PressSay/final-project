
$(async () => {
    data = await getProductsData("./data/products.json");
    console.log(Object.entries(data));
});