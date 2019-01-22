$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(3);
	model.addDishToMenu(1);
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));

	var selectDishView = new SelectDishView($("#selectDish_content"), model);

	var selectDishViewAgain = new SelectDishViewAgain($("#selectDishAgain_content"), model);

	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintout_content"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});