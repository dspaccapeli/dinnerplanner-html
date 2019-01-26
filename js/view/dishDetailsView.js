let DishDetailsView = function (container, model) {

    //In the real one it should be the selected one
    let dishDict = model.getDish(1);

    let numOfPeople = model.getNumberOfGuests();

    let HTMLString = "";

    let midColumn = container.find("#dishes");

    HTMLString += "<h1 id=\"name\">" + dishDict.name + "</h1>";

    HTMLString += "<div id=\"image\">";

    HTMLString += "<img src='images/" + dishDict.image +  "' alt=\""+ dishDict.name + " class=\"image_responsive\" style=\"width: 100%;\">";

    HTMLString += "</div>";

    HTMLString += "<p class=\"body_text\" id=\"description\" style=\"padding-left: 0;\">" + dishDict.description + "</p>";

    HTMLString += "<button type=\"button\" class=\"btn btn-warning\">back to search</button>";

    midColumn.html(HTMLString);

    let ingredients = container.find("#ingredients");

    HTMLString = "<h3 id=\"numOfPeople\">"+ "INGREDIENTS FOR " + numOfPeople + " PEOPLE" + "</h3>";

    HTMLString += "<div><table id=\"table\" class=\"table\">";

    HTMLString += "<tbody>";

    let total = 0;

    (dishDict.ingredients).forEach((entry) => {
        let quantity = entry.quantity*numOfPeople;
        let price = entry.price*numOfPeople;
        total += price;
        HTMLString += "<tr>";
        HTMLString += "<td>" + quantity + " " + entry.unit + "</td>";
        HTMLString += "<td>" + entry.name + "</td>";
        HTMLString += "<td>SEK " + price + "</td>";
        HTMLString += "</tr>"
    });

    HTMLString += "</tbody>";

    HTMLString += "</table>";

    HTMLString += "</div><div id=\"add_price\" class=\"row\">";

    HTMLString += "<div class=\"col-5\">" +
        "<div align=\"center\"><button type=\"button\" class=\"btn btn-warning\">add to menu</button></div>" +
        "</div>" +
        "<div class=\"col-3\"></div>" +
        "<div id=\"total\" class=\"col-3\">";

    HTMLString += "SEK " + total + "</div>";

    ingredients.html(HTMLString);
}
