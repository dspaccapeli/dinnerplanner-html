$(function() {
	//We instantiate our model
	var model = new DinnerModel();
    model.setNumberOfGuests(5);
    model.addDishToMenu(1);
    model.addDishToMenu(102);
    model.addDishToMenu(202);

    let headerView = new HeaderView($("#header"), model);

    let topbarView = new TopbarView($("#topbar"), model);
    var topbarCtrl = new TopbarCtrl(topbarView, model, this);

    var menu = new Menu($("#menu"), model);
    var menuCtrl = new MenuCtrl(menu, model, this);

    var selectDishAgainView = new SelectDishAgainView($("#dishes"), model);
    var selectDishAgainCtrl = new SelectDishAgainCtrl(selectDishAgainView, model, this);

    var dinnerPrintoutView = new DinnerPrintoutView($("#dinner_printout"), model);
    var dinnerPrintoutCtrl = new DinnerPrintoutCtrl(dinnerPrintoutView, model, this);

    var dishDetailsView = new DishDetailsView($("#content"), model);
    var dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, this);

    var dinnerOverviewView = new DinnerOverviewView($("#content"), model);
    var dinnerOverviewCtrl = new DinnerOverviewCtrl(dinnerOverviewView, model, this);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});