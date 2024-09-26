var map = L.map('map').setView([-25.4257511, -49.3426755], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var clinica1 = L.marker([-25.4567306, -49.289035]).addTo(map);
var clinica2 = L.marker([-25.446509, -49.2717171]).addTo(map);
var clinica3 = L.marker([-25.4387226, -49.330798]).addTo(map);

clinica1.bindPopup(
  "<strong>Alles Blau Hospital Veterinário</strong><br>" +
  "Rua XYZ, 123<br>" +
  "(41) 1234-5678<br>" +
  "<a href='https://example.com' target='_blank'>Website</a>"
);
clinica2.bindPopup("TopClin Pet");
clinica3.bindPopup("Vet Socorro");

