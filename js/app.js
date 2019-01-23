$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(7);
	model.addDishToMenu(1);
	model.addDishToMenu(102);
	model.addDishToMenu(202);

	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));

	var menu = new Menu($("#menu"), model);

	var selectDishViewAgain = new SelectDishViewAgain($("#selectDish_content"), model);

	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintout_content"), model);

	var dishDetailsView = new DishDetailsView($("#dish_content"), model);

	var dishOverviewView = new DishOverviewView($("#overview_content"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});