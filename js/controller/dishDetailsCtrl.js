let DishDetailsCtrl = function (view, model, generalStateCtrl) {

    view.backToSearchButton.click(function () {
        // TODO: open selectDishAgain again
    });

    view.addToMenuButton.click(function () {
        model.addDishToMenu(model.getChosenDish().id);
    });
}
