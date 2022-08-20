pages = {
    "Home": "/dashboard",
    "Manage Account": "/dashboard/account",
    "Account Activity": "/dashboard/account/activity",
    "API Tokens": "/dashboard/tokens",
    "Store": "/dashboard/store",
}

let restrictedPages = [];

for (var key in pages){
    restrictedPages.push(pages[key])
};

console.log(restrictedPages)