Interaction Programing - Lab assignment 1 & 2 - MVC
=================================================

This project consists in a simple front-end MVC app written in vanilla Javascript. The app will let the user dynamically construct its menu consisting of one element per each dish category ('appetizers', 'main dishes', 'desserts'). After having constructed the menu, it's possible to decide for how many people to order for and view the ingredients list. 

Sketches can be found at this [link](https://kth-csc.mybalsamiq.com/projects/dh2642-vt18-dinnerplanner/grid). The app was developed under the course [DH2642](https://www.kth.se/social/course/DH2642/) at [KTH](https://www.kth.se/).

How to run the app
-----

Download the repository on your device and open the [main.html](https://github.com/dspaccapeli/dinnerplanner-html/blob/master/main.html) on your web browser (tested in Chrome, Firefox and Safari).

What's in the project
-----

* [main.html](https://github.com/dspaccapeli/dinnerplanner-html/blob/master/main.html) - the only HTML page you will have in this project (though while testing you can create more to make it easier). You will need to implement the skeleton of the layout there and then through code (JavaScript) create the rest
* [js/model/dinnerModel.js](https://github.com/dspaccapeli/dinnerplanner-html/blob/master/js/model/dinnerModel.js) - is JavaScript file that contains the model code. The file contains the model (dish, ingredient and general dinner model) as well as methods and comments that you need to fully implement to support the dinner functionalities (guests, selected dishes, etc.)
* [js/view/](https://github.com/dspaccapeli/dinnerplanner-html/tree/master/js/view) - here you can find a JavaScript code of an example view. The view sets up some initial components and their values.
* [js/controller/](https://github.com/dspaccapeli/dinnerplanner-html/tree/master/js/controller) - here you can find a JavaScript code of an example view. The view sets up some initial components and their values.
* [js/app.js](https://github.com/kth-csc-iprog/dinnerplanner-html/blob/master/js/app.js) - this is the overall code of the application. It is responsible for initial setup of the app (when the page loads for the first time). 
* [images/](https://github.com/dspaccapeli/dinnerplanner-html/tree/master/images) - folder contains some pictures you can use for your dishes
