const pages = {
    "Home": "/dashboard",
    "Manage Account": "/dashboard/account",
    "Account Activity": "/dashboard/account/activity",
    "API Tokens": "/dashboard/tokens",
    "Store": "/dashboard/store",
}

export function ActiveOrNot (currentPath, title) {
    if (pages[title] === currentPath) {
        return true
    } else { 
        return false
    }
};

export function getRestrictedPages () {
    let restrictedPages = [];
    for (var key in pages){
        restrictedPages.push(pages[key])
    };
    return restrictedPages;
}