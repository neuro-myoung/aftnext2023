import { client } from "@/app/lib/sanity"
import styles from '../galleries.module.css'
import { galleryImageTypes } from "@/app/lib/interface";
import Image from 'next/image'


async function getImages() {
    const query = `
    *[_type == 'galleryimage' && gallery == 'Dogs']|order(_createdAt asc){
        title,
        "currentSlug": slug.current,
        "image": image.asset->url,
    }`;

      const data = await client.fetch(query)

      return data
}

export default async function DogGallery() {
    const data: galleryImageTypes[] = await getImages();
    console.log(data)
    return (
        <main className={styles.galleryMain}>
            <h1>Dogs</h1>
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