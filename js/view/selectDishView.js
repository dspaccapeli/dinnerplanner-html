var SelectDishView = function (container, model) {

    //var numberOfGuests = container.find("#people");

    var dishes = container.find("#dish_list");
    console.log(dishes);

    var dishDict = model.getAllTypes();
    console.log(dishDict);

    var HTMLSTring = "";
    dishDict.forEach((entry) => {
       var name = entry.name;
       var img = entry.image;
       console.log(name);
       console.log(img);

        HTMLSTring += "<div class='media_box col-md-4 col-sm-4'><div class='media-top'><img src='images/";
        HTMLSTring += img;
        HTMLSTring += "' class='media-object' style='width:100%; height: auto;'></div><div class='media-body' align='center'><h4 class='media-heading'>";
        HTMLSTring += name;
        HTMLSTring += "</h4></div></div>";
    });
    console.log(HTMLSTring);

    dishes.html(HTMLSTring);

}

