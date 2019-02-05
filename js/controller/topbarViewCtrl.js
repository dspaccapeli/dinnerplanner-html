let TopbarViewCtrl = function (view, model, generalStateCtrl) {

    view.backToEdit.click(function () {
        generalStateCtrl.createNewDinner();
    });

}