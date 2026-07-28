import LanguageToggle from './components/LanguageToggle'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <LanguageToggle />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  )
}