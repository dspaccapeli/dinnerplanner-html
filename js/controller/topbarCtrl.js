let TopbarCtrl = function (view, model, generalStateCtrl) {

    view.backToEdit.click(function () {
        generalStateCtrl.showSelect();
    });

}