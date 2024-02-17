import styles from './navbar.module.css'
import Link from "next/link";
import NavItems from '@/components/Navbar/NavItems/NavItems'

const Navbar = () => {
  return (
    <div className={styles.navOuter}>
      <header className={styles.navHeader}>
        <div className={styles.navInner}>
            <div>
                <Link href='/'>Alix Fuerst Art</Link>
            </div>
            <NavItems />
        </div>
      </header>
    </div>
  )
}

export default Navbar