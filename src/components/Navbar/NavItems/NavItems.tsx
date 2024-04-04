'use client'
import styles from './navitems.module.css'
import Link from 'next/link'

const NavItem = () => {
  return (
    <div className={styles.navitemsContainer}>
      <Link href="/" className={styles.navlink}>
        <h3>Home</h3>
      </Link>
      <Link href="/about" className={styles.navlink}>
        <h3>About</h3>
      </Link>
      <div className={styles.dropdown}>
        <div className={styles.dropdownHeader}>
          <h3>Galleries</h3>
        </div>
        <div className={styles.dropdownContent}>
              <Link href="/galleries/dogs" className={styles.dropdownLink}>
                <h3>Dogs</h3>
              </Link>
              <Link href="/galleries/cats" className={styles.dropdownLink}>
                <h3>Cats</h3>
              </Link>
              <Link href="/galleries/wildlife" className={styles.dropdownLink}>
                <h3>Wildlife</h3>
              </Link>
              <Link href="/galleries/people" className={styles.dropdownLink}>
                <h3>People</h3>
              </Link>
        </div>
      </div>
      <Link href="https://www.etsy.com/shop/AlixFuerstArt" className={styles.navlink}>
        <h3>Shop</h3>
      </Link>
      <Link href="/contact" className={styles.navlink}>
        <h3>Contact</h3>
      </Link>
        
    </div>
  )
}

export default NavItem

