import styles from './navbar.module.css'
import Link from "next/link";
import NavItem from '@/components/NavItem/NavItem'

const Navbar = () => {
  return (
    <div className={styles.navOuter}>
      <header className={styles.navHeader}>
        <div className={styles.navInner}>
            <div>
                <Link href='/'>Alix Fuerst Art</Link>
            </div>
            <div className={styles.navList}>
                <NavItem />
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar