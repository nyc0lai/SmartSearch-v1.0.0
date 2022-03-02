//search module

//user Input Function
const userInput = () => {
    let searchInput = document.querySelector('.search_input');
    let searchRresult = document.querySelector('.search_result');
    let text = searchInput.value.trim();
    
    if(text.length >= 2){ 
        const rootSelector = '.search_result-list';
        const resultUsers = searchByName(text, users);
        resultRender(resultUsers, rootSelector);
        searchRresult.style.visibility = 'visible';

    }else if(text.length <= 1) {
        searchRresult.style.visibility = 'hidden';
        }
    };


//Search by Name Function
const searchByName = (partialName, users) => {
    let resultUsers = [];
    users.forEach(
        item => {
            if(item.name.toLowerCase().startsWith(partialName.toLowerCase())){
            resultUsers.push(item);
            // implimente _all command to show all users
            } else if (partialName.toLowerCase() == '_all'){
                resultUsers = users;
            }
        });
    return resultUsers;

};

//Result render Function
const resultRender = (resultUsers, rootSelector) => {
let html = "";
let rootElelemnt = document.querySelector(rootSelector);
    if(resultUsers.length > 0)
     {
        resultUsers.forEach (item =>
            {
            html += `<li class="search_result-list_item">${setStatus(item)}
            <img src="${item.avatar}">${item.name} <small class="minutes">${item.lastOnline}</small></li>`;
            rootElelemnt.innerHTML = html;
            })
    } else {
        rootElelemnt.innerHTML = 'Sorry, no result found...';
    }    
};

//user status set: green dot collor for online status and gray to offline status
//online < or = with 5 minuts
const setStatus = user => {
    const minutes = user.lastOnline.slice(0,2);
    if(minutes <= 5){
        return '<div class="onlineStatus"></div>';      
    } else {
        return '<div class="offlineStatus"></div>'
    }

};