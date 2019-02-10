let SelectDishView = function (container, model) {

    function getAllDishesData(promise) {
        this.dishList.html("");
        promise.then(dishDict => {
            dishDict.forEach((entry) => {
                let name = entry.name;
                let img = entry.image;
                let id = entry.id;
                let dishItem = new DishItemView(this.dishList, model, id, name, img);
            });

            if (Object.keys(dishDict).length === 0) {
                this.dishList.html("No dishes matching this criteria were found.");
            }
        }).catch( error => {
            if (error.name === "TypeError" && error.message === "Failed to fetch") {
                this.dishList.html("Could not load data from the server. Please check your internet connection and try again.");
            }
            else {
                this.dishList.html("An unknown error occured: "+ error.message);
            }
        });
    }

    let init = function () {
        let viewHTML = "<h3 align='center'>FIND A DISH</h3><hr><div class='row'><div class='form-group col-sm-4'>"
            + "<input type='text' class='form-control' id='keywords' placeholder='Enter key words'></div><div class='dropdown col-sm-4'>"
            + "<button class='btn btn-info btn-block dropdown-toggle' type='button' data-toggle='dropdown' id='dropdownSelected'>All<span class='caret'></span></button>"
            + "<ul id='typeFilter' class='dropdown-menu'><li><a href='#'>All</a></li><li><a href='#'>Appetizer</a></li><li><a href='#'>Main Course</a></li>" +
            "<li><a href='#'>Side Dish</a></li><li><a href='#'>Dessert</a></li><li><a href='#'>Salad</a></li><li><a href='#'>Bread</a></li>" +
            "<li><a href='#'>Breakfast</a></li><li><a href='#'>Soup</a></li><li><a href='#'>Beverage</a></li><li><a href='#'>Sauce</a></li><li><a href='#'>Drink</a></li>"
            + "<li><a href='#'>Dessert</a></li></ul></div><div class='col-sm-4' align='center' style='padding-top: 5px;'>"
            + "<button id='search_button' class='btn btn-info' type='button'>Search</button></div></div><hr><br><div class='row align-items-center' id='dish_again_list'><div class='loading'></div></div>";
        container.html(viewHTML);
        this.dishList = container.find("#dish_again_list");

        // TODO: API connect
        getAllDishesData(model.getAllTypes());
    };

    init();

    this.dishList = container.find("#dish_again_list");
    this.searchButton = container.find("#search_button");
    this.keywords = container.find("#keywords");
    this.typeValue = container.find("#dropdownSelected");
    this.typeFilter = container.find("#typeFilter li a");

    this.update = function (model, changeDetails) {

        if (changeDetails == "searching") {
            let searchWords = this.keywords.val();
            let type = this.typeValue.data('type');
            this.dishList.html("<div class='loading'></div>");

            getAllDishesData(model.getAllDishes(type, searchWords))
        }

    };
    model.addObserver(this.update);

};