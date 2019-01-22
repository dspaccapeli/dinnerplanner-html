/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
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

    /**
     * When we want references to some view elements to be available from outside of view, we
     * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it
     * will be important for assigning listeners to these buttons, because the listeners
     * should not be assigned in the view, but rather in controller.
     *
     * We can then, in some other code, use exampleView.plusButton to reference the
     * this button and do something with it (see Lab 2).
     *
     */
    //this.plusButton = container.find("#plusGuest");
    //this.minusButton = container.find("#minusGuest");

    /**
     * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
     * in our view to dynamically set it's value to "Hello World".
     */
    //numberOfGuests.html("Hello World");

}

