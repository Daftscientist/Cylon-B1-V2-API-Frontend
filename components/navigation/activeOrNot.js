import pages from "./pages";

export default function ActiveOrNot (currentPath, title) {
    try {
        if (pages[title][0] === currentPath) {
            return true
        } else { 
            return false
        }
    } catch {
        return false
    }
};