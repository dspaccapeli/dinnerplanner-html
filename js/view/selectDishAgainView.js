var SelectDishViewAgain = function (container, model) {

    var dishes = container.find("#dish_again_list");

    var dishDict = model.getAllTypes();

    var HTMLSTring = "";
    dishDict.forEach((entry) => {
        var name = entry.name;
        var img = entry.image;

        HTMLSTring += "<div class='media_box col-md-4 col-sm-4'><div class='media-top'><img src='images/";
        HTMLSTring += img;
        HTMLSTring += "' class='media-object' style='width:100%; height: auto;'></div><div class='media-body' align='center'><h4 class='media-heading'>";
        HTMLSTring += name;
        HTMLSTring += "</h4></div></div>";
    });

    dishes.html(HTMLSTring);

}