// @ts-check
function knowPricing() {
    var category = document.getElementById("category").value;
    var service = document.getElementById("service");
    var product = document.getElementById("product");
    var sample = document.getElementById("catprompt");
    var showNever = document.getElementById("pricing");
    
    // Reset all displays first
    service.style.display = "none";
    product.style.display = "none";
    sample.style.display = "none";
    showNever.style.display = "none";

    if (category === "services") {
        service.style.display = "block";
    } 
    else if (category === "products") {
        product.style.display = "block";
    }
    else {
        sample.style.display = "block";
        alert("Please select a valid category.");
    }
}

function updatePrice() {
    var category = document.getElementById("category").value;
    var serviceValue = document.getElementById("service").value;
    var productValue = document.getElementById("product").value;
    var price = document.getElementById("cost");
    var showNever = document.getElementById("pricing");
    var result;

    // Check if a service or product is selected
    if (category === "services" && serviceValue !== "none") {
        switch (serviceValue) {
            case "web design":
                result = "600,000";
                break;
            case "software development":
                result = "3,000,000";
                break;
            case "graphics design":
                result = "20,000";
                break;
            case "phone repair":
                result = "70,000";
                break;
            case "computer repair":
                result = "100,000";
                break;
            case "3D architecture":
                result = "4,000,000";
                break;
            case "3D animation":
                result = "2,000,000";
                break;
            case "photography":
                result = "240,000";
                break;
            case "videography":
                result = "600,000";
                break;
            case "secretarial":
                result = "30,000";
                break;
            case "consultancy":
                result = "50,000";
                break;
            default:
                result = "Price not available.";
        }
    } 
    else if (category === "products" && productValue !== "none") {
        switch (productValue) {
            case "software sales":
                result = "600,000";
                break;
            case "laptops & accessories":
                result = "3,000,000";
                break;
            case "phones & accessories":
                result = "20,000";
                break;
            default:
                result = "Product price not available.";
        }
    }
    else {
        result = "Please select a valid option.";
    }

    if (result) {
        price.innerHTML = "UGX <strong>" + result + "</strong>";
        showNever.style.display = "block";
    }
}

// Ensure event listeners are properly bound
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("category").addEventListener("change", knowPricing);
    document.getElementById("service").addEventListener("change", updatePrice);
    document.getElementById("product").addEventListener("change", updatePrice);
    document.getElementById("tapMe").addEventListener("click", updatePrice);
});
