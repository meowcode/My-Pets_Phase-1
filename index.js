/*function clickTabs(){
    document.querySelectorAll(".tabs_button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer=sideBar.parentElement;
            const tabName = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector('.tabs_conatent[data-tab="${tabName}"]');

            sideBar.querySelectorAll(".tabs_button").forEach(button => {
                button.classList.remove("tabs_button--active");
            });

            tabsContainer.querySelectorAll(".tabs_content").forEach(tab => {
                tab.classList.remove("tabs_content--active");
            });

            button.classList.add("tabs_button--active");
            tabToActivate.classList.add("tabs_content--active");
            
        });
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    clickTabs();
});
*/