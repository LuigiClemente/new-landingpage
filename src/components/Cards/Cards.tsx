'use client'
import React from "react";

export type Props = {
  title: string
  description: string
}

const Cards = ({ title, description }: Props) => {
  let animationCards = [
    {
      backgroundColor: "#008000",
      borderColor: "#D3D2FF",
      title: "Blog",
      description:
        "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/fat.svg",
    },
    {
      backgroundColor: "#008000",
      borderColor: "#D5EDFE",
      title: "Access Control",
      description:
        "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a source of truth.",
      bottomIcon: "/card-icons/nutrition.svg",
    },
    {
      backgroundColor: "#FFFF00",
      borderColor: "#FFF9F0",
      title: "Caching",
      description:
        "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/sugar.svg",
    },
    {
      backgroundColor: "#FF0000",
      borderColor: "#FFC1D3",
      title: "Apis",
      description:
        "Define and manage metrics upstream to consolidate your workflow, centralize definitions, and create a single source of truth.",
      bottomIcon: "/card-icons/fat.svg",
    },
  ];
  return (
    <div className="CubeSchema_CubeSchema__cube__aVGJu relative" style={{width:"500px", height:"500px", margin:"auto"}}>
      <a
        className="CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-1"
        style={{
          "--card-bg": "#008000",
          "--card-border": animationCards[0].borderColor,
          "--card-index": 0,
          "--card-offset": "-1.5",
          "--card-angle": "55deg",
          "--card-dx": "40%",
          "--card-duration": "300ms",
        }}
      >
        <div>
          <p className="CubeSchema_CubeSchema__card_title__gND6b">
            {animationCards[0]?.title}
          </p>
          <p className="CubeSchema_CubeSchema__card_content__K1bdM">
            {animationCards[0].description}
          </p>
        </div>
        <div className="CubeSchema_CubeSchema__card_footer__YU7RW">
          <img
            className="CubeSchema_CubeSchema__card_badge__1a_FX w-8 sm:w-[3.75vw] xl:w-12"
            src={"/card-icons/microbes.svg"}
            width="32"
            height="32"
            alt="Data Modeling badge"
          />
          <div
            style={{ cursor: "pointer" }}
            className="CubeSchema_CubeSchema__card_readMore__ovs9v"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill="#fff"
                d="m9.302 0-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302 0Z"
              ></path>
            </svg>
          </div>
        </div>
      </a>
      <a
            className="CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-2"
            style={{
              "--card-bg": "#FFA500",
              "--card-border": animationCards[1].borderColor,
              "--card-index": 1,
              "--card-offset": "-0.5",
              "--card-angle": "55deg",
              "--card-dx": "40%",
              "--card-duration": "300ms",
            }}
          >
            <div>
              <p className="CubeSchema_CubeSchema__card_title__gND6b">{animationCards[1].title}</p>
              <p className="CubeSchema_CubeSchema__card_content__K1bdM">{animationCards[1].description}</p>
            </div>
            <div className="CubeSchema_CubeSchema__card_footer__YU7RW flex justify-end">
              <img className="CubeSchema_CubeSchema__card_badge__1a_FX w-8 sm:w-[3.5vw] xl:w-[3rem]" src={"/card-icons/nutrition.svg"} width="32" height="32" alt="Access Control badge" />
              <div style={{ cursor: "pointer" }} className="CubeSchema_CubeSchema__card_readMore__ovs9v">
                <span>Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                  <path fill="#fff" d="m9.302 0-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302 0Z"></path>
                </svg>
              </div>
            </div>
          </a>
          <a
            className="CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-3"
            style={{
              "--card-bg": "red",
              "--card-border": animationCards[2].borderColor,
              "--card-index": 2,
              "--card-offset": "0.5",
              "--card-angle": "55deg",
              "--card-dx": "40%",
              "--card-duration": "300ms",
            }}
          >
            <div>
              <p className="CubeSchema_CubeSchema__card_title__gND6b">{animationCards[2].title}</p>
              <p className="CubeSchema_CubeSchema__card_content__K1bdM">{animationCards[2].description}</p>
            </div>
            <div className="CubeSchema_CubeSchema__card_footer__YU7RW">
            <img className="CubeSchema_CubeSchema__card_badge__1a_FX w-9 sm:w-[4vw] xl:w-[3.2rem] xl:mt-11" src={"/card-icons/sugar.svg"} width="32" height="32" alt="APIs badge" />
              <div style={{ cursor: "pointer" }} onClick={() => onPressReadMore("Caching")} className="CubeSchema_CubeSchema__card_readMore__ovs9v">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                  <path fill="#fff" d="m9.302 0-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302 0Z"></path>
                </svg>
              </div>
            </div>
          </a>
          <a
            className="CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-4"
            style={{
              "--card-bg": "rgb(233, 206, 93)",
              "--card-border": animationCards[3].borderColor,
              "--card-index": 3,
              "--card-offset": "1.5",
              "--card-angle": "55deg",
              "--card-dx": "40%",
              "--card-duration": "300ms",
            }}
          >
            <div>
              <p className="CubeSchema_CubeSchema__card_title__gND6b">{animationCards[3].title}</p>
              <p className="CubeSchema_CubeSchema__card_content__K1bdM">{animationCards[3].description}</p>
            </div>
            <div className="CubeSchema_CubeSchema__card_footer__YU7RW">
            <img className="CubeSchema_CubeSchema__card_badge__1a_FX w-6 sm:w-[2.6vw] xl:w-9" src={"/card-icons/fat.svg"} width="32" height="32" alt="Caching badge" />
             
              <div style={{ cursor: "pointer" }} onClick={() => onPressReadMore("Apis")} className="CubeSchema_CubeSchema__card_readMore__ovs9v">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                  <path fill="#fff" d="m9.302 0-1.44 1.44 6.176 6.208H.79v2.176l13.28-.032-6.208 6.24 1.44 1.472 8.48-8.48v-.576L9.302 0Z"></path>
                </svg>
              </div>
            </div>
          </a>
    </div>
  );
};

export default Cards;
