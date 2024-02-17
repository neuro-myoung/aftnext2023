import React from 'react'
import styles from './contact.module.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
        <h1>Reach out</h1>
        <ContactForm />
        
    </div>
  )
  }

export default Contact