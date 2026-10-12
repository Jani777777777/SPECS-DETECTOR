const button = document.getElementById("detectBtn");

button.addEventListener("click", function ( ) {
    document.getElementById("device").textContent = 
        "Platform: " + navigator.platform;

        document.getElementById("browser").textContent =
            "Browser: " + navigator.userAgent;

            document.getElementById("screen").textContent =
                "Screen: " + screen.width + " x " + screen.height;

                document.getElementById("memory").textContent = 
                    "RAM: " + (navigator.deviceMemory
                        ? navigator.deviceMemory + " GB"
                        : "Not available");

            document.getElementById("cores").textContent =
                "Logical CPU cores: " + navigator.hardwareConcurrency;
});                    
            

                        
                

                

            
        

    

    
    

