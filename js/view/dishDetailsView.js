let DishDetailsView = function (container, model) {

    function dishHTML(dishDict) {
        let HTMLString = "";
        HTMLString += "<h1 id=\"name\">" + dishDict.name + "</h1>";
        HTMLString += "<div id=\"image\">";
        HTMLString += "<img src='images/" + dishDict.image +  "' alt=\""+ dishDict.name + " class=\"image_responsive\" style=\"width: 100%;\">";
        HTMLString += "</div>";
        HTMLString += "<p class=\"body_text\" id=\"description\" style=\"padding-left: 0;\">" + dishDict.description + "</p>";

        return HTMLString;
    }

    function ingredientsHTML(numOfPeople, dishDict) {
        let HTMLString = "";
        HTMLString = "<h3 id=\"numOfPeople\" align='center' class='padding_10'>"+ "INGREDIENTS FOR " + numOfPeople + " PEOPLE" + "</h3>";
        HTMLString += "<div class='padding_5'><table id=\"table\" class=\"table\">";
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
        HTMLString += "</div>";

        return [HTMLString, total];
    }

    var init = function () {
        let dishDict = model.getChosenDish();
        let numOfPeople = model.getNumberOfGuests();
        let dishDiv = container.find("#dish");
        let ingredientsDiv = container.find("#ingredients");

        var html = "<div id='dish_description'>";
        html += dishHTML(dishDict);
        html += "</div><button type=\"button\" class=\"btn btn-warning\" id='backToSearch'>Back to search</button>";
        dishDiv.html(html);

        var html2 = "<div id='ingredients1' class='margin_5'>";
        html2 += ingredientsHTML(numOfPeople, dishDict)[0];
        html2 += "</div><div id=\"add_price\" class=\"row\"><div class=\"col-5\">"
        html2 += "<div align=\"center\"><button type=\"button\" class=\"btn btn-warning\" id='addToMenu'>Add to menu</button></div>";
        html2 += "</div><div class=\"col-3\"></div><div id=\"total_ingredients\" class=\"col-3\">";
        html2 += "SEK " + ingredientsHTML(numOfPeople, dishDict)[1] + "</div>";

        ingredientsDiv.html(html2);
    }

    init();

    this.backToSearchButton = container.find("#backToSearch");
    this.addToMenuButton = container.find("#addToMenu");

    this.update = function(model, changeDetails) {
        let dishDict = model.getChosenDish();
        let numOfPeople = model.getNumberOfGuests();
        let dishDiv = container.find("#dish_description");
        let ingredientsDiv = container.find("#ingredients1");
        let totalIngredients = container.find("#total_ingredients");

        // update main dish information
        dishDiv.html(dishHTML(dishDict));

        // update ingredients information
        ingredientsDiv.html(ingredientsHTML(numOfPeople, dishDict)[0]);
        totalIngredients.html("SEK " + ingredientsHTML(numOfPeople, dishDict)[1]);
    }

    model.addObserver(this.update);

}
