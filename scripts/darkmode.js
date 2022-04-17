let darkMode = false

document.querySelector("#btn-dark-mode").addEventListener("click", function(e) {
    console.log(e)
    setDarkMode()
    let val = document.querySelector("#btn-dark-mode").innerHTML
    if(val === "Turn dark mode off") {
        removeDarkModeClasses()
    } else {
        setDarkModeClasses()
    }
})

function setDarkMode() {
    darkMode = true
    localStorage.setItem('dark', 'on')
}

function setDarkModeClasses() {
    let darkMode = localStorage.getItem('dark')
    if(darkMode === 'on') {
        document.querySelector("body").classList.add("body-dark-scheme")
        // .hyperlinked-dark-scheme
        const allLinks = document.querySelectorAll("main a")
        allLinks.forEach(element => { 
            element.classList.add("hyperlinked-dark-scheme")
        })
        const allElements = document.querySelectorAll("#main-navbar-div a")
        allElements.forEach(element => {
            element.classList.add("navbar-dark-scheme")
            if(element.classList.contains("active-nav")) {
                element.classList.add("active-nav-dark-scheme")
            } else {
                element.addEventListener("mouseover", function() {
                    element.classList.add('hover-dark-scheme')
                })
                element.addEventListener("mouseleave", function() {
                    element.classList.remove('hover-dark-scheme');
                })
            }
        });
        document.querySelector("#btn-dark-mode").innerHTML = "Turn dark mode off"
    } else {
        document.querySelector("body").classList.remove("body-dark-scheme")
        document.querySelector("#btn-dark-mode").innerHTML = "Turn dark mode on"
    }
}

function removeDarkModeClasses() {
    localStorage.removeItem('dark')
    document.querySelector("body").classList.remove("body-dark-scheme")
    
    const allLinks = document.querySelectorAll("main a")
    allLinks.forEach(element => { 
        element.classList.remove("hyperlinked-dark-scheme")
    })

    const allElements = document.querySelectorAll("#main-navbar-div a")
    allElements.forEach(element => {
        console.log(element)
        element.classList.remove("navbar-dark-scheme")
        if(element.classList.contains("active-nav")) {
            element.classList.remove("active-nav-dark-scheme")
        } else {
            element.removeEventListener("mouseover", function() {
                element.classList.remove('hover-dark-scheme')
            })

            element.removeEventListener("mouseleave", function() {
                element.classList.remove('hover-dark-scheme');
            })
        }
    });

    document.querySelector("#btn-dark-mode").innerHTML = "Turn dark mode on"
    console.log("Reloading")
    document.location.reload(true)
}