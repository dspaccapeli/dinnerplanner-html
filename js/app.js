$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    model.setNumberOfGuests(5);
    model.addDishToMenu(1);
    model.addDishToMenu(102);
    model.addDishToMenu(202);

    var menu = new Menu($("#menu"), model);

    var selectDishViewAgain = new SelectDishViewAgain($("#dishes"), model);

    var dinnerPrintoutView = new DinnerPrintoutView($("#dinner_printout"), model);

    var dishDetailsView = new DishDetailsView($("#content"), model);

    var dinnerOverviewView = new DinnerOverviewView($("#content"), model);

    let headerView = new HeaderView($("#header"), model);

    let topbarView = new TopbarView($("#topbar"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});