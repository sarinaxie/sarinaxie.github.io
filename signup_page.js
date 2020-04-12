var domains = ["rainyday.com", "finestmosaics.com", "umicron.com", "pocketpals.com", "pocketpets.com"]
var emails = ["angelo@rainyday.com", "mzhao@finestmosaics.com", "denmoore@umicron.com", "robinwade@pocketpets.com"]
var companies = ["Rainy Day", "Finest Mosaics", "Pocket Pals"]

$(document).ready(function() {
    function is_existing_domain(email) {
        var domain = email.split("@")[1]
        for (let i = 0; i < domains.length; i++) {
            if (domain == domains[i]) {
                console.log("is existing domain")
                return true
            }
        }
        console.log("not existing domain")
        return false
    }
    $("#next-submit-button").mousedown(function() {
        $(this).addClass("no-outline")
    })
    $("#next-submit-button").mouseup(function() {
        $(this).blur()
        $(this).removeClass("no-outline")        
        if (is_existing_domain($("#signup-email-input").val()) == true) {
            console.log("value was returned")
            $("#overlay").show()
            $("#error-overlay-content").show()
        }
    })
    $("#overlay-close-button").mousedown(function() {
        $(this).addClass("no-outline")
    })
    $("#overlay-close-button").mouseup(function() {
        $(this).removeClass("no-outline")        
        $("#error-overlay-content").hide()   
        $("#overlay").hide()  
    })
})