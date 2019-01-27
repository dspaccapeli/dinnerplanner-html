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

	let showMenu = function() {
        $("#menu").show();
    };

    let hideMenu = function() {
        $("#menu").hide();
    };

    let showSelectDish = function() {
        $("#dishes").show();
    };

    let hideSelectDish = function() {
        $("#dishes").hide();
    };

    let showTopbar = function() {
        $("#topbar").show();
    };

    let hideTopbar = function() {
        $("#topbar").hide();
    };

    let showPrintoutView = function() {
        $("#dinner_printout").show();
    };

    let hidePrintoutView = function() {
        $("#dinner_printout").hide();
    };

    let showDishDetails = function() {
        $("#content").show();
    };

    let hideDishDetails = function() {
        $("#content").hide();
    };

    let showDinnerOverview = function() {
        $("#content").show();
    };

    let hideDinnerOverview = function() {
        $("#content").hide();
    };

    let hideAllViews = function() {
        hideMenu();
        hideSelectDish();
        hideTopbar();
        hidePrintoutView();
        hideDishDetails();
        hideDinnerOverview();
    };

    this.showSelect = function() {
        hideAllViews();
        showMenu();
        showSelectDish();
    };

    this.showPrintout = function() {
        hideAllViews();
        showTopbar();
        showPrintoutView();
    };

    this.showDetails = function() {
        hideAllViews();
        showMenu();
        showDishDetails();
    };

    this.showOverview = function() {
        hideAllViews();
        showTopbar();
        showDinnerOverview();
    };

});