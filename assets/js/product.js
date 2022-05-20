const getProductSrc = (categoryID, productID) => `./assets/images/products/${categoryID}/${productID}.png`;

function getProductsData(nameJson) {
	return new Promise((resolve, reject) =>
		$.getJSON(nameJson)
			.done(data => resolve(data))
			.fail((_, status, error) => {reject(status + ", " + error)})
	);
}


function createCard(product) {
	let card = $("<div class='card'></div>");

	
	let img = $("<img class='card-img-top'></img>");

	img.click(() => {
		window.location.href = "./sub_product.html";
		window.localStorage.setItem("product-img", product.imageUrl);
		window.localStorage.setItem("product-name", product.name);
		window.localStorage.setItem("product-id", product.id);
	})

	img.attr({
		src: product.imageUrl,
		alt: product.name,
	});
	card.append(img);

    let cardBody = $("<div class='card-body'></div>");
	card.append(cardBody);

    cardBody.append(`<h5 id=${product.id} class='card-title text-capitalize'>${product.name}</h5>`);

	let input = $("<input type='number' min='0' max='100' size='3' value='0'>");
	cardBody.append(input);


	let button = $("<button class='btn btn-primary'>Order</button>");
	button.click(() => {
		let number = parseInt(input.val());
		if (number == 0) return;
		let current = parseInt(window.localStorage.getItem(product.id) ?? "0");
		let total = current + number;
		if (total > 100) {
			alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho ,mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của " + product.name + " này.");
			return;
		}
		window.localStorage.setItem(product.id, total);
		alert("Đã cập nhật sản phẩm " + product.name + " với số lượng " + number + " vào giỏ hàng. Số lượng sản phẩm " + product.name + " đã đặt là " + parseInt(window.localStorage.getItem(product.id)) + ".");
	});
	cardBody.append(button);
	cardBody.append(`<span>${product.price}$</span>`);

    return card;
}

function createCategory(category) {
	let section = $("<section></section>");

	section.attr("id", category.id+"-section");
	section.addClass("mt-5");

	section.append(`<h3 id="${category.id}" class="text-capitalize">${category.name}</h3>`);
	section.append("<hr>");

	return section;
}

function getProducts(data, dataLanProduct) {
	let result = {};
	for ([categoryID, products] of Object.entries(data)) {
		for ([id, price] of Object.entries(products)) {
			let product = {
				id, price,
				categoryID,
				name: dataLanProduct[id].header,
				imageUrl: getProductSrc(categoryID, id)
			};
			result[id] = product;
		}
	}
	return result;
}




