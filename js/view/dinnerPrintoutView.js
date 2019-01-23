var DinnerPrintoutView = function (container, model) {

    var people = container.find("#people");
    people.html("<h3>My Dinner: "+ model.getNumberOfGuests() + " people</h3>");

    var menu_items = container.find("#menu_items");
    var menuDict = model.getFullMenu();

    var string = "";
    menuDict.forEach((entry) => {
        string += "<div class='row'><div class='media_box col-md-3 col-sm-4' style='vertical-align: middle;'><div class='media-top'><img src='images/";
        string += entry.image;
        string += "' class='media-object' style='width:100%; height: auto;'></div></div><div class='col-md-4 col-sm-8' id='dish'><h3>";
        string += entry.name;
        string += "</h3><p class='body_text' id='randomText1'>Type: ";
        string += entry.type;
        string += "</p></div><div class='col-md-5'><h4>Preparation</h4><p class='body_text' id='randomText2'>";
        string += entry.description;
        string += "</p></div></div>";
    });

    menu_items.html(string);

}