document.addEventListener("DOMContentLoaded", function(event) {

  // Get the modal
  var aboutModal = document.getElementById('aboutModal');
  var contactModal = document.getElementById('contactModal');
  var classOneModal = document.getElementById('classOneModal');
  // Get the button that opens the modal
  var about = document.getElementById("about");
  var contact = document.getElementById("contact");
  var classOne = document.getElementById("classOne");
  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close1")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("close3")[0];

  // When the user clicks on the button, open the modal
  about.onclick = function() {
      aboutModal.style.display = "block";
  }
  contact.onclick = function() {
      contactModal.style.display = "block";
  }
  classOne.onclick = function() {
      classOneModal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal

  span1.onclick = function(){
    aboutModal.style.display = "none";
  }
  span2.onclick = function(){
    contactModal.style.display = "none";
  }
  span3.onclick = function(){
    classOneModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target === aboutModal || event.target === contactModal || event.target === classOneModal) {
        aboutModal.style.display = "none";
        contactModal.style.display = "none";
        classOneModal.style.display = "none";
      }
  }
  var mapOne = null;
  function initMapBattersea() {
    var battersea = {lat: 51.4744939, lng: -0.1646288};
      mapOne = new google.maps.Map(document.getElementById('map-battersea'), {
      zoom: 15,
      center: battersea
    });
    var marker = new google.maps.Marker({
      position: battersea,
      map: mapOne
    });
  }
  initMapBattersea();


  function initMapTooting() {
    var tooting = {lat: 51.4314844, lng: -0.1410382};
    var mapTwo = new google.maps.Map(document.getElementById('map-tooting'), {
      zoom: 15,
      center: tooting
    });
    var marker = new google.maps.Marker({
      position: tooting,
      map: mapTwo
    });
  }
  initMapTooting();

  function initMapRevive(){
    var matchstick = {lat: 51.4372209, lng: -0.1570409};
    var mapThree = new google.maps.Map(document.getElementById('map-revive'), {
      zoom: 15,
      center: matchstick
    });
    var marker = new google.maps.Marker({
      position: matchstick,
      map: mapThree
    });
  }
  initMapRevive()
});
