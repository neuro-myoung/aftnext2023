

'use client';
import { useState } from 'react'
import AccordionEntry from '../AccordionEntry/AccordionEntry'
import styles from './accordion.module.css'


const Accordion = () => {

    const entries = [
        {
            item: "Greeting cards",
            description: "Share artwork with friends and loved ones with these vibrant greeting cards."
        },
        {
            item: "Coaster Sets",
            description: "Unique and eye-popping coaster sets each with a curated collection of four drawings."
        },
        {
            item: "Prints",
            description: "High-quality prints of colored pencil drawings are the perfect addition to any home."
        },
        {
            item: "Original Art",
            description: "Bring home your own original, one-of-a-kind, colored pencil art."
        },
        {
            item: "Commission",
            description: "Work directly with me to create your own custom colored pencil portrait."
        }
    ]

    const [open, setOpen] = useState(-1);

    const toggle = (index:number) => {
        if(open == index) {
            return setOpen(-1)
        }

        setOpen(index)
    }


    return(
        <main>
            <section className={styles.accordion}>
                <h1 className={styles.sectionTitle}>Shop for Art</h1>
                {entries.map((entry, index) => {
                    return (
                        <AccordionEntry 
                            key={index} 
                            open={index === open} 
                            title={entry.item} 
                            desc={entry.description} 
                            toggle={() => toggle(index)}
                        />
                    )
                })}
            
            </section>
        </main>
    )
}

export default Accordion
