document.getElementById("contact").addEventListener("submit", function(event) {
    const Firstname = document.getElementById("Firstname").value;
    const email = document.getElementById("email").value;
    const Lastname = document.getElementById("Lastname").value;
    const checkbox = document.getElementById("checkbox").value;
    
    if (Firstname === "" || email === "" || Lastname === "" || checkbox ===""
    ) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill out all required fields.");
    }
  });
  

  function toggleForm() {
    var modal = document.getElementById("contact");
  
    // Toggle the display property
    if (modal.style.display === "none") {
      modal.style.display = "block"; // Show the form
      document.body.style.overflow = "hidden";
    } else {
      modal.style.display = "none"; // Hide the form
      document.body.style.overflow = "";
    }
  }
  
  function changeImage(had) {
    var image = document.getElementById('main-image');
  
    switch (had) {
      case 'had1':
        image.src = 'img/home/food.jpeg';
        break;
      case 'had2':
        image.src = 'img/Home/image.png';
        break;
      case 'had3':
        image.src = 'img/home/food2.jpg';
        break;
      default:
        image.src = 'default.jpg'; // Default image if topic doesn't match
    }
  }
  

  