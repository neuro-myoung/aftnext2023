import { client } from "@/app/lib/sanity"
import styles from '../galleries.module.css'
import { galleryImageTypes } from "@/app/lib/interface";
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextLightbox from "@/components/NextLightbox";


async function getImages() {
    const query = `
    *[_type == 'galleryimage' && gallery == 'Wildlife']|order(_createdAt asc){
        title,
        "currentSlug": slug.current,
        "image": image.asset->url,
    }`;

      const data = await client.fetch(query)

      return data
}

export default async function WildlifeGallery() {
    const data: galleryImageTypes[] = await getImages();
    console.log(data)
    return (
        <main className={styles.galleryMain}>
            <h1>Wildlife</h1>
            <div className={styles.galleryWrapper}>
                <div className={styles.galleryContainer}></div>
                <div className={styles.innerWrapper}>
                {data.map((img, idx) => (
                    <div key={ idx } className={styles.imgWrapper}>
                        <Image src={ img.image } alt="test" width={300} height={300} className={styles.thumbnail}/>
                    </div>
                ))}
                </div>
            </div>
            
        </main>
    )
}

