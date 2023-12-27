import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import GalleryScroll from '@/components/GalleryScroll/GalleryScroll'
import Shop from '@/components/Shop/Shop'

export default function Home() {
  return (
    <div className="container">
        <Hero />
        <GalleryScroll />
        <Shop />
      </div>
  )
}
