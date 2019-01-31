//DinnerModel Object constructor
let DinnerModel = function() {

	let guestNumber = 0;
	let menu = [];
	let chosenDish = 1;


	// observer code
	let observers = [];
	this.addObserver = function (observer) {
		observers.push(observer);
	};
	this.notifyObservers = function (changeDetails) {
		for (var i = 0; i < observers.length; i++)
			observers[i](this, changeDetails);
	};
	this.removeObserver = function (observer) {
		for (var i = 0; i < observers.length; i++) {
			if (observers[i] === observer) {
				observers.splice(i, 1);
			}
		}
	};

	// help with HTTP errors
	// fetch is rejected only when there's a network error, not e.g. 404
	/* USE LIKE THIS
		fetch("https://api.imgur.com/3/album/xQY8w", {headers:{"authorization":"Client-ID SECRET"}})
		.then(handleHTTPError)
		.then(response => response.json())
		.then(console.log)
		.catch(console.error);

	 */
	function handleHTTPError(response) {
		if(response.ok)
			return response;
		throw Error(response.statusText);
	}

	// neza
	this.setChosenDish = function (id) {
		chosenDish = id;
		this.notifyObservers("chosenDish");
	};

	// daniele
	this.getChosenDish = function() {
		//get the global variable
		return this.getDish(chosenDish);
	};

	// neza
	this.setNumberOfGuests = function(num) {
		//set the global variable
		guestNumber = num;
		this.notifyObservers("changeGuests");
	};

	// daniele
	this.getNumberOfGuests = function() {
		//get the global variable
		return guestNumber;
	};

	// neza
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		let dishReturn;
		menu.forEach((entry) => {
			if(entry.type == type){
				dishReturn = entry;
			}
		});
		return dishReturn;
	};

	// daniele
	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	};

	// neza
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		let allIngredients = [];
		menu.forEach((entry) => {
			entry.ingredients.forEach((ingredient) =>{
				allIngredients.push(ingredient);
			});
		});
		return allIngredients;
	};

	// daniele
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//return the dishes as an array string (ingredients)
		let totalMenuPrice = 0;
		this.getAllIngredients().forEach((entry) => {
			totalMenuPrice = totalMenuPrice + entry.price;
		});
		return totalMenuPrice*guestNumber;
	};

	// neza
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		let toAdd = this.getDish(id);
		let newMenu = [];
		menu.forEach((entry) => {
			if(entry.type !== toAdd.type){
				newMenu.push(entry)
			}
		});
		newMenu.push(toAdd);
		menu = newMenu;
		this.notifyObservers("addedToMenu");
	};

	// daniele
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		let toAdd = this.getDish(id);
		let newMenu = [];
		menu.forEach((entry) => {
			if(entry.type !== toAdd.type){
				newMenu.push(entry)
			}
		});
		menu = newMenu;
	};

	// neza
	this.getAllTypes = function() {
		return dishes;
	};

	// daniele
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return dishes.filter(function(dish) {
		let found = true;
		if (filter && filter != "") {
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if (ingredient.name.indexOf(filter) != -1) {
					found = true;
				}
			});
			if (dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
		if (type != "All") {
			return dish.type == type && found;
		}
	  	return found;
	  });	
	};

	// neza
	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	};


	// daniele
	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	let dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

};
