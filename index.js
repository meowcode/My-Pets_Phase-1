function clickTabs(){
    document.querySelectorAll(".tabs_button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer=sideBar.parentElement;
            const tabsName = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabsName}"]`);

            sideBar.querySelectorAll(".tabs_button").forEach(button => {
                button.classList.remove("tabs_button--active");
            });

            tabsContainer.querySelectorAll(".tabs_content").forEach(tab => {
                tab.classList.remove("tabs_content--active");
            });

            button.classList.add("tabs_button-active");
            tabToActivate.classList.add("tabs_content--active");
            
        });
    });
}


document.addEventListener("DOMContentLoaded", ()=>{
    clickTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer=>{
        tabsContainer.querySelector(".tabs_sidebar .tabs_button").click();
    })
});


function fetchCatFacts(){
    fetch("https://cat-fact.herokuapp.com/facts")
.then(response =>{
    return response.json()
})
.then(data => {
    console.log(data)
    data.forEach(facts=>{
        const catDiv=document.querySelector(".cat-facts")
        const tag= document.createElement("p")
        tag.innerText=facts.text
        catDiv.appendChild(tag)
    })
})
}

document.querySelector("#cat-button").addEventListener("click", fetchCatFacts)

