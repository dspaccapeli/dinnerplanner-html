let DinnerOverviewViewCtrl = function (view, model, generalStateCtrl) {
    view.printRecipeButton.click(function () {
        generalStateCtrl.printDinner();
    });
}