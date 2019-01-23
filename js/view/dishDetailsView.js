let DishDetailsView = function (container, model) {
    //In the real one it should be the selected one
    let dishDict = model.getDish(1);

    let numOfPeople = model.getNumberOfGuests();

    let HTMLString = "";

    let midColumn = container.find("#name");

    HTMLString += dishDict.name;

    midColumn.html(HTMLString);

    midColumn = container.find("#description");

    HTMLString = "";

    HTMLString += dishDict.description;

    midColumn.html(HTMLString);

    midColumn = container.find("#image");

    HTMLString = "";

    HTMLString += "<img src='images/" + dishDict.image +  "' alt=\""+ dishDict.name + " class=\"image_responsive\" style=\"width: 100%;\">";

    midColumn.html(HTMLString)

    let table = container.find("#numOfPeople")

    HTMLString = "";

    HTMLString += "INGREDIENTS FOR " + numOfPeople + " PEOPLE";

    table.html(HTMLString);

    table = container.find("#table");

    HTMLString = "";

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

    table.html(HTMLString);

    table = container.find("#total");

    HTMLString = "SEK " + total;

    table.html(HTMLString);
}
