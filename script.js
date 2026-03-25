function goToPackages() {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

function updateDestinations() {
  const tripType = document.getElementById("tripTypeInput").value;
  const dest = document.getElementById("destinationInput");

  dest.innerHTML = '<option value="">Select Destination</option>';

  let list = tripType === "national"
    ? ["Goa","Kashmir","Manali","Kerala"]
    : ["Bali","Dubai","Thailand","Maldives"];

  list.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.toLowerCase();
    opt.textContent = d;
    dest.appendChild(opt);
  });
}

const data = {
  goa: {
    package: "Goa Beach Escape",
    days: "4 Days / 3 Nights",
    price: "₹14,999",
    hotels: ["Sea Breeze Resort ⭐ 4.5","Palm Stay Goa ⭐ 4.3","Ocean Pearl Inn ⭐ 4.6"],
    plan: ["Day 1: Arrival + Beach","Day 2: Fort + Water Sports","Day 3: Falls + Market","Day 4: Return"],
    travel: [
      {type:"Flight",price:"₹5,200",time:"1 hr 20 min"},
      {type:"Bus",price:"₹1,450",time:"13 hrs"},
      {type:"Car",price:"₹8,500",time:"11 hrs"}
    ]
  },

  kashmir: {
    package: "Kashmir Paradise",
    days: "5 Days / 4 Nights",
    price: "₹24,999",
    hotels: ["Snow Valley Hotel ⭐ 4.6","Lake View Srinagar ⭐ 4.4","Pine Retreat ⭐ 4.5"],
    plan: ["Day 1: Srinagar","Day 2: Gulmarg","Day 3: Pahalgam","Day 4: Mughal Gardens","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹7,800",time:"2 hr 30 min"},
      {type:"Bus",price:"₹2,400",time:"28 hrs"},
      {type:"Car",price:"₹14,500",time:"25 hrs"}
    ]
  },

  manali: {
    package: "Manali Mountain Escape",
    days: "5 Days / 4 Nights",
    price: "₹19,999",
    hotels: ["Hill View Resort ⭐ 4.5","Snow Peak Stay ⭐ 4.4","Mountain Nest ⭐ 4.3"],
    plan: ["Day 1: Arrival","Day 2: Solang Valley","Day 3: Rohtang Pass","Day 4: Mall Road","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹6,500",time:"2 hrs + cab"},
      {type:"Bus",price:"₹1,800",time:"14 hrs"},
      {type:"Car",price:"₹9,500",time:"12 hrs"}
    ]
  },

  kerala: {
    package: "Kerala Backwater Tour",
    days: "5 Days / 4 Nights",
    price: "₹22,999",
    hotels: ["Lake Palace ⭐ 4.6","Backwater Inn ⭐ 4.4","Coconut Grove ⭐ 4.5"],
    plan: ["Day 1: Kochi","Day 2: Munnar","Day 3: Alleppey","Day 4: Thekkady","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹4,800",time:"1 hr 45 min"},
      {type:"Bus",price:"₹1,350",time:"12 hrs"},
      {type:"Car",price:"₹8,800",time:"10 hrs"}
    ]
  },

  bali: {
    package: "Bali Honeymoon",
    days: "5 Days / 4 Nights",
    price: "₹39,999",
    hotels: ["Bali Ocean Resort ⭐ 4.7","Sunset Villa ⭐ 4.6","Tropical Stay ⭐ 4.5"],
    plan: ["Day 1: Arrival","Day 2: Ubud","Day 3: Beach","Day 4: Shopping","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹26,000",time:"8 hrs"}
    ]
  },

  dubai: {
    package: "Dubai Adventure",
    days: "5 Days / 4 Nights",
    price: "₹59,999",
    hotels: ["Royal Palm Dubai ⭐ 4.8","Desert Pearl Inn ⭐ 4.6","City Lights Hotel ⭐ 4.5"],
    plan: ["Day 1: Burj Khalifa","Day 2: Desert Safari","Day 3: Marina","Day 4: Shopping","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹21,500",time:"4 hr 15 min"}
    ]
  },

  thailand: {
    package: "Thailand Fun Tour",
    days: "5 Days / 4 Nights",
    price: "₹34,999",
    hotels: ["Bangkok Palace ⭐ 4.5","Phuket Bay Resort ⭐ 4.6","Thai Comfort Stay ⭐ 4.4"],
    plan: ["Day 1: Arrival","Day 2: Bangkok Tour","Day 3: Phuket Beach","Day 4: Shopping","Day 5: Return"],
    travel: [
      {type:"Flight",price:"₹18,800",time:"4 hr 30 min"}
    ]
  },

  maldives: {
    package: "Maldives Luxury Escape",
    days: "4 Days / 3 Nights",
    price: "₹74,999",
    hotels: ["Water Villa Resort ⭐ 4.9","Blue Lagoon Stay ⭐ 4.8","Ocean Heaven ⭐ 4.7"],
    plan: ["Day 1: Arrival","Day 2: Island Tour","Day 3: Water Activities","Day 4: Return"],
    travel: [
      {type:"Flight",price:"₹24,000",time:"4 hrs"}
    ]
  }
};

function showTravelPlan() {
  const dest = document.getElementById("destinationInput").value;
  const container = document.getElementById("resultContainer");
  const section = document.getElementById("resultsSection");

  if (!data[dest]) {
    container.innerHTML = `
      <div class="result-card">
        <h3>No package found</h3>
        <p>Please select a valid destination.</p>
      </div>
    `;
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const d = data[dest];

  container.innerHTML = `
    <div class="result-card">
      <h3>${d.package}</h3>
      <p><strong>Duration:</strong> ${d.days}</p>
      <p><strong>Price:</strong> ${d.price}</p>
    </div>

    <div class="result-card">
      <h3>Hotels Near Destination</h3>
      ${d.hotels.map(h => `<div class="hotel-item">${h}</div>`).join("")}
    </div>

    <div class="result-card">
      <h3>Day-wise Itinerary</h3>
      ${d.plan.map(p => `<p>${p}</p>`).join("")}
    </div>

    <div class="result-card">
      <h3>Travel Options</h3>
      ${d.travel.map(t => `
        <div class="travel-card">
          <h4>${t.type}</h4>
          <p><strong>Price:</strong> ${t.price}</p>
          <p><strong>Time:</strong> ${t.time}</p>
          <button onclick="bookTravel('${t.type} - ${dest}')">Book ${t.type}</button>
        </div>
      `).join("")}
    </div>
  `;

  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
}

function bookTravel(type) {
  document.getElementById("selectedTravelOption").value = type;
  document.getElementById("travelBookingModal").style.display = "flex";
}

function closeTravelModal() {
  document.getElementById("travelBookingModal").style.display = "none";
}

function bookPackage(packageName) {
  document.getElementById("selectedPackage").value = packageName;
  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Package booking submitted successfully!");
  closeModal();
});

document.getElementById("travelBookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Travel booking submitted successfully!");
  closeTravelModal();
});