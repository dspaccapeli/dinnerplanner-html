let DinnerOverviewView = function (container, model) {

    function addDinnerData() {
        let menuArray = model.getFullMenu();
        let numOfPeople = model.getNumberOfGuests();
        let menuTotal = 0;

        let HTMLString = "<div class=\"row align-items-end\">";
        menuArray.forEach((entry) => {
            let price = 0;
            (entry.ingredients).forEach((ingredient) => {
                price += ingredient.price;
            });

            price *= numOfPeople;
            menuTotal += price;

            HTMLString += "<div class=\"media_box col-m-4 col-sm-4\" style=\"vertical-align: middle;\"><div class=\"media-top\">";
            HTMLString += "<img src='" + entry.image + "' class=\"media-object\" style=\"width:100%; height: auto;\"></div>";
            HTMLString += "<div class=\"media-body\" align=\"center\"><h6 class=\"media-heading\">" + entry.name + "</h6></div>";
            HTMLString += "<div align=\"right\">" + price + " SEK </div></div>";
        });
        HTMLString += "</div>";

        this.dishDiv.html(HTMLString);
        this.totalDiv.html(menuTotal + " SEK");
    }

    let init = function () {

        let HTMLString = "";
        let bottom = container.find("#dishOverview_content");
        HTMLString += "<div class=\"row\">" +
            "<div id=\"menuOverview\" class=\"col-md-4\"></div>" +
            "<div id=\"menu_dishes\" class=\"col-md-4\" style=\"padding-top: 10px;\"></div>";

        HTMLString += "<div class=\"col-md-4\" style=\"align-self: flex-end;\">" +
            "<div style=\"border-left:1px solid lightgray; height:max-content\"></div>" +
            "<div class=\"row align-items-end\">Total:</div>" +
            "<div id=\"overview_total\" class=\"row align-items-end\"></div>" +
            "</div></div>";
        bottom.html(HTMLString);

        this.printRecipeButton = container.find("#print_recipe");
        HTMLString = "";
        HTMLString += "<div class=\"container-fluid pt-10 pb-10\" id=\"menu\">" +
            "<div class=\"row\">" +
            "<div class=\"col\"></div>" +
            "<div class=\"col\">" +
            "<div align=\"center\"><button type=\"button\" class=\"btn btn-info\" id='printRecipe'>Print Full Recipe</button></div>" +
            "</div>" +
            "<div class=\"col\"></div>" +
            "</div>" +
            "</div>";
        this.printRecipeButton.html(HTMLString);

        this.dishDiv = container.find("#menu_dishes");
        this.totalDiv = container.find("#overview_total");
        addDinnerData();

    };

    init();

    this.printRecipeButton = container.find("#printRecipe");
    this.dishDiv = container.find("#menu_dishes");
    this.totalDiv = container.find("#overview_total");

    this.update = function(model, changeDetails) {
        addDinnerData();
    };
    model.addObserver(this.update);

}
