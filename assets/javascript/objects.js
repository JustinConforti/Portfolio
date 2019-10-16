const PROJECTS = [];

PROJECTS.push(new Project(
    "DuckLink!",
    "A Duck minigame web application developed using agile methodology during a two week period on a team of four. This application utilizes Reactjs to dynamically create different sections of the webpage as well as a Mango Database to store each users duck information.",
    "Ducklink.jpg",
    "DuckLink!",
    "https://github.com/JustinConforti/DuckLink",
    "https://ducklink.herokuapp.com/"
));
PROJECTS.push(new Project(
    "Designated Kicker",
    "A third-party kickstarter web application we built in a group of four using agile methodology. As a group we utilized MySQL/Sequelize with Nodejs and Express to allow users to submit their own unique kickstarter ideas and search our database containing over one thousand similar campagins as well as the KickStarter's API to quickly compare success rates of similar ideas.",
    "Designated Kicker.jpg",
    "Designated Kicker",
    "https://github.com/ABooth9422/Designated-Kicker",
    "https://github.com/ABooth9422/Designated-Kicker"
));
PROJECTS.push(new Project(
    "Squad-Finder",
    "This application was created using HTML5, vanilla Javascript, Firebase for authentication as well as Google Maps and Yelps API. These technologies allowed us to develop a pick-up game web application that lets local people sign-in to their unique accounts and either register for an already created pick-up game nearby or create one of their own.",
    "KickStarter.jpg",
    "Squad-Finder",
    "https://github.com/ChrisBoyce886/SQUAD-FINDER",
    "https://github.com/ChrisBoyce886/SQUAD-FINDER"
));
PROJECTS.push(new Project(
    "Eat Da Burger",
    "This application was developed using MySQL and the Model View Controller methodology.",
    "EatBurger.jpg",
    "Eat Da Burger",
    "https://github.com/vtchris/burger",
    "https://order-da-burger.herokuapp.com/"
));
PROJECTS.push(new Project(
    "Giphy API",
    "Giphy web application that utilizes vanilla Javascript hooks to interact with the web pages HTML elements combined with axios API calls to allow users to search for and play their gifs by simply scrolling over each picture",
    "Giphy.jpg",
    "Giphy API",
    "https://github.com/JustinConforti/GIPHY-API",
    "https://justinconforti.github.io/GIPHY-API/"
));
PROJECTS.push(new Project(
    "React Book Shelf",
    "This full stack application uses Reactjs and Axios to allow the user to search books by their title using Google Book's API, also utilizing a Mongo database in the back-end to store books on the user's book shelf allowing them to save those certain titles for later viewing.",
    "ReactBook.jpg",
    "React Book Shelf",
    "https://github.com/JustinConforti/GoogleBookSearch",
    "https://github.com/JustinConforti/GoogleBookSearch"
));
PROJECTS.push(new Project(
    "WoW Memory Game",
    "A simple memory game built in pure Reactjs which allows you to select from a variety of fantasy characters but you can only pick each character once. This application also uses React BootStrap for its layout",
    "MemoryGame.jpg",
    "React World Domination Game",
    "https://github.com/JustinConforti/Clicky-Game",
    "https://wow-memory-game.herokuapp.com/"
));
PROJECTS.push(new Project(
    "Friend Finder",
    "This application showcases the use of NodeJS/Express to provide back-end functionality.",
    "friend.jpg",
    "Friend Finder",
    "https://github.com/vtchris/friendFinder",
    "https://friend-finder-office.herokuapp.com/"
));


//Project constructor
function Project(name, description, image, imageAlt, url_gitrepo, url) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.imageAlt = imageAlt;
    this.url = url;
    this.url_gitrepo = url_gitrepo;
}