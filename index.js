function onLoad(){
}

function ChangeLocation(location){
    window.location = location;
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
