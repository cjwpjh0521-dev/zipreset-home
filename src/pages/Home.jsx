import { useEffect } from 'react'
import '../../css/index.css'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'
import CategoryGrid from '../components/CategoryGrid'
import ProductSection from '../components/ProductSection'
import StorySection from '../components/StorySection'
import MagazineSection from '../components/MagazineSection'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

export default function Home() {
  useEffect(() => {
    const b = document.body
    b.style.display = 'block'
    b.style.background = '#fff'
    b.style.overflowX = 'hidden'
    b.style.overflowY = 'auto'
    b.style.minHeight = '0'
    b.style.maxWidth = '430px'
    b.style.margin = '0 auto'
    return () => { b.style.cssText = '' }
  }, [])

  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <CategoryGrid />
        <ProductSection />
        <StorySection />
        <MagazineSection />
        <Footer />
      </main>
      <BottomNav />
    </>
  )
}