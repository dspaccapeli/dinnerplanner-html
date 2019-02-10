let DishItemView = function (container, model, id, name, img) {

    let init = function () {

        let containerHTML = container.html();
        /*
        let HTMLSTring = "<div class='media_box col-md-4 col-sm-4 dish_item' style='cursor: pointer;' data-dishid='" + id + "'><div class='media-top'><img src='";
        HTMLSTring += img;
        HTMLSTring += "' class='media-object' style='width:100%; height: auto;'></div><div class='media-body' align='center'><h4 class='media-heading'>";
        HTMLSTring += name;
        HTMLSTring += "</h4></div></div>";
        */
        let HTMLSTring = "<div class='media_box col-md-4 col-sm-4 dish_item' style='cursor: pointer;' data-dishid='" + id + "'><div class='box'><div class='content'><img src='";
        HTMLSTring += img;
        HTMLSTring += "' class='img img-responsive full-width media-object'></div><div class='caption' align='center'><h5 class='heading'>";
        HTMLSTring += name;
        HTMLSTring += "</h5></div></div></div>";

        containerHTML += HTMLSTring;
        container.html(containerHTML);

    }

    init();

    this.update = function (model, changeDetails) {

    };
    model.addObserver(this.update);
}