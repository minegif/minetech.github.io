function showMine() { var abtElement = document.getElementById("mine");
var button = document.getElementById('miner');

 if (abtElement.style.display === "none") { abtElement.style.display = "block"; 
 button.textContent = 'Show Less';
 
 } else { abtElement.style.display = "none";
 
 button.textContent = 'Learn More';
  } }

function showRefine() { var abtElement = document.getElementById("refine"); 

var button = document.getElementById('refiner');

if (abtElement.style.display === "none") { abtElement.style.display = "block"; button.textContent = 'Show Less'; } else { abtElement.style.display = "none"; button.textContent = 'Learn More';} }

function showTrade() { var abtElement = document.getElementById("trade"); 

var button = document.getElementById('trader');

if (abtElement.style.display === "none") { abtElement.style.display = "block"; button.textContent = 'Show Less';} else { abtElement.style.display = "none"; button.textContent = 'Learn More';} }

function showInvest() { var abtElement = document.getElementById("invest"); 

var button = document.getElementById('invester');

if (abtElement.style.display === "none") { abtElement.style.display = "block"; button.textContent = 'Show Less';} else { abtElement.style.display = "none"; button.textContent = 'Learn More';} }
