let MenuViewCtrl = function (view, model, generalStateCtrl) {
    view.confirmButton.click(function () {
        generalStateCtrl.confirmDinner();
    });

    view.peopleSelect.change(function() {
        model.setNumberOfGuests($(this).val());
    });
};