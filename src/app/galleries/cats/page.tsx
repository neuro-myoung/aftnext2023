import { client } from "@/app/lib/sanity"
import styles from '../galleries.module.css'
import { galleryImageTypes } from "@/app/lib/interface";
import Image from 'next/image'

async function getImages() {
    const query = `
    *[_type == 'galleryimage' && gallery == 'Cats']|order(_createdAt asc){
        title,
        "currentSlug": slug.current,
        "image": image.asset->url,
    }`;

      const data = await client.fetch(query)

      return data
}

export default async function CatGallery() {
    const data: galleryImageTypes[] = await getImages();
    return (
        <main className={styles.galleryMain}>
            <h1>Cats</h1>
           
            <div className={styles.galleryWrapper}>
                <div className={styles.galleryContainer}></div>
                <div className={styles.innerWrapper}>
                {data.map((img, idx) => (
                    <div key={ idx } className={styles.imgWrapper}>
                        <Image 
                            src={ img.image } 
                            alt="test" 
                            fill={true} 
                            sizes="(max-width:768px) 200px, 300px"
                            className={styles.thumbnail}
                        />
                    </div>
                ))}
                </div>
            </div>
            
        </main>
    )
}