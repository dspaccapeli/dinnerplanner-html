let MenuView = function (container, model) {

    function updateGuestNumber() {
        $('#people_number').filter(function() {
            return $(this).text() === model.getNumberOfGuests();
        }).prop({selected: true});
    }

    function showDishesOnMenu() {
        let menuDict = model.getFullMenu();
        let stringSelected = "";
        menuDict.forEach((entry) => {
            let price = 0;
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

        return stringSelected;
    }

    let init = function () {
        let viewHTML = "<div class='row' style='padding-top: 5px;'><div class='col-sm-10 col-md-10 col-5'><h3>My Dinner</h3></div>"
            + "<div class='col-sm-1 col-md-1 col-5 d-block d-sm-none' id='total_navbar'><h4 class='blue' style='padding-top: 5px;'>SEK "
            + model.getTotalMenuPrice() + "</h4></div><div class='col-sm-1 col-md-1 col-2 d-block d-sm-none' align='right'>"
            + "<button type='button' class='btn navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'><span class='fas fa-bars'></span>"
            + "</button></div></div><hr><div id='lalala' class='navbar-collapse collapse'><div><div class='form-group'>"
            + "<label for='people_number'>People:</label><select class='form-control' id='people_number'><option>1</option><option>2</option>"
            + "<option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>"
            + "<option>10</option></select></div></div>" +
            "<table class='table table-striped'><thead><tr><th>Dish Name</th><th>Cost</th></tr></thead>"
            + "<tbody id='table_body1'></tbody></table>" +
            "<div align='center'><button type='button' class='btn btn-info' id='confirmDinner'>CONFIRM DINNER</button></div></div>";

        container.html(viewHTML);
        this.tableDiv = container.find("#table_body1");
        this.tableDiv.html(showDishesOnMenu());

        updateGuestNumber();
    };

    init();

    this.tableDiv = container.find("#table_body1");
    this.confirmButton = container.find("#confirmDinner");
    this.peopleSelect = container.find("#people_number");

    this.update = function(model, changeDetails) {
        updateGuestNumber();
        container.find("#table_body1").html(showDishesOnMenu());

    };

    model.addObserver(this.update);

};
