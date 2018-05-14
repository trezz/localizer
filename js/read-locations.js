locations = null

function readFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      loadLocations(contents);
    };
    reader.readAsText(file);
  }
  
  function loadLocations(contents) {
    var element = document.getElementById('console');
    locations = JSON.parse(contents).locations
    element.textContent = locations.length
    initMap()
  }
  
  document.getElementById('locations-file')
    .addEventListener('change', readFile, false);