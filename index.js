function onLoad(){
    hideAllCollapsibles();
    assignCollapsibles();
}

function assignCollapsibles(){
    var collapsiableButtons = document.getElementsByClassName("collapsible-header");

    for (let i = 0; i < collapsiableButtons.length; i++) 
    {
        collapsiableButtons[i].addEventListener("click", function() 
        {
            var content = this.nextElementSibling;
            if (content.style.maxHeight)
            {
                this.classList.remove("active");
                content.style.maxHeight = null;
            } 
            else 
            {
                this.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

function hideAllCollapsibles()
{
    var collapsiableButtons = document.getElementsByClassName("collapsible-header");

    for (let i = 0; i < collapsiableButtons.length; i++) 
    {
        var content = collapsiableButtons[i].nextElementSibling;
        content.style.maxHeight = null;
    }
}

function changeTheme(type){
    switch(type){
        case "light":
            document.getElementById('switcher-id').href = 'Assets/themes/themes-light.css';
            break;
        case "dark":
            document.getElementById('switcher-id').href = 'Assets/themes/themes-dark.css';
            break;
        default:
            break;
    }
}

window.changeTheme = changeTheme;