var SelectDishViewAgain = function (container, model) {

    $('#people_number option:contains(' + model.getNumberOfGuests() + ')').prop({selected: true});

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

    var selectedDish = container.find("#table_body");

    var selected = model.getDish(1);
    var price = 0;
    selected.ingredients.forEach((entry) => {
        price += entry.price;
    });

    var stringSelected = "<tr id='selected'><td>";
    stringSelected += selected.name;
    stringSelected += "</td><td>SEK ";
    stringSelected += (price * (model.getNumberOfGuests()));
    stringSelected += "</td></tr><tr class='table-info' id='total'><td></td><td class='blue'>SEK ";
    stringSelected += model.getTotalMenuPrice();
    stringSelected += "</td></tr>";

    selectedDish.html(stringSelected);

    var totalNumField = container.find("#total_navbar");
    totalNumField.html("<h4 class='blue' style='padding-top: 5px;'>SEK " + model.getTotalMenuPrice() + "</h4>");

}