
// Step 1.1
const myFavoriteBooks = ['mars_chronicles', 'beautiful_world_where_are_you', 'palmares', 'a_calling_for_charlie_barnes', 'last_call', 'great_circle', 'aftershocks', 'dog_flowers', 'concrete_rose ', 'milk_fed']
// Step 1.2 console.log(myFavoriteBooks)

// Step 1.3

function createList () {
  const ulList = document.createElement('ul');
  for (i = 0; i < myFavoriteBooks.length; i++) {
    const liList = document.createElement('li');
    liList.textContent += (myFavoriteBooks[i].toUpperCase().replace(/_/g, ' ').toUpperCase());
    ulList.appendChild(liList);
  }

  document.getElementById('BooksTitles').appendChild(ulList);

}

createList();

// Step 1.4

const booksInformation = {
  'mars_chronicles': {
    title: 'Mars Chronicles',
    autor: 'Ray Bradbury',
    language: 'English',
  },

  'beautiful_world_where_are_you': {
    title: 'Beatiful wolrd where are you',
    autor: 'Sally Rooney',
    language: 'English',
  },

  'palmares': {

    title: 'Palmares',
    autor: 'Gayl Jones',
    language: 'English',

  },
  
  'a_calling_for_charlie_barnes': {
    
    title: 'A calling for Charlie Barnes',
    autor: 'Joshua Ferris',
    language: 'English',
  },

  'last_call': {
    title: 'Last Call',
    autor: 'Elon Green',
    language: 'English',

  },

  'great_circle': {
    title: 'Great Circle',
    autor: 'Maggie Shipstead',
    language: 'English',

  },

  'aftershocks': {
    title: 'Aftershocks',
    autor: 'Nadia Owusu',
    language: 'English',

  },
  'dog_flowers': {

    title: 'Dog Flowers',
    autor: 'Danielle Geller',
    language: 'English',

  },

  'concrete_rose ': {

    title: 'Concrete Rose',
    autor: 'Angie Thomas',
    language: 'English',

  },

  'milk_fed': {

    title: 'Milk Fed',
    autor: 'Melissa Broder',
    language: 'English',

  }
    
}

// Step 1.7
const covers = {
  mars_chronicles: 'images/mars-chronicles.jpeg',

  beautiful_world_where_are_you: 'images/beautiful-world.jpeg',

  palmares: 'images/palmares.jpg',

  a_calling_for_charlie_barnes: 'images/a-calling.jpeg',

  last_call: 'images/last-call.jpeg',

  great_circle: 'images/great-circle.jpg',

  aftershocks: 'images/aftershocks.jpeg',

  dog_flowers: 'images/dog-flowers.jpeg',

  concrete_rose: 'images/concrete-rose.jpeg',

  milk_fed: 'images/milk-fed.jpeg'
};
  
// Step 1.5 - 1.8

function createInfo() {
  const objectUl = document.createElement('ul')


  for (let key in booksInformation) {
  
    let objectlist = document.createElement("li");
    let headingOne = document.createElement('h3');
    let headingTwo = document.createElement('h4');
    let headingThree = document.createElement('h5');
    let images = document.createElement("img");

    images.style.height = "250px";
      
     
    images.setAttribute("src", covers[key]);
    objectUl.appendChild(images);
    headingOne.textContent += (booksInformation[key].title);
    objectlist.appendChild(headingOne)
    headingTwo.textContent += (booksInformation[key].autor);
    objectlist.appendChild(headingTwo);
    headingThree.textContent += (booksInformation[key].language);
    objectlist.appendChild(headingThree);
  
    objectUl.appendChild(objectlist);
  
  
  
  }
  document.getElementById('BooksInfo').appendChild(objectUl);


}

createInfo()


