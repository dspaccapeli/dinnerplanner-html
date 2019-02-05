let TopbarView = function (container, model) {

    var init = function () {
        let HTMLString = "";
        HTMLString += "<div class=\"container-fluid pt-10 pb-10\">";
        HTMLString += "<div class=\"row\">";
        HTMLString += "<div id=\"numOfPeople\" class=\"col\"><h3>My Dinner: " + model.getNumberOfGuests() + " people</h3></div>";
        HTMLString += "<div class=\"col\"></div><div class=\"col\">";
        HTMLString += "<div align=\"center\"> <button type=\"button\" class=\"btn btn-info\" id='backToEdit'>Go back and edit dinner</button></div>";
        HTMLString += "</div></div></div>";
        container.html(HTMLString);
    }

    init();

    this.backToEdit = container.find("#backToEdit");

    this.update = function(model, changeDetails) {
        var numberPeople = container.find("#numOfPeople");
        numberPeople.html("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3>");
    }

    model.addObserver(this.update);

}