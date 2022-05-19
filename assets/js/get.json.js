function getProductsData(nameJson) {
	return new Promise((resolve, reject) =>
		$.getJSON(nameJson)
			.done(data => resolve(data))
			.fail((_, status, error) => {reject(status + ", " + error)})
	);
}