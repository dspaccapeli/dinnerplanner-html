var SelectDishAgainView = function (container, model) {

    var init = function () {
        var viewHTML = "<h3 align='center'>FIND A DISH</h3><hr><div class='row'><div class='form-group col-sm-4'>"
            + "<input type='text' class='form-control' id='keywords' placeholder='Enter key words'></div><div class='dropdown col-sm-4'>"
            + "<button class='btn btn-info btn-block dropdown-toggle' type='button' data-toggle='dropdown'>All<span class='caret'></span></button>"
            + "<ul class='dropdown-menu'><li><a href='#'>Main Course</a></li><li><a href='#'>Side Dish</a></li><li><a href='#'>Dessert</a></li>"
            + "<li><a href='#'>Appetizer</a></li></ul></div><div class='col-sm-4' align='center' style='padding-top: 5px;'>"
            + "<button class='btn btn-info' type='button'>Search</button></div></div><hr><br><div class='row align-items-center' id='dish_again_list'>";

        var dishDict = model.getAllTypes();

        var HTMLSTring = viewHTML;
        dishDict.forEach((entry) => {
            var name = entry.name;
            var img = entry.image;
            var id = entry.id;

            HTMLSTring += "<div class='media_box col-md-4 col-sm-4 dish_item' style='cursor: pointer;' data-dishid='" + id + "'><div class='media-top'><img src='images/";
            HTMLSTring += img;
            HTMLSTring += "' class='media-object' style='width:100%; height: auto;'></div><div class='media-body' align='center'><h4 class='media-heading'>";
            HTMLSTring += name;
            HTMLSTring += "</h4></div></div>";
        });

        HTMLSTring += "</div>";

        container.html(HTMLSTring);
    }

    init();

    this.dishList = container.find("#dish_again_list");

    this.update = function(model, changeDetails) {

    }
    model.addObserver(this.update);

}