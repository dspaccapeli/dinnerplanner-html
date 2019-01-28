let DishDetailsCtrl = function (view, model, generalStateCtrl) {

    view.backToSearchButton.click(function () {
        generalStateCtrl.showSelect();
    });

    view.addToMenuButton.click(function () {
        model.addDishToMenu(model.getChosenDish().id);
    });
}
