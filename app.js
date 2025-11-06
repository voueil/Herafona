const workshops = [
  { 
    id: 1, 
    name: "Pottery Workshop", 
    city: "Riyadh", 
    artisan: "Fatimah Khaled", 
    price: 180, 
    time: "3 hours", 
    place: "Riyadh", 
    desc: "Learn traditional Saudi pottery techniques passed down through generations." 
  },
  { 
    id: 2, 
    name: "Palm Leaf Weaving", 
    city: "Al-Ahsa", 
    artisan: "Aisha Abdullah", 
    price: 200, 
    time: "3 hours", 
    place: "Al-Ahsa", 
    desc: "Create baskets and mats using palm leaves, inspired by Al-Ahsa’s heritage." 
  },
  { 
    id: 3, 
    name: "Sadu Weaving", 
    city: "Hail", 
    artisan: "Mona Saad", 
    price: 250, 
    time: "4 hours", 
    place: "Hail", 
    desc: "Experience Bedouin Sadu weaving, recognized as UNESCO intangible heritage." 
  },
  { 
    id: 4, 
    name: "Traditional Jewelry Making", 
    city: "Najran", 
    artisan: "Laila Mohammed", 
    price: 300, 
    time: "4 hours", 
    place: "Najran", 
    desc: "Design and craft traditional silver jewelry inspired by Najran’s culture." 
  },
  { 
    id: 5, 
    name: "Wood Carving", 
    city: "Jeddah", 
    artisan: "Salem Sami", 
    price: 350, 
    time: "5 hours", 
    place: "Jeddah", 
    desc: "Carve detailed wooden patterns inspired by historic Jeddah buildings." 
  }
];

let selectedWorkshop = null;

function renderWorkshops(list = workshops) {
  document.getElementById("workshops").innerHTML = list.map(w => `
    <div class="workshop-card">
      <h3>${w.name}</h3>
      <p>📍 Location: ${w.place}</p>
      <p>🕒 Duration: ${w.time}</p>
      <p>👩‍🏫 Artisan: ${w.artisan}</p>
      <p>💰 Price: ${w.price} SAR</p>
      <p>${w.desc}</p>
      <button onclick="openBooking(${w.id})">Book Now</button>
    </div>
  `).join("");
}
renderWorkshops();

function searchDiscovery() {
  const query = document.getElementById("query").value.toLowerCase().trim();
  
  if (!query) {
    renderWorkshops();
    return;
  }

  const results = workshops.filter(w => 
    w.name.toLowerCase().includes(query) ||
    w.city.toLowerCase().includes(query) ||
    w.artisan.toLowerCase().includes(query) ||
    w.desc.toLowerCase().includes(query)
  );

  renderWorkshops(results);
}

function openBooking(id) {
  selectedWorkshop = workshops.find(w => w.id === id);
  document.getElementById("workshopName").value = selectedWorkshop.name;
  document.getElementById("bookingForm").classList.remove("hidden");
}

function closeBookingForm() {
  document.getElementById("bookingForm").classList.add("hidden");
}

function confirmBooking() {
  const userName = document.getElementById("nameInput").value;
  const userEmail = document.getElementById("emailInput").value;

  if (!userName || !userEmail) {
    alert("⚠️ Please enter your name and email.");
    return;
  }

  alert(`✅ Your booking for "${selectedWorkshop.name}" has been confirmed!\nWe will contact you at ${userEmail}.`);
  closeBookingForm();

  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("workshopName").value = "";
}
