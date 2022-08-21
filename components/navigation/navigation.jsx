import Sidebar from "./sidebar"
import Nav from "../navigationBar"
import { useRouter } from "next/router"
import getRestrictedPages from "../../helpers/pages"

export default function Navigation({ children }) {
    const router = useRouter()
    const path = router.pathname
    const pages = getRestrictedPages()
    if (pages.includes(path)) {
        return (
            <Sidebar>
                <main className="flex flex-col flex-1 pl-2 pr-2 w-full md:pl-64 pt-2">
                    <Nav/>
                    { children }
                </main>
            </Sidebar>
        )
    } else {
        return <>{ children }</>
    }

}