function onLoad(){
    hideAllCollapsibles();
    assignCollapsibles();
}

function ChangeLocation(location){
    window.location = location;
}

function assignCollapsibles(){
    var collapsiableButtons = document.getElementsByClassName("collapsible-header");

    for (let i = 0; i < collapsiableButtons.length; i++) 
    {
        collapsiableButtons[i].addEventListener("click", function() 
        {
            var content = this.nextElementSibling;
            let caret = collapsiableButtons[i].children[0].children[1];

            if (content.style.maxHeight)
            {
                this.classList.remove("active");
                content.style.maxHeight = null;
                caret.src = 'Assets/Caret_down.png';
            } 
            else 
            {
                this.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                caret.src= 'Assets/Caret_up.png';
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        var headers = document.querySelectorAll('.collapsible-header');
        headers.forEach(function(header) {
            header.addEventListener('click', function() {
                var target = document.getElementById(header.getAttribute('data-target'));
                if (target.style.display === 'none' || target.style.display === '') {
                    target.style.display = 'block';
                    header.querySelector('.collapsible-header-caret').src = 'Assets/Caret_up.png';
                } else {
                    target.style.display = 'none';
                    header.querySelector('.collapsible-header-caret').src = 'Assets/Caret_down.png';
                }
            });
        });
    });
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
