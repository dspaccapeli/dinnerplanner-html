let MenuCtrl = function (view, model, generalStateCtrl) {
    view.confirmButton.click(function () {
        // TODO: show dinnerOverview view
    });

    view.peopleSelect.change(function() {
        model.setNumberOfGuests($(this).val());
    });
}