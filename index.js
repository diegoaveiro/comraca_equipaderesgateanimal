// NIGHT MODE

const nightModeToggle = document.querySelector('#nightmode');
const body = document.querySelector('body');
const NIGHT_MODE_KEY = 'nightModeEnabled';

// Check if night mode was enabled in a previous session
const isNightModeEnabled = localStorage.getItem(NIGHT_MODE_KEY) === 'true';
if (isNightModeEnabled) {
  body.classList.add('night-mode');
}

// Toggle night mode on button click
nightModeToggle.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  
  // Store the night mode state
  const isNightModeEnabled = body.classList.contains('night-mode');
  localStorage.setItem(NIGHT_MODE_KEY, isNightModeEnabled);
});

// CHANGING THE IMAGES

function changeImage() {
var image = document.getElementById('dogs');
if (image.src.match("/doglight.png")) {
image.src = "./images/dogdark.png";
}
else {
image.src = "./images/doglight.png";
}
}

function changeImage2() {
  var image = document.getElementById('comracalogo');
  if (image.src.match("/images/com_raca.jpg")) {
  image.src = "./images/com_raca_dark.jpg";
  }
  else {
  image.src = "./images/com_raca.jpg";
}
}

function changeImage3() {
  var image = document.getElementById('filterImage');
  if (image.src.match("./images/filterdark.png")) {
  image.src = "./images/filterlight.png";
  }
  else {
  image.src = "./images/filterdark.png";
}
}

// APPLYING FILTERS

let filterContainer = document.getElementById('filterContainer');

function toggleFilters() {
  const filterContainer = document.getElementById('filterContainer');
  filterContainer.style.display = filterContainer.style.display === 'none' ? 'grid' : 'none';
}

function filterPets() {
  const sizeFilter = document.getElementById('sizeFilter').value;
  const ageFilter = document.getElementById('ageFilter').value;
  const sexFilter = document.getElementById('sexFilter').value;
  const castratedFilter = document.getElementById('castratedFilter').checked;

  const pets = document.getElementsByClassName('pet');

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const size = pet.getAttribute('data-size');
    const age = pet.getAttribute('data-age');
    const sex = pet.getAttribute('data-sex');
    const castrated = pet.getAttribute('data-castrated') === 'true';

    pet.style.display = '';

    if (sizeFilter && size !== sizeFilter) {
      pet.style.display = 'none';
    }

    if (ageFilter && age !== ageFilter) {
      pet.style.display = 'none';
    }

    if (sexFilter && sex !== sexFilter) {
      pet.style.display = 'none';
    }

    if (castratedFilter && !castrated) {
      pet.style.display = 'none';
    }
  }

  filterContainer.style.display = 'none';
}

// Clear filters

function clearFilters() {
  document.getElementById('sizeFilter').value = '';
  document.getElementById('ageFilter').value = '';
  document.getElementById('sexFilter').value = '';
  document.getElementById('castratedFilter').checked = false;

   // Reset disabled options in the select element
   const sexSelect = document.getElementById('sexFilter');
   for (let i = 0; i < sexSelect.options.length; i++) {
     sexSelect.options[i].disabled = false;
  }

   filterPets();
 }
