let DishDetailsViewCtrl = function (view, model, generalStateCtrl) {

    view.backToSearchButton.click(function () {
        generalStateCtrl.createNewDinner();
    });

    view.addToMenuButton.click(function () {
        model.addDishToMenu(model.getChosenDishId());
        generalStateCtrl.createNewDinner();
    });
};
