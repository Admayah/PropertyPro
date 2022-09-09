import { FaLayerGroup, FaRegUser } from "react-icons/fa";
import { BsFillGrid1X2Fill, BsArrowUpSquare } from "react-icons/bs";
import { MdFavoriteBorder, MdLogout } from "react-icons/md";


const profileIcon = <i class="fa fa-light fa-user fa-2x"></i>
// const listing = 
const logoutIcon = <i class="fa-duotone fa-arrow-right-from-bracket"></i>

export const SidebarData = [
    {
        href: "/dashboard",
        icon: <BsFillGrid1X2Fill size={30} color="#1C3988"/>,
        text: "Dashboard"
    },
    {
        href: "/post-property",
        icon: <BsArrowUpSquare size={30} color="#1C3988"/>,
        text: "Post a Property"
    },
    {
        href: "/my-properties",
        icon: <FaLayerGroup size={30} color="#1C3988"/>,
        text: "My Properties"
    },
    {
        href: "/profile",
        icon: <FaRegUser size={30} color="#1C3988"/>,
        text: "Profile"
    },
    {
        href: "/favourite",
        icon: <MdFavoriteBorder size={30} color="#1C3988"/>,
        text: "Favourites"
    },
    {
        href: "/",
        icon: <MdLogout size={30} color="#1C3988"/>,
        text: "Sign Out"
    },
]