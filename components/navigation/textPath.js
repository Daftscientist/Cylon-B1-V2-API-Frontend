import pages from "./pages";

export default function GetTextPath(path) {
    for (var key in pages){
        if (path === pages[key][0]) {
            return pages[key][1]
        }
    };
};