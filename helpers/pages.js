import pages from "../components/navigation/pages";

export default function getRestrictedPages () {
    let restrictedPages = [];
    for (var key in pages){
        restrictedPages.push(pages[key][0])
    };
    return restrictedPages;
}