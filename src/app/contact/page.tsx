import React from 'react'
import styles from './contact.module.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <h1>Let's Connect</h1>
      <div className={styles.formWrapper}>
        <div className={styles.descriptionWrapper}>
          <p>Have questions, want to connect, or commission custom artwork? Send me a message or reach out on social media.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
  }

export default Contact