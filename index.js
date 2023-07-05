const openModal = () => {
  const imageGallery = document.getElementById("galleryInner");
  imageGallery.innerHTML = ""; 

  // Image URLs
  const imageUrls = [
    "https://img.freepik.com/free-photo/woman-red-hat-black-trousers-light-blouse-laughs-poses-with-packages-after-shopping_197531-17593.jpg?w=826&t=st=1688570356~exp=1688570956~hmac=79c22c9a2720c7f99b48cfc6406bd9c72202de4aee06359e88254a05183f9f77",
    "https://img.freepik.com/free-photo/cheerful-young-african-woman-holding-shopping-bags_171337-6961.jpg?w=826&t=st=1688570620~exp=1688571220~hmac=87853e723daff0ecda8c13ae2fe2d4c167218dc42f49926df82e95324053584f",
    "https://img.freepik.com/free-photo/pretty-young-stylish-woman-pink-luxury-dress-drinking-coffee-holding-shopping-bags_285396-9671.jpg?t=st=1688570085~exp=1688570685~hmac=d434d498cc6a145ea808bf758aec201eacb392279369014e1a95e2ed0b276721"
  ];

  // Add new gallery images
  for (let i = 0; i < 3; i++) {
    const image = document.createElement("div");
    image.classList.add("carousel-item", "animate-slide"); // Add animation class
    if (i === 0) {
      image.classList.add("active");
    }

    const imageElement = document.createElement("img");
    imageElement.src = imageUrls[i];
    imageElement.alt = `Gallery Image ${i + 1}`;
    image.appendChild(imageElement);

    imageGallery.appendChild(image);
  }

  // Apply animation class to the second image
  const secondImage = document.querySelector(".my .second img");
  secondImage.classList.add("animate-scale"); // Add animation class

  $('#galleryModal').modal('show'); // Open the modal
};
