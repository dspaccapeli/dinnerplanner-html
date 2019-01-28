$(function() {
	//We instantiate our model
    let model = new DinnerModel();
    model.setNumberOfGuests(5);
    model.addDishToMenu(1);
    model.addDishToMenu(102);
    model.addDishToMenu(202);

    let headerView = new HeaderView($("#header"), model);

    let topbarView = new TopbarView($("#topbar"), model);
    let topbarCtrl = new TopbarCtrl(topbarView, model, this);

    let menu = new Menu($("#menu"), model);
    let menuCtrl = new MenuCtrl(menu, model, this);

    let selectDishAgainView = new SelectDishAgainView($("#dishes"), model);
    let selectDishAgainCtrl = new SelectDishAgainCtrl(selectDishAgainView, model, this);

    let dinnerPrintoutView = new DinnerPrintoutView($("#dinner_printout"), model);
    let dinnerPrintoutCtrl = new DinnerPrintoutCtrl(dinnerPrintoutView, model, this);

    let dishDetailsView = new DishDetailsView($("#content"), model);
    let dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, this);

    let dinnerOverviewView = new DinnerOverviewView($("#content"), model);
    let dinnerOverviewCtrl = new DinnerOverviewCtrl(dinnerOverviewView, model, this);

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

    let showHome = function() {
        $("#homeview_content").show();
    };

    let hideHome = function() {
        $("#homeview_content").hide();
    };

    let showPrintoutView = function() {
        $("#dinner_printout").show();
    };

    let hidePrintoutView = function() {
        $("#dinner_printout").hide();
    };

    let showDishDetails = function() {
        $("#dish").show();
        $("#ingredients").show();
    };

    let hideDishDetails = function() {
        $("#dish").hide();
        $("#ingredients").hide();
    };

    let showDinnerOverview = function() {
        $("#dishOverview_content").show();
        $("#print_recipe").show();
    };

    let hideDinnerOverview = function() {
        $("#dishOverview_content").hide();
        $("#print_recipe").hide();
    };

    let hideAllViews = function() {
        hideHome();
        hideMenu();
        hideSelectDish();
        hideTopbar();
        hidePrintoutView();
        hideDishDetails();
        hideDinnerOverview();
    };

    this.showHome = function () {
        hideAllViews();
        showHome();
    }

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

    this.showHome();

    let showCall = this.showSelect;

    $("#createNewDinner").click(function () {
        showCall();
    });

});