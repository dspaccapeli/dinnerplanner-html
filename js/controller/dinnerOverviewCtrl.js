let DinnerOverviewCtrl = function (view, model, generalStateCtrl) {
    view.printRecipeButton.click(function () {
        generalStateCtrl.showPrintout();
    });
}