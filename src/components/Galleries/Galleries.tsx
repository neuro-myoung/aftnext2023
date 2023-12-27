import Image from 'next/image'
import styles from './galleries.module.css'

const Galleries = () => {
    return(
        <section className={styles.galleriesMain}>
            <div className={styles.galleryWrapper}>
                <div>
                    <div className={styles.textCover}></div>
                    <h1 className={styles.backgroundText}>See my work</h1>
                    <h1 className={styles.foregroundText}>See my work</h1>
                </div>
                <div className={styles.galleryGrid}>
                    <div>
                    
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galleries
