const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove("show");
  });
});

function goToPackages() {
  document.getElementById("packages").scrollIntoView({
    behavior: "smooth"
  });
}

// Destination dropdown
function updateDestinations() {
  const tripType = document.getElementById("tripTypeInput").value;
  const destinationInput = document.getElementById("destinationInput");

  destinationInput.innerHTML = '<option value="">Select Destination</option>';

  let destinations = [];

  if (tripType === "national") {
    destinations = [
      "Goa",
      "Kashmir",
      "Manali",
      "Kerala",
      "Ooty",
      "Jaipur"
    ];
  } else if (tripType === "international") {
    destinations = [
      "Bali",
      "Dubai",
      "Thailand",
      "Maldives",
      "Singapore",
      "Paris"
    ];
  }

  destinations.forEach(destination => {
    const option = document.createElement("option");
    option.value = destination.toLowerCase();
    option.textContent = destination;
    destinationInput.appendChild(option);
  });
}

// Full travel data
const travelData = {
  goa: {
    package: "Goa Beach Escape",
    days: "4 Days / 3 Nights",
    price: "₹14,999",
    hotels: ["Sea Breeze Resort ⭐ 4.5", "Palm Stay Goa ⭐ 4.3", "Ocean Pearl Inn ⭐ 4.6"],
    includes: ["Hotel stay", "Breakfast", "Airport pickup", "Sightseeing", "Local transport"],
    plan: [
      "Day 1: Arrival, hotel check-in, Baga Beach, sunset view",
      "Day 2: Calangute Beach, Fort Aguada, water sports",
      "Day 3: Dudhsagar Falls, Spice Plantation, local market",
      "Day 4: Breakfast, shopping, return journey"
    ]
  },

  kashmir: {
    package: "Kashmir Paradise",
    days: "5 Days / 4 Nights",
    price: "₹24,999",
    hotels: ["Snow Valley Hotel ⭐ 4.6", "Lake View Srinagar ⭐ 4.4", "Pine Retreat Gulmarg ⭐ 4.5"],
    includes: ["Hotel stay", "Breakfast & Dinner", "Airport transfer", "Sightseeing", "Cab service"],
    plan: [
      "Day 1: Arrival in Srinagar, Dal Lake shikara ride",
      "Day 2: Gulmarg sightseeing, gondola ride",
      "Day 3: Pahalgam valley tour",
      "Day 4: Mughal Gardens, local shopping",
      "Day 5: Breakfast, checkout, departure"
    ]
  },

  manali: {
    package: "Manali Adventure Tour",
    days: "5 Days / 4 Nights",
    price: "₹19,999",
    hotels: ["Mountain Nest Hotel ⭐ 4.4", "Snow Peak Resort ⭐ 4.5", "Himalayan View Inn ⭐ 4.3"],
    includes: ["Hotel stay", "Breakfast", "Volvo transfer", "Sightseeing", "Adventure activities"],
    plan: [
      "Day 1: Arrival in Manali, mall road visit",
      "Day 2: Solang Valley and adventure sports",
      "Day 3: Rohtang Pass / Atal Tunnel trip",
      "Day 4: Hidimba Temple and local shopping",
      "Day 5: Checkout and return"
    ]
  },

  kerala: {
    package: "Kerala Backwater Bliss",
    days: "5 Days / 4 Nights",
    price: "₹22,999",
    hotels: ["Coconut Lagoon ⭐ 4.6", "Backwater Retreat ⭐ 4.5", "Green Leaf Resort ⭐ 4.4"],
    includes: ["Hotel stay", "Breakfast", "Houseboat ride", "Sightseeing", "Local transfers"],
    plan: [
      "Day 1: Arrival in Kochi, sightseeing",
      "Day 2: Munnar tea gardens and waterfalls",
      "Day 3: Thekkady wildlife and spice tour",
      "Day 4: Alleppey houseboat experience",
      "Day 5: Departure"
    ]
  },

  ooty: {
    package: "Ooty Hills Escape",
    days: "4 Days / 3 Nights",
    price: "₹16,999",
    hotels: ["Hill View Residency ⭐ 4.3", "Lake Side Inn ⭐ 4.4", "Blue Mist Resort ⭐ 4.5"],
    includes: ["Hotel stay", "Breakfast", "Local sightseeing", "Pickup & drop"],
    plan: [
      "Day 1: Arrival and Ooty lake visit",
      "Day 2: Botanical garden and Doddabetta peak",
      "Day 3: Tea museum and toy train ride",
      "Day 4: Checkout and departure"
    ]
  },

  jaipur: {
    package: "Jaipur Royal Heritage",
    days: "4 Days / 3 Nights",
    price: "₹18,499",
    hotels: ["Pink Palace Hotel ⭐ 4.5", "Royal Haveli Stay ⭐ 4.4", "City Fort Inn ⭐ 4.3"],
    includes: ["Hotel stay", "Breakfast", "Sightseeing", "Local transport"],
    plan: [
      "Day 1: Arrival and City Palace visit",
      "Day 2: Amber Fort and Jal Mahal",
      "Day 3: Hawa Mahal and local shopping",
      "Day 4: Departure"
    ]
  },

  bali: {
    package: "Bali Honeymoon",
    days: "5 Days / 4 Nights",
    price: "₹39,999",
    hotels: ["Bali Ocean Resort ⭐ 4.7", "Tropical Stay Ubud ⭐ 4.5", "Sunset Villa Bali ⭐ 4.6"],
    includes: ["Luxury resort stay", "Breakfast", "Airport transfer", "Private sightseeing", "Island tour"],
    plan: [
      "Day 1: Arrival, hotel check-in, beachside dinner",
      "Day 2: Ubud tour, rice terraces, monkey forest",
      "Day 3: Tanah Lot temple, beach hopping",
      "Day 4: Water activities, shopping, spa",
      "Day 5: Checkout and airport transfer"
    ]
  },

  dubai: {
    package: "Dubai Adventure",
    days: "5 Days / 4 Nights",
    price: "₹59,999",
    hotels: ["Royal Palm Dubai ⭐ 4.8", "Desert Pearl Inn ⭐ 4.6", "City Lights Hotel ⭐ 4.5"],
    includes: ["Luxury hotel stay", "Breakfast", "Airport pickup", "Desert safari", "City sightseeing"],
    plan: [
      "Day 1: Arrival, Burj Khalifa visit, Dubai Mall",
      "Day 2: Desert safari and cultural evening",
      "Day 3: Marina cruise and Jumeirah Beach",
      "Day 4: Miracle Garden, shopping, local food",
      "Day 5: Checkout and departure"
    ]
  },

  thailand: {
    package: "Thailand Fun Escape",
    days: "5 Days / 4 Nights",
    price: "₹34,999",
    hotels: ["Bangkok Grand Stay ⭐ 4.5", "Phuket Beach Resort ⭐ 4.6", "Pattaya Palm Inn ⭐ 4.4"],
    includes: ["Hotel stay", "Breakfast", "Airport transfer", "Island tour", "Sightseeing"],
    plan: [
      "Day 1: Arrival in Bangkok, city exploration",
      "Day 2: Temple tour and shopping",
      "Day 3: Phuket beach and island trip",
      "Day 4: Pattaya coral island and nightlife",
      "Day 5: Departure"
    ]
  },

  maldives: {
    package: "Maldives Luxury Retreat",
    days: "4 Days / 3 Nights",
    price: "₹49,999",
    hotels: ["Ocean Paradise Villa ⭐ 4.8", "Blue Lagoon Resort ⭐ 4.7", "Sunset Water Villa ⭐ 4.9"],
    includes: ["Water villa stay", "Breakfast", "Airport transfer", "Island activities", "Resort access"],
    plan: [
      "Day 1: Arrival and resort check-in",
      "Day 2: Beach relaxation and water sports",
      "Day 3: Island hopping and candlelight dinner",
      "Day 4: Checkout and departure"
    ]
  },

  singapore: {
    package: "Singapore City Explorer",
    days: "5 Days / 4 Nights",
    price: "₹44,999",
    hotels: ["Marina Bay Stay ⭐ 4.7", "Orchard View Hotel ⭐ 4.5", "City Central Inn ⭐ 4.4"],
    includes: ["Hotel stay", "Breakfast", "Airport transfer", "City tour", "Attraction tickets"],
    plan: [
      "Day 1: Arrival and Marina Bay Sands visit",
      "Day 2: Sentosa Island tour",
      "Day 3: Universal Studios Singapore",
      "Day 4: Gardens by the Bay and shopping",
      "Day 5: Departure"
    ]
  },

  paris: {
    package: "Paris Romantic Escape",
    days: "6 Days / 5 Nights",
    price: "₹79,999",
    hotels: ["Eiffel Grand Hotel ⭐ 4.8", "Paris City View ⭐ 4.6", "Romance Suites ⭐ 4.7"],
    includes: ["Luxury stay", "Breakfast", "Airport pickup", "City sightseeing", "Seine cruise"],
    plan: [
      "Day 1: Arrival and Eiffel Tower visit",
      "Day 2: Louvre Museum and city tour",
      "Day 3: Seine river cruise and shopping",
      "Day 4: Disneyland Paris / optional tour",
      "Day 5: Montmartre and local cafes",
      "Day 6: Departure"
    ]
  }
};

// Show travel result
function showTravelPlan() {
  const destination = document.getElementById("destinationInput").value;
  const resultsSection = document.getElementById("resultsSection");
  const resultContainer = document.getElementById("resultContainer");

  if (!destination || !travelData[destination]) {
    resultContainer.innerHTML = `
      <div class="result-card">
        <h3>No package found</h3>
        <p>Please select a valid destination.</p>
      </div>
    `;
    resultsSection.style.display = "block";
    resultsSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const data = travelData[destination];

  resultContainer.innerHTML = `
    <div class="result-card">
      <h3>${data.package}</h3>
      <div class="package-summary">
        <div class="summary-box">
          <h4>Duration</h4>
          <p>${data.days}</p>
        </div>
        <div class="summary-box">
          <h4>Price</h4>
          <p>${data.price}</p>
        </div>
        <div class="summary-box">
          <h4>Hotels</h4>
          <p>${data.hotels.length} Available</p>
        </div>
      </div>
    </div>

    <div class="result-card">
      <h3>Hotels Near Destination</h3>
      <div class="hotel-list">
        ${data.hotels.map(hotel => `<div class="hotel-item">${hotel}</div>`).join("")}
      </div>
    </div>

    <div class="result-card">
      <h3>Package Includes</h3>
      <ul>
        ${data.includes.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>

    <div class="result-card">
      <h3>Day-wise Travel Plan</h3>
      <ul>
        ${data.plan.map(day => `<li>${day}</li>`).join("")}
      </ul>
    </div>
  `;

  resultsSection.style.display = "block";
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

// Booking modal
const bookingModal = document.getElementById("bookingModal");
const selectedPackageInput = document.getElementById("selectedPackage");
const bookingForm = document.getElementById("bookingForm");

function bookPackage(packageName) {
  selectedPackageInput.value = packageName;
  bookingModal.style.display = "flex";
}

function closeModal() {
  bookingModal.style.display = "none";
}

window.addEventListener("click", function(e) {
  if (e.target === bookingModal) {
    closeModal();
  }
});

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const packageName = document.getElementById("selectedPackage").value;

  alert(`Thank you, ${name}! Your booking request for "${packageName}" has been submitted successfully.`);
  bookingForm.reset();
  closeModal();
});