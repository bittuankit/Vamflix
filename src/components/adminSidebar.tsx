import { IconType } from "react-icons";
import { RiDashboardFill, RiMovie2Fill, RiUser3Fill } from "react-icons/ri"
import { Link, Location, useLocation } from "react-router-dom"

const AdminSidebar = () => {

    const location = useLocation();

  return (
    <div>
        <h2>Vamflix</h2>
        <h5>Dashboard</h5>
        <ul>
            <Li link="/admin/dashboard" text="Dashboard" location={location} Icon={RiDashboardFill} />
            <Li link="/admin/items" text="Items" location={location} Icon={RiMovie2Fill} />
            <Li link="/admin/users" text="Users" location={location} Icon={RiUser3Fill} />
        </ul>
    </div>
  )
}

interface list {
    link: string,
    text: string,
    location: Location,
    Icon: IconType
}

const Li = ({link,text,location,Icon}:list) => (
    <li style={{background: location.pathname.includes(link) ? "#f0f0f6" : "white"}}>
            <Link to={link}>
                <Icon />
                {text}
            </Link>
        </li>
    )

export default AdminSidebar