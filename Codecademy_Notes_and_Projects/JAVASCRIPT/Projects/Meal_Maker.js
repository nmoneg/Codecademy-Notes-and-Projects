/** ~GETTERS AND SETTERS~
 - GETTERS work when the assigned property is read
 - SETTERS work when the property is to be assigned a value  
 */

/**Here we have an object called 'menu' with several properties inside it */
const menu = {

/** The '_courses' property is an OBJECT with three properties, 'appetizers', 'mains', and 'desserts'. Each of these initialize empty arrays that we will add values to later.*/
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

/** This is an ACCESSOR property for the '_courses' propery above. It returns an object that contains key/value pairs for 'appetizers', 'mains', and 'desserts'*/
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

/** The following six properties are ACCESSOR properties (getters and setters) for the arrays in the '_courses' property above.*/
  get appetizers() {
    return ;
  },
  set appetizers(appetizerIn) { 

  },

  get mains() {
    return ;
  },
  set mains(mainIn) {

  },

  get desserts() {
    return ;
  },
  set desserts(dessertIn){
  },

/**This property is a method that takes three parameters. It creates an object ('dish') that has two parameters ('name' and 'price'), that are assigned the values of the 2nd and 3rd parameters ('dishName', 'dishPrice'). This object is then pushed into the corresponding array in  '_courses' (indicated by the 1st parameter) */ 
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }; 
    this._courses[courseName].push(dish);
  },

/** This property is a method that randomly selects a dish from one of the course arrays specified in '_courses' (appetizers, mains, desserts). It retrieves the corresponding array (indicated by the parameter 'courseName'), and stores it in a variable called 'dishes'. A random number based on the length of the array is generated ('randomIndex'), and the key/value pair ('dish name'/'dish Price') located at the index [randomIndex] is returned.*/
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

/** Generates a random meal using the 'getRandomDishFromCourse' method above. The method is run three times - one for each course, and the total price of the three items is stored in variable 'totalPrice'. This method also returns a string indicating the items selected from each course, and the total price of the meal. */
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price; 

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
  }
};

/** Three dishes for each course are added to object 'menu' here */
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Artichoke Dip', 8.75);
menu.addDishToCourse('appetizers', 'Arancini', 9.00);

menu.addDishToCourse('mains', 'Steak and Frites', 25.00);
menu.addDishToCourse('mains', 'Chicken Parmesan', 14.95);
menu.addDishToCourse('mains', 'Mushroom Risotto', 12.25);

menu.addDishToCourse('desserts', 'Chocolate Cake', 8.25);
menu.addDishToCourse('desserts', 'Creme Brulee', 10.25);
menu.addDishToCourse('desserts', 'Apple Tarte', 6.25);

/** Generates a meal using the 'generateRandomMeal' method, and then assigns it to variable 'menu' */
let meal = menu.generateRandomMeal();
console.log(meal);
