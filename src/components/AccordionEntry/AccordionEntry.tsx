import React from 'react'
import { Collapse } from "react-collapse";
import { TiMinus } from "react-icons/ti";
import { PiCaretDown } from "react-icons/pi";
import styles from './accordionentry.module.css'


interface Props {
  open: number;
  toggle: number;
  title: string;
  desc: string;
}

const AccordionEntry = ({open, toggle, title, desc}: Props) => {
  return (
    <div className={styles.entryOuter}>
        <div className={styles.entry} onClick={toggle}>
            <p className={styles.tagtext}>{title}</p>
            <div className={styles.icon}>
                {open ? <TiMinus /> : <PiCaretDown />}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className={styles.openEntry}>
              {desc}
            </div>
        </Collapse>
    </div>
  )
}

export default AccordionEntry