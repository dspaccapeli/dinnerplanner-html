let SelectDishView = function (container, model) {

    let init = function () {
        let viewHTML = "<h3 align='center'>FIND A DISH</h3><hr><div class='row'><div class='form-group col-sm-4'>"
            + "<input type='text' class='form-control' id='keywords' placeholder='Enter key words'></div><div class='dropdown col-sm-4'>"
            + "<button class='btn btn-info btn-block dropdown-toggle' type='button' data-toggle='dropdown' id='dropdownSelected'>All<span class='caret'></span></button>"
            + "<ul id='typeFilter' class='dropdown-menu'><li><a href='#'>All</a></li><li><a href='#'>starter</a></li><li><a href='#'>main dish</a></li>"
            + "<li><a href='#'>dessert</a></li></ul></div><div class='col-sm-4' align='center' style='padding-top: 5px;'>"
            + "<button id='search_button' class='btn btn-info' type='button'>Search</button></div></div><hr><br><div class='row align-items-center' id='dish_again_list'></div>";

        container.html(viewHTML);
        let dishDict = model.getAllTypes();

        let dishList = container.find("#dish_again_list");

        dishDict.forEach((entry) => {
            let name = entry.name;
            let img = entry.image;
            let id = entry.id;
            let dishItem = new DishItemView(dishList, model, id, name, img);
        });
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

            let dishDict = model.getAllTypes();

            dishDict = model.getAllDishes(type, searchWords);

            this.dishList.html("");

            dishDict.forEach((entry) => {
                let name = entry.name;
                let img = entry.image;
                let id = entry.id;
                let dishItem = new DishItemView(this.dishList, model, id, name, img);
            });

            if (Object.keys(dishDict).length === 0) {
                this.dishList.html("No dishes matching this criteria were found.");
            }
        }

    };
    model.addObserver(this.update);

};