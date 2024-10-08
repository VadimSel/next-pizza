export const categories = [
	{
		name: "Пиццы",
	},
	{
		name: "Завтрак",
	},
	{
		name: "Закуски",
	},
	{
		name: "Коктейли",
	},
	{
		name: "Напитки",
	},
];

export const _ingredients = [
	{
		name: "Сырный бортик",
		price: 179,
		imageUrl: "../assets/ingredients-images/syrnyiBortik.png",
		// 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
	},
	{
		name: "Сливочная моцарелла",
		price: 79,
		imageUrl: "../assets/ingredients-images/slivochnayaMocarella.png",
		// 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
	},
	{
		name: "Сыры чеддер и пармезан",
		price: 79,
		imageUrl: "../assets/ingredients-images/syrChedderPormezan.png",
		// 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
	},
	{
		name: "Острый перец халапеньо",
		price: 59,
		imageUrl: "../assets/ingredients-images/ostryiPerecHalapenyo.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
	},
	{
		name: "Нежный цыпленок",
		price: 79,
		imageUrl: "../assets/ingredients-images/nejniyCiplyonok.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
	},
	{
		name: "Шампиньоны",
		price: 59,
		imageUrl: "../assets/ingredients-images/shampinyony.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
	},
	{
		name: "Бекон",
		price: 79,
		imageUrl: "../assets/ingredients-images/becon.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
	},
	{
		name: "Ветчина",
		price: 79,
		imageUrl: "../assets/ingredients-images/vetchina.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
	},
	{
		name: "Пикантная пепперони",
		price: 79,
		imageUrl: "../assets/ingredients-images/pikantnayaPepperoni.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
	},
	{
		name: "Острая чоризо",
		price: 79,
		imageUrl: "../assets/ingredients-images/ostrayaChirozo.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
	},
	{
		name: "Маринованные огурчики",
		price: 59,
		imageUrl: "../assets/ingredients-images/marinovanyeOgurchiki.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
	},
	{
		name: "Свежие томаты",
		price: 59,
		imageUrl: "../assets/ingredients-images/svejieTomati.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
	},
	{
		name: "Красный лук",
		price: 59,
		imageUrl: "../assets/ingredients-images/krasnyLuk.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
	},
	{
		name: "Сочные ананасы",
		price: 59,
		imageUrl: "../assets/ingredients-images/sochnyeAnanasy.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
	},
	{
		name: "Итальянские травы",
		price: 39,
		imageUrl: "../assets/ingredients-images/italianskieTravy.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
	},
	{
		name: "Сладкий перец",
		price: 59,
		imageUrl: "../assets/ingredients-images/sladkiPerec.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
	},
	{
		name: "Кубики брынзы",
		price: 79,
		imageUrl: "../assets/ingredients-images/kubikiBrynzy.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
	},
	{
		name: "Митболы",
		price: 79,
		imageUrl: "../assets/ingredients-images/mitboly.png",
		// "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
	{
		name: "Омлет с ветчиной и грибами",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970321044479C1D1085457A36EB.avif',
		imageUrl: "../assets/products-images/omletsvetchonoyigribami.avif",
		categoryId: 2,
	},
	{
		name: "Омлет с пепперони",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
		imageUrl: "../assets/products-images/omletspepperoni.avif",
		categoryId: 2,
	},
	{
		name: "Кофе Латте",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
		imageUrl: "../assets/products-images/kofelatte.avif",
		categoryId: 2,
	},
	{
		name: "Дэнвич ветчина и сыр",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FF0059B799A17F57A9E64C725.avif',
		imageUrl: "../assets/products-images/denvishvetchinaisyr.avif",
		categoryId: 3,
	},
	{
		name: "Куриные наггетсы",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif',
		imageUrl: "../assets/products-images/kurinyenaggetsy.avif",
		categoryId: 3,
	},
	{
		name: "Картофель из печи с соусом 🌱",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EED646A874549F90802E75F4D358ED.avif',
		imageUrl: "../assets/products-images/kartofelizpechissousom.avif",
		categoryId: 3,
	},
	{
		name: "Додстер",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796F96D11392A2F6DD73599921B9.avif',
		imageUrl: "../assets/products-images/dodster.avif",
		categoryId: 3,
	},
	{
		name: "Острый Додстер 🌶🌶",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FD3B594068F7A752DF8161D04.avif',
		imageUrl: "../assets/products-images/ostrydodster.avif",
		categoryId: 3,
	},
	{
		name: "Банановый молочный коктейль",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEE20B8772A72A9B60CFB20012C185.avif',
		imageUrl: "../assets/products-images/bananoviykokteil.avif",
		categoryId: 4,
	},
	{
		name: "Карамельное яблоко молочный коктейль",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE79702E87A1FCABD490D4AC5FF378.avif',
		imageUrl: "../assets/products-images/karamelnoeyablokomolochykokteil.avif",
		categoryId: 4,
	},
	{
		name: "Молочный коктейль с печеньем Орео",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FA1F50F8F8111A399E4C1A1E3.avif',
		imageUrl: "../assets/products-images/molochiykokteilsoreo.avif",
		categoryId: 4,
	},
	{
		name: "Классический молочный коктейль",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796F93FB126693F96CB1D3E403FB.avif',
		imageUrl: "../assets/products-images/molochiykokteil.avif",
		categoryId: 4,
	},
	{
		name: "Ирландский Капучино",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61999EBDA59C10E216430A6093.avif',
		imageUrl: "../assets/products-images/irlandskiykapuchino.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Карамельный капучино",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
		imageUrl: "../assets/products-images/kofekaramelniykapuchino.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Кокосовый латте",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B19FA07090EE88B0ED347F42.avif',
		imageUrl: "../assets/products-images/kofekokosoviylatte.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Американо",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B044583596548A59078BBD33.avif',
		imageUrl: "../assets/products-images/kofeamericano.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Латте",
		// imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
		imageUrl: "../assets/products-images/kofelatte.avif",
		categoryId: 5,
	},
];
