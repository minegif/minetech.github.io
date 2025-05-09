// @ts-check
function knowPricing() {
            var category = document.getElementById("category").value;
            var service = document.getElementById("service");
            var product = document.getElementById("product");
            var sample = document.getElementById("catprompt");
            var showNever = document.getElementById("pricing");
            
            if (category === "services") {
                service.style.display = "block";
                product.style.display = "none";
                sample.style.display = "none";
            } 
            
            else if (category === "products") {
                product.style.display = "block";
                service.style.display = "none";
                sample.style.display = "none";
            } 
            
            else {
                product.style.display = "none";
                service.style.display = "none";
                sample.style.display = "block";
                alert("Please select a category.");
                return;
            }

            showNever.style.display = "none"; // Reset pricing display
        }

        function updatePrice() {
            var category = document.getElementById("category").value;
            var serviceValue = document.getElementById("service").value;
            var productValue = document.getElementById("product").value;
            var price = document.getElementById("cost");
            var showNever = document.getElementById("pricing");
            var result;

            if (category === "service") {
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
                        result = "Invalid service selected.";
                }
            } else if (category === "product") {
                // Add logic for product pricing here
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
                        default;
                result = "Product price not available.";
                break;
                }
            }

            if (result) {
                price.textContent = "UGX " + result;
                showNever.style.display = "block";
            }
        }
        
        
        