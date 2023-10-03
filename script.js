document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
      strings: ["Front End Developer", "Web Designer", "Learner"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
      
    });
  
    document.getElementById('burgerButton').addEventListener('click', function () {
      document.querySelector('.navbar').classList.toggle('active');
    });
  
    var navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelector('.navbar').classList.remove('active');
      });
    });
  
    
 
  
  const reviewWrap = document.getElementById("reviewWrap");
  const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
  const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
  const imgBox = document.getElementById("imgBox");
  const name = document.getElementById("name");
  const profession = document.getElementById("profession");
  const description = document.getElementById("description");
  
  let people = [
    {
      photo: 'url("https://images.unsplash.com/photo-1627501691850-db08eb81199a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80")',
      name: "",
      profession: "Airline Reservation System",
      description: "An airline reservation system is a software platform that allows passengers to book flights, manage reservations, and purchase tickets for air travel. It also helps airlines manage their flight schedules, seat availability, and pricing, facilitating efficient booking processes and enhancing the overall customer experience. Modern reservation systems often integrate with online booking portals, mobile apps, and backend airline operations to streamline the entire travel booking process."
    },
    {
      photo: 'url("3.jpeg")',
      name: "",
      profession: "Travel Buddy",
      description: "The Travel Buddy project is a mobile app or web application designed to assist travelers in planning and organizing their trips. It often includes features such as itinerary planning, destination recommendations, real-time weather updates, local attraction information, and travel expense tracking. Travel Buddy aims to enhance the travel experience by providing valuable resources and convenient tools for travelers on their journeys. "
    },

    {
        photo: 'url("https://static.toiimg.com/photo/msid-88685037/88685037.jpg")',
        name: "",
        profession: "Calculator",
        description: "A calculator project involves creating a digital tool for performing arithmetic operations, often designed as software applications or physical devices with buttons and screens. These projects typically require programming skills and can range from basic calculators for addition and subtraction to more advanced versions with scientific functions and memory storage. They serve as valuable learning exercises in programming and user interface design. "
      },
  ];
  
  function setCardContent(personNumber) {
    imgBox.style.backgroundImage = people[personNumber].photo;
    name.innerText = people[personNumber].name;
    profession.innerText = people[personNumber].profession;
    description.innerText = people[personNumber].description;
  
   
    setCardContent();
  }
  
  let currentPerson = 0;
  
  function slide(side) {
    if (side === "left") {
      if (currentPerson === 0) {
        currentPerson = people.length - 1;
      } else {
        currentPerson--;
      }
    } else if (side === "right") {
      if (currentPerson === people.length - 1) {
        currentPerson = 0;
      } else {
        currentPerson++;
      }
    }
  
    setCardContent(currentPerson);
  }
  
  leftArrow.addEventListener("click", () => {
    slide("left");
  });
  
  rightArrow.addEventListener("click", () => {
    slide("right");
  });
  
  setCardContent(currentPerson);
  });