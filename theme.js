setDefaultTheme();


console.log(`The current theme is the ${document.body.classList}.`);


function setDefaultTheme()
{
 
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";
    document.body.classList.value = theme;
  
}

function toggleMode(x) 
{  
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;
    
    if (document.body.classList.value === "dark-theme") {
        document.body.classList.value = "light-theme";
        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"
        localStorage.setItem('colorTheme', 'light-theme')
        localStorage.setItem('iconText', 'Light Mode')
        localStorage.setItem('iconMode', 'fa-toggle-off')
    } else {
        document.body.classList.value = "dark-theme";
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"
        localStorage.setItem('colorTheme', 'dark-theme')
        localStorage.setItem('iconText', 'Dark Mode')
        localStorage.setItem('iconMode', 'fa-toggle-on')
    }

   
    console.log("The theme has been changed to " + document.body.classList.value + ".");
}
