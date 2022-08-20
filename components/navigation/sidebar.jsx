import tw from "tailwind-styled-components"
import SidebarItem from "./sidebarItem"
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import ActiveOrNot from "./activeOrNot";
import { useRouter } from 'next/router'

export default function Sidebar( {children} ) {
    const router = useRouter()

    const path = router.pathname

    return (
        <section className="bg-gray-900 w-screen h-screen">
            <nav className="w-64 h-full p-2 fixed invisible md:visible" aria-label="Sidebar">
                <div className="py-4 h-full px-3 rounded-md bg-gray-800">
                    <div className="text-white font-bold text-xl text-center pb-2">
                        Cylon.wtf
                    </div>
                    <ul className="space-y-2">
                        <SidebarItem 
                            link="/dashboard" active={ActiveOrNot(path, "Dashboard")}
                            title="Dashboard" icon={Home}
                        />
                        <SidebarItem 
                            link="/dashboard/account" active={ActiveOrNot(path, "Manage Account")}
                            title="Manage Account" icon={User}
                        />
                        <SidebarItem
                            link="/dashboard/account/activity" active={ActiveOrNot(path, "Account Activity")}
                            title="Account Activity" icon={BarChart2}
                        />
                        <SidebarItem
                            link="/dashboard/tokens" active={ActiveOrNot(path, "API Tokens")}
                            title="API Tokens" icon={Key}
                        />
                        <SidebarItem
                            link="/dashboard/store" active={ActiveOrNot(path, "Store")}
                            title="Store" icon={ShoppingCart}
                        />
                    </ul>
                </div>
            </nav>
            { children }
        </section>
)};