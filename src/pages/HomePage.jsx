import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import heroImg from '@/assets/hero.png'
import ClickCounter from '@/components/ClickCounter'
import DocsLinks from '@/components/DocsLinks'
import HeroScene from '@/components/HeroScene'
import SocialLinks from '@/components/SocialLinks'

function HomePage() {
  return (
    <>
      <HeroScene heroImg={heroImg} reactLogo={reactLogo} viteLogo={viteLogo} />
      <ClickCounter />
      <div className="ticks"></div>

      <section id="next-steps">
        <DocsLinks reactLogo={reactLogo} viteLogo={viteLogo} />
        <SocialLinks />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage
