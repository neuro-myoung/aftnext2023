'use client'
import styles from './navitems.module.css'
import Link from 'next/link'

const NavItem = () => {
  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Galleries",
      path: "/galleries",
    },
    {
      title: "Shop",
      path: "https://www.etsy.com/shop/AlixFuerstArt",
    },
    {
      title: "Contact",
      path: "/contact",
    }
  ]
  return (
    <div className={styles.navitemsContainer}>
      {items.map((item => (
        <Link href={item.path} key={item.title} className={styles.navlink}>
          <h3>{item.title}</h3>
          </Link>
      )))}
    </div>
  )
}

export default NavItem