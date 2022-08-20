import tw from "tailwind-styled-components"

export default function SidebarItem( props ) {
    const NavItem = tw.div`
        flex items-center p-2 
        text-base font-normal 
        rounded-lg 
        text-white 
        hover:bg-gray-700
        cursor-pointer
    `;
    const NavItemIcon = tw.div`
        w-6 h-6 
        transition 
        duration-75 text-gray-400 
        group-hover:text-white
    `;
    const NavItemNotif = tw.div`
        inline-flex justify-center
        items-center p-3 ml-3 w-3
        h-3 text-sm font-medium
        rounded-full bg-blue-900
        text-blue-200
    `;
    const NavItemText = tw.div`
        flex-1 ml-3 whitespace-nowrap
    `;

    let classes = "";
    if (props.active) {
        classes = "bg-gray-700";
    }

    return (
        <li>
            <Link href={props.link}>
                <NavItem className={classes}>
                    <NavItemIcon>
                        <props.icon/>
                    </NavItemIcon>
                    <NavItemText>{props.title}</NavItemText>
                </NavItem>
            </Link>
        </li>
)};