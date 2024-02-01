import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import Cards from "../Cards/Cards"


export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#0123] text-center text-white">
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
        boundsPadding={0}
        itemOne={
          <div className="bg-[#000] text-white w-[100vw] h-[100vh]">
            asdfasdfsaf
          </div>}
        itemTwo={
          <div className="bg-[#fff] text-black w-[100vw] h-[100vh]">
            asdfasdfsaf
          </div>
        }
        keyboardIncrement="5%"
        position={50}
        style={{
          height: '100vh',
          width: '100%'
        }}
      />
      {/* <Cards/> */}

    </main>
  )
}
