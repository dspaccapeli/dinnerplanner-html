let DishDetailsView = function (container, model) {

    function dishHTML(dishDict) {
        let HTMLString = "";
        HTMLString += "<h1 id=\"name\">" + dishDict.name + "</h1>";
        HTMLString += "<div id=\"image\">";
        HTMLString += "<img src='" + dishDict.image +  "' alt=\""+ dishDict.name + " class=\"image_responsive\" style=\"width: 100%;\">";
        HTMLString += "</div>";
        HTMLString += "<p class=\"body_text\" id=\"description\" style=\"padding-left: 0;\">" + dishDict.description + "</p>";

        return HTMLString;
    }

    function ingredientsHTML(numOfPeople, dishDict) {
        let HTMLString = "";
        HTMLString = "<h3 id=\"numOfPeople\" align='center' class='padding_10'>"+ "INGREDIENTS FOR " + numOfPeople + "</h3>";
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

    function addDishInfo(changeDetails) {
        let numOfPeople = model.getNumberOfGuests();
        model.getChosenDish().then(dishDict => {
            model.setChosenDishDetails(dishDict);
            // update main dish information
            container.find("#dish_description").html(dishHTML(dishDict));

            // update ingredients information
            this.ingredientsDiv.html(ingredientsHTML(numOfPeople, dishDict)[0]);
            this.totalIngredients.html("SEK " + ingredientsHTML(numOfPeople, dishDict)[1]);
            container.find("#addToMenu").show();

            if (Object.keys(dishDict).length === 0) {
                this.dishDiv.html("Something went wrong in displaying the dish.");
                this.ingredientsDiv.html("Something went wrong in displaying the ingredients.");
                this.totalIngredients.html("");
                container.find("#addToMenu").hide();
            }

        }).catch( error => {
            if (error.name === "TypeError" && error.message === "Failed to fetch") {
                container.find("#dish_description").html("Could not load data from the server. Please check your internet connection and try again.");
                container.find("#ingredients1").html("Ingredients were not loaded due to the same problem.");
            }
            else {
                container.find("#dish_description").html("An unknown error occured: " + error.message);
                container.find("#ingredients1").html("Ingredients were not loaded due to the same problem.");
            }
            this.totalIngredients.html("");
            container.find("#addToMenu").hide();
        });
    }

    let init = function () {
        let dishDiv1 = container.find("#dish");
        let ingredientsDiv = container.find("#ingredients");

        let html = "<div id='dish_description'><div class='loading'></div>";
        html += "</div><button type=\"button\" class=\"btn btn-warning\" id='backToSearch'>Back to search</button>";
        dishDiv1.html(html);

        let html2 = "<div id='ingredients1' class='margin_5'><div class='loading'></div>";
        html2 += "</div><div id=\"add_price\" class=\"row\"><div class=\"col-5\">"
        html2 += "<div align=\"center\"><button type=\"button\" class=\"btn btn-warning\" id='addToMenu'>Add to menu</button></div>";
        html2 += "</div><div class=\"col-3\"></div><div id=\"total_ingredients\" class=\"col-3\"></div>";
        ingredientsDiv.html(html2);

        this.dishDiv = container.find("#dish_description");
        this.ingredientsDiv = container.find("#ingredients1");
        this.totalIngredients = container.find("#total_ingredients");

        addDishInfo();
    };

    init();

    this.backToSearchButton = container.find("#backToSearch");
    this.addToMenuButton = container.find("#addToMenu");
    this.dishDiv = container.find("#dish_description");
    this.ingredientsDiv = container.find("#ingredients1");
    this.totalIngredients = container.find("#total_ingredients");

    this.update = function(model, changeDetails) {
        if (changeDetails === "changeGuests") {
            container.find("#ingredients1").html("<h3 id=\"numOfPeople\" align='center' class='padding_10'>"+ "INGREDIENTS" + "</h3><div class='loading'></div>");
            container.find("#total_ingredients").html("");
            container.find("#addToMenu").hide();

            let dishDict = model.getChosenDishDetails();
            let numOfPeople = model.getNumberOfGuests();
            // update ingredients information
            container.find("#ingredients1").html(ingredientsHTML(numOfPeople, dishDict)[0]);
            container.find("#total_ingredients").html("SEK " + ingredientsHTML(numOfPeople, dishDict)[1]);
            container.find("#addToMenu").show();

        }
        else if (changeDetails === "chosenDish") {
            container.find("#ingredients1").html("<h3 id=\"numOfPeople\" align='center' class='padding_10'>"+ "INGREDIENTS" + "</h3><div class='loading'></div>");
            container.find("#dish_description").html("<div class='loading'></div>");
            container.find("#total_ingredients").html("");
            container.find("#addToMenu").hide();
            addDishInfo();
        }

    };

    model.addObserver(this.update);

};
