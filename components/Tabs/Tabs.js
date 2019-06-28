class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ;
    this.tabData = this.tabElement.dataset.tab;
    //console.log(tabElementData)

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:

    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(".card");
      // console.log(tabElement.querySelectorAll('.card'))
      // console.log(cardSelection)
      // return this.cards;
      //console.log(this.cards);
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`
      );
      // return this.cards;
      //console.log(this.cards);
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card)
    );

   console.log(this.cards)
    // Add a click event that invokes this.selectTab
    //

    this.tabElement.addEventListener("click", () => {this.selectTab()});
    //console.log(this.tabElement)
    //} ///tabLink
  }

  selectTab() {

 
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    console.log(tabs);

    // Iterate through the NodeList removing the .active-tab class from each element


    tabs.forEach(tab => {tab.classList.remove('active-tab');
    });
    console.log(tabs)


    this.tabElement.classList.add("active-tab");

    // Iterate through the NodeList setting the display style each one to 'none'

    //tabs.forEach(function(currentValue) {currentValue.style.display = "none";
    // });
    
    const cards = document.querySelectorAll('.card')
    
    
    cards.forEach( card => card.style.display = "none");

    // Add a class of ".active-tab" to this.tabElement
    //

    // console.log(this.tabElement)

    // Notice we are looping through the this.cards array and invoking
    // selectCard() from the TabCard class. Just un-comment the code and study what is happening here.

    this.cards.forEach(card => card.selectCard());
    //   }
  }
}

class TabCard {
  constructor(cardElement) {
    //     // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    //     // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }
}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable*/

let tabs = document.getElementsByClassName("tab");
console.log(tabs);

Array.from(tabs).forEach(currentValue => {
  new TabLink(currentValue);
});

// });
//console.log(tabss)
//console.log(tabss)
// - With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

// */
// let tabs = document.querySelectorAll();
