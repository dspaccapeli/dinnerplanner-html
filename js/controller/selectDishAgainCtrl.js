var SelectDishAgainCtrl = function (view, model, generalStateCtrl) {

    view.dishList.on("click", '.dish_item', function() {
        model.setChosenDish($(this).data('dishid'));
        generalStateCtrl.showDetails();
    });

    // TODO: dropdown dynamics

}