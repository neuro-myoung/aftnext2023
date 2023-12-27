'use client'
import styles from './navitem.module.css'
import { useState } from 'react'

const NavItem = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  return (
    <div>NavItem</div>
  )
}

export default NavItem