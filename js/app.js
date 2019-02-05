$(function() {
	//We instantiate our model
    let model = new DinnerModel();
    model.setNumberOfGuests(1);


    let headerView = new HeaderView($("#header"), model);
    let topbarView = new TopbarView($("#topbar"), model);
    let menuView = new MenuView($("#menu"), model);
    let selectDishView = new SelectDishView($("#dishes"), model);
    let dinnerPrintoutView = new DinnerPrintoutView($("#dinner_printout"), model);
    let dishDetailsView = new DishDetailsView($("#content"), model);
    let dinnerOverviewView = new DinnerOverviewView($("#content"), model);

    let topbarViewCtrl = new TopbarViewCtrl(topbarView, model, this);
    let menuViewCtrl = new MenuViewCtrl(menuView, model, this);
    let selectDishViewCtrl = new SelectDishViewCtrl(selectDishView, model, this);
    let dinnerPrintoutViewCtrl = new DinnerPrintoutViewCtrl(dinnerPrintoutView, model, this);
    let dishDetailsViewCtrl = new DishDetailsViewCtrl(dishDetailsView, model, this);
    let dinnerOverviewViewCtrl = new DinnerOverviewViewCtrl(dinnerOverviewView, model, this);

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

    this.homeScreen = function () {
        hideAllViews();
        showHome();
    }

    this.createNewDinner = function() {
        hideAllViews();
        showMenu();
        showSelectDish();
    };

    this.printDinner = function() {
        hideAllViews();
        showTopbar();
        showPrintoutView();
    };

    this.chooseDish = function() {
        hideAllViews();
        showMenu();
        showDishDetails();
    };

    this.confirmDinner = function() {
        hideAllViews();
        showTopbar();
        showDinnerOverview();
    };

    this.homeScreen();

    let showCall = this.createNewDinner;

    $("#createNewDinner").click(function () {
        showCall();
    });

});