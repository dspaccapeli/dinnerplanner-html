let DinnerOverviewView = function (container, model) {

    let menuArray = model.getFullMenu();

    let numOfPeople = model.getNumberOfGuests();

    let menuTotal = 0;

    let HTMLString = "";

    let bottom = container.find("#dishOverview_content");

    HTMLString += "<div class=\"row\">" +
        "<div id=\"menuOverview\" class=\"col-md-4\"></div>" +
        "<div id=\"dishes\" class=\"col-md-4\" style=\"padding-top: 10px;\">";
    HTMLString += "<div class=\"row align-items-end\">";

    //forEach

    menuArray.forEach((entry) => {
        let price = 0;
        (entry.ingredients).forEach((ingredient) => {
            price += ingredient.price;
        });

        price *= numOfPeople;
        menuTotal += price;

        HTMLString += "<div class=\"media_box col-m-4 col-sm-4\" style=\"vertical-align: middle;\"><div class=\"media-top\">";
        HTMLString += "<img src='images/"+ entry.image +"' class=\"media-object\" style=\"width:100%; height: auto;\"></div>";
        HTMLString += "<div class=\"media-body\" align=\"center\"><h6 class=\"media-heading\">"+entry.name+"</h6></div>";
        HTMLString += "<div align=\"right\">" + price + " SEK </div></div>";
    });

    HTMLString += "</div></div>" +
        "<div class=\"col-md-4\" style=\"align-self: flex-end;\">" +
        "<div style=\"border-left:1px solid lightgray; height:max-content\"></div>" +
        "<div class=\"row align-items-end\">Total:</div>" +
        "<div id=\"total\" class=\"row align-items-end\">";


    HTMLString += menuTotal + " SEK";

    HTMLString += "</div></div></div>";

    bottom.html(HTMLString);

    let recipe = container.find("#dishOverview_content");

    HTMLString = "";

    HTMLString += "<div class=\"container-fluid pt-10 pb-10\" id=\"menu\">" +
        "<div class=\"row\">" +
        "<div class=\"col\"></div>" +
        "<div class=\"col\">" +
        "<div align=\"center\"><button type=\"button\" class=\"btn btn-info\">Print Full Recipe</button></div>" +
        "</div>" +
        "<div class=\"col\"></div>" +
        "</div>" +
        "</div>"

}
