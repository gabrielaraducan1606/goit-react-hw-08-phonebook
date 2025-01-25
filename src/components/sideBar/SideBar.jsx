import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {

    const menuItems=[
        {
            id: "1",
            name:"Contacts",
            path:"/contacts"
        },

        {
            id:"2",
            name:"Login",
            path:"/login"
        }
    ]
  return (
    <div>
      Sidebar
      <ul className={styles.sideBar}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.liBar}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
