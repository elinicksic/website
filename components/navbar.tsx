import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
  return(
    <>
      <div className={styles.navbar}>
        <NavbarItem href="/">
          Home
        </NavbarItem>
        <NavbarItem href="/blog">
          Blog
        </NavbarItem>
        <NavbarItem href="/projects">
          Projects
        </NavbarItem>
      </div>
    </>
  )
}

function NavbarItem({children, href}: {children: React.ReactNode, href: string}) {
  return (
    <Link href={href}>
      <a className={styles.navbaritem}>{children}</a>
    </Link>
  )
}

export default Navbar