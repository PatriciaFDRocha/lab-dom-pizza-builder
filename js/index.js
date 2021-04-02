// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
      if (state.mushrooms) {
        oneMushroom.style.visibility = 'visible';
      } else {
        oneMushroom.style.visibility = 'hidden';
      }
    });
  }

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">
  //attempted n2 - pepperoni done and explained by Lúcia
  const pepBtn = document.querySelector('.btn.btn-pepperoni');
  const mushBtn = document.querySelector('.btn.btn-mushrooms');
  const greenPepBtn = document.querySelector('.btn.btn-green-peppers');
  const sauceBtn = document.querySelector('.btn.btn-sauce');
  const crustBtn = document.querySelector('.btn.btn-crust');

  if(state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }

  if(state.mushrooms) {
    mushBtn.classList.add('active');
  } else {
    mushBtn.classList.remove('active');
  }

  if(state.greenPeppers) {
    greenPepBtn.classList.add('active');
  } else {
    greenPepBtn.classList.remove('active');
  }

  if(state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }

  if(state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
  

  /*attempted n1
  const btnClass = document.querySelectorAll('.btn')   
    btnClass.forEach(btn => {
      if (this.classList.contains("active")) {
        this.classList.add("active").addEventListener('click';
    } 
      else {
        this.classList.remove = ("active");
      }
    })
  );
  */
};

function renderPrice() {
// Iteration 4: change the HTML of `<aside class="panel price">`
  
let selectedIngredients = document.querySelector('.price ul');
  selectedIngredients.innerHTML = "";
  
  let totalPrice = 10;
  
  const invoice = document.querySelector('.price strong');
  invoice.innerHTML = `$${totalPrice}`

  if(state.pepperoni) {
    selectedIngredients.innerHTML += '<li>$1 Pepperoni</li>';
    totalPrice += 1;
  }
  
  if(state.mushrooms) {
    selectedIngredients.innerHTML += '<li>$1 Mushroom</li>';
    totalPrice += 1;
  }

  if(state.greenPeppers) {
    selectedIngredients.innerHTML += '<li>$1 Green Peppers</li>';
    totalPrice += 1;
  }

  if(state.whiteSauce) {
    selectedIngredients.innerHTML += '<li>$3 White Sauce</li>';
    totalPrice += 3;
  }

  if(state.glutenFreeCrust) {
    selectedIngredients.innerHTML += '<li>$5 Gluten-free crust</li>';
    totalPrice += 5;
  }

  invoice.innerHTML = `$${totalPrice}`;

}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});