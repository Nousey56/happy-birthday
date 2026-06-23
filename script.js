function startStory() {
  document.getElementById("story").style.display = "block";

  const song = document.getElementById("birthdaySong");

  song.play().catch(() => {
    console.log("Music will play after user interaction.");
  });

  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}

function showLetter() {
  document.getElementById("letter").style.display = "block";

  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
}

function openGallery(id) {
  const galleries = document.querySelectorAll(".gallery");

  galleries.forEach(function(gallery) {
    gallery.style.display = "none";
  });

  const selectedGallery = document.getElementById(id);
  selectedGallery.style.display = "flex";

  selectedGallery.scrollIntoView({
    behavior: "smooth"
  });
}