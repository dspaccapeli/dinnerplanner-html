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
            this.dishList.html("Dishes could not be loaded because of an error.");
        });
    }

    let init = function () {
        let viewHTML = "<h3 align='center'>FIND A DISH</h3><hr><div class='row'><div class='form-group col-sm-4'>"
            + "<input type='text' class='form-control' id='keywords' placeholder='Enter key words'></div><div class='dropdown col-sm-4'>"
            + "<button class='btn btn-info btn-block dropdown-toggle' type='button' data-toggle='dropdown' id='dropdownSelected'>All<span class='caret'></span></button>"
            + "<ul id='typeFilter' class='dropdown-menu'><li><a href='#'>All</a></li><li><a href='#'>starter</a></li><li><a href='#'>main dish</a></li>"
            + "<li><a href='#'>dessert</a></li></ul></div><div class='col-sm-4' align='center' style='padding-top: 5px;'>"
            + "<button id='search_button' class='btn btn-info' type='button'>Search</button></div></div><hr><br><div class='row align-items-center' id='dish_again_list'><div class='loading'></div></div>";

        container.html(viewHTML);
        console.log()
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