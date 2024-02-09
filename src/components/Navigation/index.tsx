import classNames from "classnames"
import Image from "next/image"

export const Navigation = ({section} : {section : 'light' | 'dark'})=>{


    return (

      <nav className="flex w-full justify-between items-center container mx-auto p-[4.5rem]  ">
        <div className="font-extrabold text-white">
            <Image alt="logo" height={70} width={120} objectFit="contain" src={`/assets/${section === 'light' ? 'day' : 'night'}/logo.png`}></Image>
        </div>

        <div className={classNames("navigation" , section)}>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
         <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>

        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </nav>
    )
}