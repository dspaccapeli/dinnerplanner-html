let MenuCtrl = function (view, model, generalStateCtrl) {
    view.confirmButton.click(function () {
        generalStateCtrl.showOverview();
    });

    view.peopleSelect.change(function() {
        model.setNumberOfGuests($(this).val());
    });
}