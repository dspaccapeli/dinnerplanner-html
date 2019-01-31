var SelectDishViewCtrl = function (view, model, generalStateCtrl) {

    view.dishList.on("click", '.dish_item', function() {
        model.setChosenDish($(this).data('dishid'));
        generalStateCtrl.showDetails();
    });

    view.searchButton.click(function(){
        view.update(model, "searching");
    });

    view.typeFilter.click(function(){
        view.typeValue.html($(this).html() + "<span class='caret'></span>");
        view.typeValue.data('type', $(this).html());
        view.update(model, "searching");
    });

    view.keywords.keyup(function(){
        view.update(model, "searching");
    });

}