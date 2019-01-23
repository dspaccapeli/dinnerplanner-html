let DishOverviewView = function (container, model) {

    //var numberOfGuests = container.find("#people");

    //In the real one it should be the menu
    // let menuDict = model.getFullMenu();
    let menuArray = [];
    menuArray.push(model.getAllDishes("starter")[0]);
    menuArray.push(model.getAllDishes("main dish")[0]);
    menuArray.push(model.getAllDishes("dessert")[0]);

    let numOfPeople = model.getNumberOfGuests();

    let menuTotal = 0;

    let HTMLString = "";

    let firstRow = container.find("#numOfPeople");

    HTMLString += "<h3>My Dinner: " + numOfPeople + " people</h3>";

    firstRow.html(HTMLString);

    let midColumn = container.find("#dishes");

    HTMLString = "";

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

    HTMLString += "</div>";

    console.log(HTMLString);

    midColumn.html(HTMLString);

    let right = container.find("#total");

    HTMLString = "";

    HTMLString += menuTotal + " SEK";

    right.html(HTMLString);


}
