let Menu = function (container, model) {

    $('#people_number option:contains(' + model.getNumberOfGuests() + ')').prop({selected: true});

    var selectedDish = container.find("#table_body");

    var menuDict = model.getFullMenu();
    console.log(menuDict);
    console.log(typeof menuDict);

    var stringSelected = "";

    menuDict.forEach((entry) => {
        var price = 0;
        entry.ingredients.forEach((entry1) => {
            price += entry1.price;
        });
        stringSelected += "<tr id='selected'><td>";
        stringSelected += entry.name;
        stringSelected += "</td><td>SEK ";
        stringSelected += (price * (model.getNumberOfGuests()));
        stringSelected += "</td></tr>";
    });
    stringSelected += "<tr class='table-info' id='total_price'><td></td><td class='blue'>SEK ";
    stringSelected += model.getTotalMenuPrice();
    stringSelected += "</td></tr>";
    selectedDish.html(stringSelected);

    var totalNumField = container.find("#total_navbar");
    totalNumField.html("<h4 class='blue' style='padding-top: 5px;'>SEK " + model.getTotalMenuPrice() + "</h4>");
}
