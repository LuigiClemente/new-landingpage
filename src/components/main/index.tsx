import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import Cards from "../Cards/Cards"
import Footer from "../Footer/GreenAnimate"
import { Scroll } from "../AutoScroll/Scroll"


export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-[#0123] text-center text-white">
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
          </ul>
        </nav>
      </div>
      <ReactCompareSlider
        changePositionOnHover={true}
        handle={null}

        boundsPadding={0}
        itemOne={
          <div className="bg-[#000] text-white flex justify-center items-end w-[100vw] h-[100vh]">
            <Scroll
              items={[
                "./assets/day/0.webp",
                "./assets/day/1.webp",
                "./assets/day/2.webp",
                "./assets/day/3.webp",
                "./assets/day/4.webp",
                "./assets/day/5.webp",
                "./assets/day/6.webp",
                "./assets/day/7.webp",
                "./assets/day/8.webp",
                "./assets/day/9.webp",
                "./assets/day/10.webp"
              ]}
            />
          </div>}
        itemTwo={
          <div className="bg-[#fff] text-black flex justify-center items-end w-[100vw] h-[100vh]">
            <Scroll items={[
              "./assets/night/0.webp",
              "./assets/night/1.webp",
              "./assets/night/2.webp",
              "./assets/night/3.webp",
              "./assets/night/4.webp",
              "./assets/night/5.webp",
              "./assets/night/6.webp",
              "./assets/night/7.webp",
              "./assets/night/8.webp",
              "./assets/night/9.webp",
              "./assets/night/10.webp"
            ]}
            />
          </div>
        }
        keyboardIncrement="5%"
        position={50}
        style={{
          height: '100vh',
          width: '100%'
        }}
      />

      <Cards />
      <Footer />


    </main>
  )
}
