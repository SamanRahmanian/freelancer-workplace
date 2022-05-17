//classes



//varieble
const btnMenu = document.querySelectorAll(".btn-menu")


//eventListener
eventListener()
function eventListener(){
    btnMenu.forEach(btn => {
        btn.addEventListener("click" , function(e){
            e.preventDefault()
            btnMenu.forEach(element => {
                element.parentElement.classList.remove("activ-li")
            });
            if (!(btn.parentElement.classList.contains("activ-li"))) {
                btn.parentElement.classList.add("activ-li")
            }

        })
    });
    document.querySelector("#btn-profile").addEventListener("click" , function(){
        document.querySelector(".profile").classList.remove("d-none")
        document.querySelector(".works").classList.add("d-none")
        document.querySelector(".VC").classList.add("d-none")
        document.querySelector(".statistics").classList.add("d-none")
    })
    document.querySelector("#btn-works").addEventListener("click" , function(){
        document.querySelector(".profile").classList.add("d-none")
        document.querySelector(".VC").classList.add("d-none")
        document.querySelector(".works").classList.remove("d-none")
        document.querySelector(".statistics").classList.add("d-none")
    })
    document.querySelector("#btn-VC").addEventListener("click" , function(){
        document.querySelector(".profile").classList.add("d-none")
        document.querySelector(".works").classList.add("d-none")
        document.querySelector(".VC").classList.remove("d-none")
        document.querySelector(".statistics").classList.add("d-none")
    })
    document.querySelector("#btn-statistics").addEventListener("click" , function(){
        document.querySelector(".profile").classList.add("d-none")
        document.querySelector(".works").classList.add("d-none")
        document.querySelector(".VC").classList.add("d-none")
        document.querySelector(".statistics").classList.remove("d-none")
    })
}