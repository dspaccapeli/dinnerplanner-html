var SelectDishAgainCtrl = function (view, model, generalStateCtrl) {

    view.dishList.on("click", '.dish_item', function() {
        model.setChosenDish($(this).data('dishid'));
        // TODO: open dish details with generalStateCtrl
    });

    // TODO: dropdown dynamics

}