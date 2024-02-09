"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa";

const Briefs = ({ selectedCard, selectCard, otherCards, reference }: any) => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <>
      <div className="custom-container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-32">
          O que é a Camada Semântica?
        </h1>
        <p className="text-grey-light-1  text-2xl my-8 mx-4">
          A Camada Semântica da Eumaximo é uma inovação em saúde, analisando seu
          microbioma, níveis de gordura e glicose, e dados nutricionais. Com
          tecnologia avançada e algoritmos inteligentes, ela oferece orientações
          personalizadas para compreender e melhorar sua saúde, auxiliando em
          decisões informadas para o bem-estar máximo.
        </p>
        <p className="text-xl font-bold">
          Quero saber mais sobre a Camada Semântica da Eumaximo.
        </p>
      </div>
      <div
        ref={reference}
        className="w-full pb-16"
        style={{
          background: selectedCard?.linearGradient,
        }}
      >
        <div className="custom-container">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold  mt-32 ">
                {selectedCard?.heading}
              </h1>
              <p className="text-grey-light-1  text-2xl my-10">
                {selectedCard?.description}
              </p>
              <button className="btn-primary mx-auto md:mx-0">
                {selectedCard?.btn}
              </button>
            </div>

            <div className="w-full md:w-1/2"></div>
          </div>

          <article className="bg-transparent-dark flex flex-col-reverse md:flex-row  mt-32 items-center p-16 rounded-2xl gap-12">
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-4xl font-bold">
                {selectedCard?.longSecHeading}
              </h1>
              <p className="mt-5 text-xl">{selectedCard?.longSecDescription}</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={selectedCard?.longSecImage as string}
                alt="Feature"
                height={350}
                width={350}
                className="mx-auto"
              ></Image>
            </div>
          </article>
          <div className="grid  gap-10 grid-cols-1 md:grid-cols-2 ">
            {selectedCard?.smallSections.map((smallSection: any) => (
              <article className="bg-transparent-dark   mt-20  p-16 rounded-2xl gap-12 col-span-1">
                <div className="mb-16">
                  <Image
                    src={smallSection.logo}
                    alt="Feature"
                    height={150}
                    width={150}
                  ></Image>
                </div>
                <div className=" text-left">
                  <h1 className="text-4xl font-bold">{smallSection.heading}</h1>
                  <p className="mt-5 text-xl">{smallSection.description}</p>
                </div>
              </article>
            ))}
          </div>
          {selectedCard?.long2SecHeading && (
            <article className="bg-transparent-dark flex flex-col-reverse md:flex-row  mt-32 items-center p-16 rounded-2xl gap-12">
              <div className="w-full md:w-1/2 text-left">
                <h1 className="text-4xl font-bold">
                  {selectedCard?.long2SecHeading}
                </h1>
                <p className="mt-5 text-xl">
                  {selectedCard?.long2SecDescription}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={selectedCard?.long2SecImage as string}
                  alt="Feature"
                  height={350}
                  width={350}
                  className="mx-auto"
                ></Image>
              </div>
            </article>
          )}
          <h3 className="text-4xl font-bold mb-16 mt-32 ">
            {selectedCard?.subHeading}
          </h3>
          <p className=" text-2xl text-center">{selectedCard?.subPara}</p>

          {selectedCard?.secondaryImage && (
            <Image
              src={selectedCard.secondaryImage}
              alt="secondary Image"
              height={300}
              width={500}
              className="w-full h-full object-contain my-16"
            />
          )}

          {selectedCard?.codeBlock === true && (
            <>
              <div className="flex flex-col-reverse md:flex-row gap-10 items-center mt-32">
                <div className="w-full md:w-1/2">
                  <p className=" text-2xl text-left">
                    Cube is a dataset-oriented semantic layer. When building
                    your data model, you’ll deal with two types of objects:
                    cubes and views.
                    <br />
                    Cubes represent business entities such as customers, line
                    items, and orders. In cubes, you define all the calculations
                    within measures and dimensions of these entities.
                    <br />
                    All cubes within your data model constitute your data graph.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <CodeEditor
                    value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                      backgroundColor: "#f5f5f5",
                      fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                      borderRadius: "20px",
                      minHeight: "200px",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row  gap-10 items-center my-32">
                <div className="w-full md:w-1/2">
                  <CodeEditor
                    value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                      backgroundColor: "#f5f5f5",
                      fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                      borderRadius: "20px",
                      minHeight: "200px",
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className=" text-2xl text-left">
                    Cube is a dataset-oriented semantic layer. When building
                    your data model, you’ll deal with two types of objects:
                    cubes and views.
                    <br />
                    Cubes represent business entities such as customers, line
                    items, and orders. In cubes, you define all the calculations
                    within measures and dimensions of these entities.
                    <br />
                    All cubes within your data model constitute your data graph.
                  </p>
                </div>
              </div>
            </>
          )}

          <h3 className="text-4xl font-bold mb-16 mt-32 ">
            Check out the rest of Cube's four-part semantic layer
          </h3>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-16">
            {otherCards.map((card: any) => (
              <div
                className={`col-span-1 border rounded-2xl p-10 text-left flex flex-col justify-between items-start min-h-[220px] cursor-pointer hover:shadow-lg card-hover-effect ease-linear transition-all`}
                style={{
                  background: card.color,
                  "--card-hover-color": card.darkColor,
                }}
                onClick={() => selectCard(card.id)}
              >
                <div>
                  <h4 className="text-3xl font-bold mb-6">{card.cardName}</h4>
                  <span className="text-xl">{card.cardDescription}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <button className="text-xl font-semibold">{card.cta}</button>
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Briefs;
