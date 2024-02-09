"use client";
import React from "react";

const Cards = ({ cards, selectCard }: any) => {

  // Extracted Code 
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-32">
        Camada Semântica em Nutrição <br />
        estudos globais personalizados
      </h1>
      <p className="text-grey-light-1  text-2xl my-8 mx-4">
        Traduzindo pesquisas de universidades líderes em planos <br />{" "}
        nutricionais únicos, moldando sua jornada de saúde personalizada.
      </p>
      <button className="btn-primary mb-10">Get Started</button>

      <div className="my-16 flex  flex-wrap gap-x-16 md:gap-x-32 gap-y-10 justify-center items-center ">
        <div className="  ">
          <h3 className="text-4xl font-semibold text-gray-400 ">Logo 1</h3>
        </div>
        <div className=" ">
          <h3 className="text-4xl font-semibold text-gray-400 ">Logo 2</h3>
        </div>
        <div className=" ">
          <h3 className="text-4xl font-semibold text-gray-400 ">Logo 3</h3>
        </div>
        <div className="">
          <h3 className="text-4xl font-semibold text-gray-400 ">Logo 4</h3>
        </div>
      </div>
      <div className=" Page_SectionContent__Ztn5n SectionContent--align-none Page_SectionContent--size-l__4MlQw Section--gap-none Home_SectionHero__schema__Ir_9O">
        <div
          className="CubeSchema_CubeSchema__JblXC"
          style={
            {
              "--animation-delay":
                "calc(var(--base-animation-delay) + 5 * var(--step-animation-delay));",
            } as any
          }
        >
          <div className="CubeSchema_CubeSchema__input__3UQYh ">
            <div className="flex flex-col gap-[2.3vw] max-[768px]:hidden sm:gap-1.5 md:gap-2">
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-10 sm:hidden !pl-1 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Sob-Mediada
                  </div>
                  <img
                    className=" w-[22%]  sm:w-2/12"
                    src="/assets/tech-icons/Athena.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-20 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Bem-Estar
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Trino.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-50 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Lipídios
                  </div>
                  <img
                    className=" w-[22%] sm:w-2/12"
                    src="/assets/tech-icons/Snowflake.png"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-80 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Metas
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Redshift.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white undefined sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Cardíaco
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Presto.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-80 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Nutrição
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Postgres.png"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-50  sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Glicose
                  </div>
                  <img
                    className=" w-[22%]  sm:w-2/12"
                    src="/assets/tech-icons/Databricks.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-20 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Metabolismo
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/ClickHouse.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-10  sm:hidden sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Biologia
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Bigquery.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[2.3vw] min-[770px]:hidden sm:gap-1.5 md:gap-2">
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-20 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Bem-Estar
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Trino.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-20 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Metabolismo
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/ClickHouse.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white undefined sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Cardíaco
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Presto.png"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1  sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-50 !pl-1 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Lipídios
                  </div>
                  <img
                    className=" w-[22%]  sm:w-2/12"
                    src="/assets/tech-icons/Snowflake.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-80 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Nutrição
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Postgres.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-10  sm:hidden sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Biologia
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Bigquery.png"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col gap-[2.3vw] sm:gap-1.5 md:gap-2">
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-10  sm:hidden sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Sob-Mediada
                  </div>
                  <img
                    className=" w-[22%]  sm:w-2/12"
                    src="/assets/tech-icons/Athena.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 pl-2 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-80 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Metas
                  </div>
                  <img
                    className=" undefined w-2/12 sm:w-2/12"
                    src="/assets/tech-icons/Redshift.png"
                  />
                </div>
                <div className="flex flex-row-reverse w-[27.25vw] h-[7vw] pr-1 sm:pl-4 sm:pr-2 rounded-full text-base bg-white bg-opacity-10 text-white sm:opacity-50 !pl-1 sm:flex-row sm:w-[14vw] sm:h-[2.75vw] xl:w-56 xl:h-10">
                  <div className="w-10/12 text-[2.75vw] sm:text-[1vw] flex items-center justify-center xl:text-base">
                    Glicose
                  </div>
                  <img
                    className=" w-[22%] sm:w-2/12"
                    src="/assets/tech-icons/Databricks.png"
                  />
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 153 424"
              fill="none"
              className="CubeSchema_CubeSchema__svg--desktop__fDVWm"
              height={"390px"}
              width={"153px"}
            >
              <g
                className="input-lines-7_svg__scheme-dash-animated"
                stroke="green"
                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                clipPath="url(#input-lines-7_svg__a)"
              >
                <path d="M153 212H1.383" />
                <path
                  d="M153 224H82.057a24 24 0 00-16.075 6.178L39.85 253.749a24 24 0 01-16.075 6.179H1"
                  opacity="0.9"
                />
                <path
                  d="M153 236H93.844a24 24 0 00-19.969 10.687l-33.75 50.626A24 24 0 0120.155 308H1"
                  opacity="0.6"
                />
                <path
                  d="M153 248h-48.503a24 24 0 00-21.872 14.12l-36.03 79.76A24 24 0 0124.725 356H1"
                  opacity="0.4"
                />
                <path
                  d="M153 200H82.057a24 24 0 01-16.075-6.178L39.85 170.251a24 24 0 00-16.075-6.179H1"
                  opacity="0.9"
                />
                <path
                  d="M153 188H93.844a24 24 0 01-19.969-10.687l-33.75-50.626A24 24 0 0020.155 116H1"
                  opacity="0.6"
                />
                <path
                  d="M153 176h-48.503a24 24 0 01-21.872-14.12l-36.03-79.76A24 24 0 0024.725 68H1"
                  opacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="input-lines-7_svg__a">
                  <path fill="#fff" d="M0 0h153v424H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 83"
              fill="none"
              className="CubeSchema_CubeSchema__svg--mobile__O_Rhn"
            >
              <g
                className="input-lines-7-mobile_svg__scheme-dash-animated"
                stroke="green"
                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                mask="url(#input-lines-7-mobile_svg__fade_1)"
              >
                <path stroke="transparent" d="M10 56V0" />
                <path d="M124 81V62.074a16 16 0 00-12.436-15.598L28.436 27.482A16 16 0 0116 11.884V1" />
                <path d="M136 81.08V55.708a20 20 0 00-13.856-19.033L74.85 21.437A16 16 0 0163.765 6.211V1" />
                <path d="M148 81V49.028a24 24 0 00-13.769-21.71l-13.051-6.15A16 16 0 01112 6.694V1M160 80V0M172 81V49.028a24 24 0 0113.769-21.71l13.051-6.15A16 16 0 00208 6.694V1" />
                <path d="M184.088 81.08V55.708a20 20 0 0113.856-19.033l47.206-15.238a16 16 0 0011.085-15.226V1" />
                <path d="M196 81V62.074a16 16 0 0112.436-15.598l83.128-18.994A16 16 0 00304 11.884V1" />
              </g>
              <defs>
                <linearGradient
                  id="input-lines-7-mobile_svg__gradient_1"
                  y2={1}
                  x2={0}
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset="0.8" stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <mask
                  id="input-lines-7-mobile_svg__fade_1"
                  maskContentUnits="objectBoundingBox"
                >
                  <path
                    fill="url(#input-lines-7-mobile_svg__gradient_1)"
                    d="M0 0h2v1H0z"
                  />
                </mask>
              </defs>
            </svg>
          </div>
          <div
            className="CubeSchema_CubeSchema__cube__aVGJu relative"
            style={{ maxWidth: "600px", maxHeight: "600px", margin: "auto" }}
          >
            <svg
              viewBox="0 0 480 424"
              fill="none"
              className="CubeSchema_CubeSchema__cube__svg__VAd6W"
            >
              <defs>
                <linearGradient
                  id="gradient-1"
                  x1="56"
                  x2="436.8"
                  y1="238.415"
                  y2="238.415"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(1, 0, 0, 1, 4.586182, 2.389873)"
                >
                  <stop stop-color="green"></stop>
                  <stop offset="1" stop-color="rgb(233, 206, 93)"></stop>
                </linearGradient>
              </defs>
              <g transform="matrix(0.045888, 0, 0, 0.046198, 199.458374, 9.486949)">
                <path
                  d="M 86.398 276.943 L 86.398 338.05 L -121.763 338.05 L -121.763 3.206 L 84.409 3.206 L 84.409 64.312 L -44.759 64.312 L -44.759 140.324 L 70.499 140.324 L 70.499 200.933 L -44.759 200.933 L -44.759 276.943 L 86.398 276.943 Z M 374.541 86.172 L 374.541 338.05 L 302.009 338.05 L 302.009 297.81 C 288.762 325.962 263.259 340.037 225.501 340.037 C 199.667 340.037 179.531 332.817 165.09 318.377 C 150.717 304.003 143.529 282.739 143.529 254.588 L 143.529 86.172 L 216.062 86.172 L 216.062 238.193 C 216.062 267.67 228.979 282.409 254.812 282.409 C 286.277 282.409 302.009 261.378 302.009 219.316 L 302.009 86.172 L 374.541 86.172 Z M 803.778 176.59 L 803.778 338.05 L 731.146 338.05 L 731.146 188.514 C 731.146 174.272 728.364 163.011 722.8 154.73 C 717.169 146.451 709.054 142.311 698.456 142.311 C 687.195 142.311 677.16 146.881 668.351 156.022 C 659.606 165.098 655.234 181.392 655.234 204.908 L 655.234 338.05 L 582.702 338.05 L 582.702 188.514 C 582.702 174.272 579.887 163.011 574.255 154.73 C 568.626 146.451 560.512 142.311 549.912 142.311 C 538.652 142.311 528.616 146.881 519.807 156.022 C 511.064 165.098 506.69 181.392 506.69 204.908 L 506.69 338.05 L 434.157 338.05 L 434.157 86.172 L 506.69 86.172 L 506.69 125.419 C 520.6 97.598 544.282 83.688 577.733 83.688 C 613.172 83.688 636.686 99.585 648.279 131.382 C 653.909 116.477 663.349 104.786 676.597 96.307 C 689.845 87.895 705.411 83.688 723.297 83.688 C 748.135 83.688 767.745 91.538 782.118 107.236 C 796.558 123.003 803.778 146.119 803.778 176.59 Z M 953.216 288.371 C 963.483 288.371 971.433 285.224 977.063 278.932 C 982.693 272.638 985.509 264.028 985.509 253.098 L 985.509 234.715 L 962.159 234.715 C 949.904 234.715 940.465 237.366 933.841 242.665 C 927.217 247.965 923.905 254.753 923.905 263.034 C 923.905 279.925 933.675 288.371 953.216 288.371 Z M 988.986 338.05 L 988.986 307.249 C 978.388 328.777 957.522 339.54 926.389 339.54 C 901.88 339.54 882.77 332.586 869.058 318.676 C 855.279 304.764 848.39 287.377 848.39 266.511 C 848.39 242.333 857.268 223.521 875.019 210.074 C 892.706 196.694 918.938 190.003 953.712 190.003 L 985.509 190.003 L 985.509 172.616 C 985.509 151.419 971.433 140.821 943.281 140.821 C 916.122 140.821 890.951 148.439 867.767 163.673 L 867.767 98.593 C 887.638 87.332 916.288 81.702 953.712 81.702 C 989.483 81.702 1016.143 89.385 1033.699 104.752 C 1051.251 120.187 1060.028 144.133 1060.028 176.59 L 1060.028 338.05 L 988.986 338.05 Z M 1219.005 262.536 L 1173.797 338.05 L 1095.301 338.05 L 1185.222 211.863 L 1100.767 86.172 L 1181.248 86.172 L 1221.987 161.189 L 1267.194 86.172 L 1346.683 86.172 L 1256.265 212.36 L 1340.225 338.05 L 1261.233 338.05 L 1219.005 262.536 Z M 1453.496 86.172 L 1453.496 338.05 L 1380.962 338.05 L 1380.962 86.172 L 1453.496 86.172 Z M 1447.037 -16.666 C 1455.318 -8.385 1459.457 1.551 1459.457 13.142 C 1459.457 24.735 1455.318 34.67 1447.037 42.951 C 1438.759 51.231 1428.821 55.371 1417.228 55.371 C 1405.637 55.371 1395.702 51.231 1387.42 42.951 C 1379.141 34.67 1375 24.735 1375 13.142 C 1375 1.551 1379.141 -8.385 1387.42 -16.666 C 1395.702 -24.945 1405.637 -29.085 1417.228 -29.085 C 1428.821 -29.085 1438.759 -24.945 1447.037 -16.666 Z M 1885.216 176.59 L 1885.216 338.05 L 1812.684 338.05 L 1812.684 188.514 C 1812.684 174.272 1809.868 163.011 1804.238 154.73 C 1798.606 146.451 1790.493 142.311 1779.893 142.311 C 1768.633 142.311 1758.597 146.881 1749.788 156.022 C 1741.044 165.098 1736.673 181.392 1736.673 204.908 L 1736.673 338.05 L 1664.14 338.05 L 1664.14 188.514 C 1664.14 174.272 1661.324 163.011 1655.694 154.73 C 1650.063 146.451 1641.949 142.311 1631.349 142.311 C 1620.089 142.311 1610.053 146.881 1601.244 156.022 C 1592.501 165.098 1588.13 181.392 1588.13 204.908 L 1588.13 338.05 L 1515.596 338.05 L 1515.596 86.172 L 1588.13 86.172 L 1588.13 125.419 C 1602.039 97.598 1625.72 83.688 1659.17 83.688 C 1694.61 83.688 1718.125 99.585 1729.717 131.382 C 1735.347 116.477 1744.787 104.786 1758.034 96.307 C 1771.284 87.895 1786.848 83.688 1804.734 83.688 C 1829.574 83.688 1849.182 91.538 1863.555 107.236 C 1877.995 123.003 1885.216 146.119 1885.216 176.59 Z M 2176.739 210.87 C 2176.739 248.957 2165.909 280.323 2144.247 304.965 C 2122.521 329.67 2092.282 342.025 2053.532 342.025 C 2014.119 342.025 1983.649 330.169 1962.121 306.454 C 1940.593 282.806 1929.828 252.435 1929.828 215.34 C 1929.828 176.59 1941.09 144.696 1963.611 119.656 C 1986.134 94.684 2016.105 82.199 2053.532 82.199 C 2092.613 82.199 2122.92 94.288 2144.447 118.464 C 2165.975 142.642 2176.739 173.444 2176.739 210.87 Z M 2017.267 159.7 C 2009.316 173.278 2005.342 190.832 2005.342 212.36 C 2005.342 233.888 2009.416 251.508 2017.565 265.219 C 2025.645 278.996 2037.801 285.887 2054.029 285.887 C 2069.926 285.887 2081.784 279.162 2089.601 265.716 C 2097.349 252.335 2101.224 234.881 2101.224 213.355 C 2101.224 164.003 2085.162 139.33 2053.035 139.33 C 2037.137 139.33 2025.214 146.119 2017.267 159.7 Z"
                  opacity="1"
                  className="wordmark-text-0"
                  data-fill-palette-color="primary"
                  id="text-0"
                  fill="rgb(255, 255, 255)"
                ></path>
                <text
                  transform="matrix(12.824088, 0, 0, 12.738034, -436.01297, 8738.233398)"
                  style={
                    {
                      fill: "white;",
                      "font-family": "Inter, sans-serif;",
                      "font-size": "23.7904px;",
                      "line-height": "38.0647px;",
                      "white-space": "pre;",
                    } as any
                  }
                >
                  Camada Semântica
                </text>
              </g>
              <path
                stroke="url(#gradient-1)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M 180.586 18.39 L 112.426 18.39 C 93.9 18.39 84.637 18.39 77.612 22.11 C 71.944 25.111 67.308 29.747 64.306 35.416 C 60.586 42.441 60.586 51.704 60.586 70.23 L 60.586 358.55 C 60.586 377.076 60.586 386.339 64.306 393.364 C 67.308 399.033 71.944 403.669 77.612 406.671 C 84.637 410.39 93.9 410.39 112.426 410.39 L 168.602 410.39 M 308.586 18.39 L 376.746 18.39 C 395.272 18.39 404.535 18.39 411.56 22.11 C 417.229 25.111 421.865 29.747 424.867 35.416 C 428.586 42.441 428.586 51.704 428.586 70.23 L 428.586 358.55 C 428.586 377.076 428.586 386.339 424.867 393.364 C 421.865 399.033 417.229 403.669 411.56 406.671 C 404.535 410.39 395.272 410.39 376.746 410.39 L 320.587 410.39"
              ></path>
            </svg>
            {cards.map((card: any, index: number) => (
              <a
                key={index}
                className={`CubeSchema_CubeSchema__card__dzHa6 custom-cube custom-cube-${
                  index + 1
                }`}
                
                style={
                  {
                    "--card-bg": card.color,
                    "--card-border": card.borderColor,
                    "--card-index": index,
                    "--card-offset": `${card.cardOffset}`,
                    "--card-angle": "55deg",
                    "--card-dx": "40%",
                    "--card-duration": "300ms",
                  } as any
                }
              >
                <div>
                  <p className="CubeSchema_CubeSchema__card_title__gND6b">
                    {card.cardName}
                  </p>
                  <p className="CubeSchema_CubeSchema__card_content__K1bdM">
                    {card.cardDescription}
                  </p>
                </div>
                <div className="CubeSchema_CubeSchema__card_footer__YU7RW">
                  <img
                    className="CubeSchema_CubeSchema__card_badge__1a_FX w-8 sm:w-[3.75vw] xl:w-12"
                    src={card.bottomIcon}
                    width="32"
                    height="32"
                    alt="Data Modeling badge"
                  />
                  <div
                  onClick={() => selectCard(card.id)}
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
            ))}
          </div>
          <div className="CubeSchema_CubeSchema__output__Z7JVV">
            <svg
              viewBox="0 0 152 424"
              fill="none"
              className="CubeSchema_CubeSchema__svg--desktop__fDVWm"
              xmlns="http://www.w3.org/2000/svg"
              height={"390px"}
              width={"153px"}
            >
              <g
                className="output-lines-3-curved_svg__scheme-dash-animated"
                stroke="rgb(233, 206, 93)"
                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                mask="url(#output-lines-3-curved_svg__fade_5)"
              >
                <path d="M -23.356 200.632 L 63.46 200.632 C 73.735 200.632 82.87 197.271 86.18 192.271 L 107.778 159.654 C 111.088 154.655 120.223 151.293 130.498 151.293 L 152.644 151.293 M -23.356 225.302 L 63.415 225.302 C 73.712 225.302 82.862 228.677 86.155 233.692 L 107.542 266.251 C 110.835 271.265 119.984 274.641 130.281 274.641 L 152.644 274.641" />
                <path d="M-24 80h176M-24 340h176" stroke="transparent" />
              </g>
              <defs>
                <linearGradient
                  id="output-lines-3-curved_svg__gradient_5"
                  x2={1}
                >
                  <stop offset={0} stopColor="#fff" stopOpacity={0} />
                  <stop offset="0.2" stopColor="#fff" stopOpacity={0} />
                  <stop offset={1} stopColor="#fff" />
                </linearGradient>
                <mask
                  id="output-lines-3-curved_svg__fade_5"
                  maskContentUnits="objectBoundingBox"
                >
                  <path
                    fill="url(#output-lines-3-curved_svg__gradient_5)"
                    d="M0 0h1v1H0z"
                  />
                </mask>
              </defs>
            </svg>
            <svg
              id="output-apps-1_svg__Layer_1"
              x={0}
              y={0}
              viewBox="0 0 232 424"
              space="preserve"
              className="CubeSchema_CubeSchema__svg--desktop__fDVWm"
              height={"390px"}
              width={"233px"}
            >
              <path
                d="M 12 95.051 L 84 95.051 C 90.63 95.051 96 100.421 96 107.051 L 96 179.051 C 96 185.681 90.63 191.051 84 191.051 L 12 191.051 C 5.37 191.051 0 185.681 0 179.051 L 0 107.051 C 0 100.421 5.37 95.051 12 95.051 Z"
                className="output-apps-1_svg__st0"
              />
              <g
                transform="translate(-125,250) scale(0.055,-0.055)"
                fill="rgb(105, 105, 124)"
                stroke="none"
              >
                <path d="M2487 2622 c-15 -16 -17 -49 -17 -255 l0 -237 385 0 385 0 0 235 c0   222 -1 236 -20 255 -19 19 -33 20 -368 20 -325 0 -350 -1 -365 -18z m701 -239   l2 -203 -335 0 -335 0 0 198 c0 109 3 202 7 205 4 4 153 6 332 5 l326 -3 3   -202z" />
                <path d="M3446 2624 c-14 -13 -16 -55 -16 -304 0 -276 1 -290 19 -300 11 -5   82 -10 160 -10 114 0 142 3 155 16 14 13 16 54 16 298 0 261 -1 284 -18 299   -27 24 -293 25 -316 1z m209 -44 c3 -5 -2 -10 -12 -11 -70 -4 -87 -3 -91 9 -5   15 94 17 103 2z m85 -255 l0 -185 -138 0 -139 0 0 185 0 185 138 0 139 0 0   -185z m-121 -261 c-15 -18 -28 -18 -36 2 -8 20 17 36 34 22 10 -8 10 -14 2   -24z" />
                <path d="M2370 2085 c0 -18 26 -55 47 -64 16 -7 155 -11 436 -11 440 0 450 1   474 50 l12 25 -175 3 c-144 2 -179 0 -197 -13 -30 -21 -195 -21 -223 0 -15 11   -56 14 -196 15 -98 0 -178 -2 -178 -5z" />
                <path d="M2487 1862 c-15 -16 -17 -49 -17 -255 0 -201 2 -238 16 -251 13 -13   44 -16 185 -16 98 0 179 4 190 10 18 10 19 24 19 260 0 236 -1 250 -19 260   -11 6 -91 10 -189 10 -151 0 -171 -2 -185 -18z m343 -232 l0 -200 -155 0 -155   0 0 200 0 200 155 0 155 0 0 -200z m-122 -247 c-2 -12 -13 -18 -33 -18 -20 0   -31 6 -33 18 -3 14 4 17 33 17 29 0 36 -3 33 -17z" />
                <path d="M3009 1863 c-20 -23 -25 -457 -6 -493 12 -25 14 -25 155 -28 l142 -3   0 -29 c0 -26 -4 -30 -28 -30 -29 0 -72 -24 -72 -41 0 -5 81 -9 200 -9 119 0   200 4 200 9 0 15 -42 41 -67 41 -19 0 -23 5 -23 30 l0 30 133 0 c117 0 136 2   150 18 15 16 17 49 17 254 0 215 -2 236 -18 251 -17 15 -59 17 -394 17 -337 0   -377 -2 -389 -17z m746 -253 l0 -215 -352 -3 -353 -2 0 220 0 220 353 -2 352   -3 0 -215z" />
              </g>
              <path
                d="M 12 225.928 L 84 225.928 C 90.63 225.928 96 231.298 96 237.928 L 96 309.928 C 96 316.558 90.63 321.928 84 321.928 L 12 321.928 C 5.37 321.928 0 316.558 0 309.928 L 0 237.928 C 0 231.298 5.37 225.928 12 225.928 Z"
                className="output-apps-1_svg__st0"
              />
              <g transform="matrix(1.291941, 0, 0, 1.291941, -83.073479, -12.086665)">
                <path
                  className="output-apps-1-mobile_svg__st0"
                  d="M 258.992 -57.723 L 330.992 -57.723 C 337.622 -57.723 342.992 -52.353 342.992 -45.723 L 342.992 26.277 C 342.992 32.907 337.622 38.277 330.992 38.277 L 258.992 38.277 C 252.362 38.277 246.992 32.907 246.992 26.277 L 246.992 -45.723 C 246.992 -52.353 252.362 -57.723 258.992 -57.723 Z"
                />
                <path
                  d="M 294.992 -57.673 L 294.992 38.327 M 246.992 -9.723 L 342.992 -9.723"
                  strokeOpacity="0.24"
                  stroke="rgb(255, 255, 255)"
                />
                <g transform="translate(80.5, 200.5)">
                  <path
                    fill="#69697C"
                    d="M37.426,2.633H8.362C3.746,2.633,0,6.369,0,10.985v17.003c0,4.615,3.747,8.344,8.362,8.344h18.48l3.902,5.604   c0.527,0.756,1.39,1.209,2.311,1.211c0.92,0.002,1.785-0.443,2.314-1.197l4.129-5.865c3.611-0.924,6.281-4.198,6.281-8.098V10.985   C45.779,6.369,42.042,2.633,37.426,2.633z M15.431,22.203c-1.505,0-2.726-1.215-2.726-2.717c0-1.499,1.221-2.716,2.726-2.716   c1.506,0,2.726,1.217,2.726,2.716C18.157,20.988,16.937,22.203,15.431,22.203z M22.894,22.203c-1.505,0-2.726-1.215-2.726-2.717   c0-1.499,1.221-2.716,2.726-2.716c1.506,0,2.725,1.217,2.725,2.716C25.619,20.988,24.4,22.203,22.894,22.203z M30.357,22.203   c-1.506,0-2.727-1.215-2.727-2.717c0-1.499,1.221-2.716,2.727-2.716s2.726,1.217,2.726,2.716   C33.083,20.988,31.863,22.203,30.357,22.203z"
                  />
                </g>
              </g>
              <g transform="translate(122, 120)">
                <text fontSize={16} fill="white">
                  Seu melhor
                </text>
              </g>
              <g transform="translate(122, 140)">
                <text fontSize={16} fill="white">
                  eletrônico
                </text>
              </g>
              <defs>
                <path
                  id="output-apps-1_svg__SVGID_1_"
                  d="M122.62 103.37h22.4v20.3h-22.4z"
                />
              </defs>
              <clipPath id="output-apps-1_svg__SVGID_00000061449750183103857970000007043390403166931607_">
                <path d="M122.62 103.37h22.4v20.3h-22.4z" overflow="visible" />
              </clipPath>
              <g
                clipPath="url(#output-apps-1_svg__SVGID_00000061449750183103857970000007043390403166931607_)"
                transform="matrix(1, 0, 0, 1, 0, 51.051685)"
              >
                <path
                  d="M145.02 113.52c0-1.51-1.86-2.94-4.71-3.83.66-2.96.37-5.31-.92-6.06-.3-.18-.64-.26-1.02-.26v1.04c.21 0 .38.04.52.12.62.36.89 1.74.68 3.52-.05.44-.13.9-.23 1.37-.9-.22-1.87-.39-2.9-.51-.62-.86-1.25-1.64-1.9-2.32 1.49-1.41 2.88-2.18 3.83-2.18v-1.04c-1.26 0-2.9.91-4.56 2.49-1.66-1.57-3.31-2.47-4.56-2.47v1.04c.94 0 2.35.77 3.83 2.17-.64.68-1.28 1.46-1.89 2.32-1.03.11-2.01.28-2.9.51-.1-.46-.18-.92-.24-1.35-.22-1.77.05-3.15.67-3.52.14-.08.32-.12.53-.12v-1.04c-.38 0-.73.08-1.03.26-1.28.75-1.57 3.1-.91 6.04-2.84.89-4.69 2.32-4.69 3.82 0 1.51 1.86 2.94 4.71 3.83-.66 2.96-.36 5.31.92 6.06.3.18.64.26 1.03.26 1.26 0 2.9-.91 4.56-2.49 1.66 1.57 3.31 2.47 4.56 2.47.38 0 .73-.08 1.03-.26 1.28-.75 1.57-3.1.91-6.04 2.84-.89 4.68-2.32 4.68-3.83zm-5.94-3.09c-.17.6-.38 1.22-.62 1.83-.19-.37-.38-.74-.6-1.12-.21-.37-.43-.73-.66-1.09a24 24 0 011.88.38zm-2.09 4.94c-.36.63-.72 1.22-1.1 1.78a23.483 23.483 0 01-4.11 0 24.476 24.476 0 01-2.06-3.62c.28-.62.6-1.25.94-1.85.36-.63.72-1.22 1.1-1.78a23.483 23.483 0 014.12 0 24.89 24.89 0 012.05 3.61c-.28.63-.6 1.25-.94 1.86zm1.47-.6c.25.62.46 1.25.63 1.85-.6.15-1.23.27-1.88.37.22-.36.45-.72.66-1.1.21-.37.41-.75.59-1.12zm-4.63 4.96c-.42-.45-.85-.94-1.27-1.49a25.867 25.867 0 002.53 0c-.41.54-.84 1.04-1.26 1.49zm-3.39-2.74c-.65-.1-1.27-.22-1.87-.37.17-.6.38-1.22.62-1.83.19.37.38.74.6 1.11.2.38.42.74.65 1.09zm3.37-9.67c.42.45.85.94 1.27 1.49a25.867 25.867 0 00-2.53 0c.42-.55.84-1.04 1.26-1.49zm-3.38 2.74c-.22.36-.45.72-.66 1.1-.21.37-.41.74-.59 1.12-.25-.62-.46-1.25-.63-1.85.6-.15 1.23-.27 1.88-.37zm-4.13 5.82c-1.62-.7-2.66-1.62-2.66-2.35s1.04-1.65 2.66-2.35c.39-.17.82-.32 1.26-.47.26.91.6 1.86 1.03 2.83a21.4 21.4 0 00-1.01 2.82c-.45-.15-.88-.31-1.28-.48zm2.46 6.63c-.62-.36-.89-1.74-.68-3.52.05-.44.13-.9.23-1.37.89.22 1.87.39 2.9.51.62.86 1.26 1.64 1.9 2.32-1.49 1.41-2.88 2.18-3.84 2.18-.2.01-.38-.04-.51-.12zm10.83-3.54c.21 1.78-.05 3.15-.67 3.52-.14.08-.32.12-.52.12-.95 0-2.35-.77-3.84-2.16.64-.68 1.28-1.46 1.89-2.32 1.03-.11 2.01-.28 2.9-.51.11.47.19.92.24 1.35zm1.76-3.09c-.39.17-.82.32-1.26.47-.26-.91-.6-1.86-1.03-2.83.42-.97.76-1.91 1.01-2.82.45.14.88.3 1.28.47 1.62.7 2.66 1.62 2.66 2.35s-1.05 1.66-2.66 2.36z"
                  className="output-apps-1_svg__st8"
                />
                <path
                  d="M133.82 115.65c1.15 0 2.09-.95 2.09-2.12 0-1.17-.93-2.12-2.09-2.12-1.15 0-2.09.95-2.09 2.12 0 1.17.94 2.12 2.09 2.12z"
                  className="output-apps-1_svg__st8"
                />
              </g>
              <path
                d="M 166 155.031 L 156.55 158.401 L 157.99 170.901 L 166 175.331 L 174.01 170.901 L 175.45 158.401 L 166 155.031 Z"
                fill="#dd0031"
              />
              <path
                d="M 166 155.031 L 166 157.281 L 166 157.271 L 166 175.321 L 174.01 170.891 L 175.45 158.391 L 166 155.031 Z"
                fill="#c3002f"
              />
              <path
                d="M 166 157.281 L 160.09 170.531 L 162.29 170.531 L 163.48 167.571 L 168.49 167.571 L 169.68 170.531 L 171.88 170.531 L 166 157.281 Z M 167.73 165.731 L 164.28 165.731 L 166.01 161.581 L 167.73 165.731 Z"
                className="output-apps-1_svg__st11"
                color="white"
              />
              <defs>
                <path
                  id="output-apps-1_svg__SVGID_00000111167863846851940170000003985902554030350233_"
                  d="M187.5 105.03h21v18.55h-21z"
                />
              </defs>
              <clipPath id="output-apps-1_svg__SVGID_00000068654888408844850010000001453544421386664119_">
                <path d="M187.5 105.03h21v18.55h-21z" overflow="visible" />
              </clipPath>
              <g
                clipPath="url(#output-apps-1_svg__SVGID_00000068654888408844850010000001453544421386664119_)"
                transform="matrix(1, 0, 0, 1, 0, 51.051685)"
              >
                <path
                  d="M200.43 105.03l-2.43 4.28-2.43-4.28h-8.07l10.5 18.55 10.5-18.55h-8.07z"
                  fill="#41b883"
                />
                <path
                  d="M200.43 105.03l-2.43 4.28-2.43-4.28h-3.87l6.3 11.13 6.3-11.13h-3.87z"
                  fill="#34495e"
                />
              </g>
              <path
                fill="none"
                d="M 121.22 243.228 L 215.91 243.228 L 215.91 292.418 L 121.22 292.418 L 121.22 243.228 Z"
              />
              <g transform="translate(122, 250)">
                <text fontSize={16} fill="white">
                  Seu chat top
                </text>
              </g>
              <g transform="translate(122, 295) scale(0.45)">
                <path
                  fill="#2CB742"
                  d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5   S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                />
                <path
                  fill="#FFFFFF"
                  d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42   c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242   c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169   c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097   c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                />
              </g>
            </svg>
            <svg
              viewBox="-5.49 -204.966 414.367 398.168"
              fill="none"
              className="CubeSchema_CubeSchema__svg--mobile__O_Rhn CubeSchema_CubeSchema__svg--mobile__O_Rhn-output"
            >
              <g
                className="output-lines-3-curved-mobile_svg__scheme-dash-animated"
                stroke="rgb(233, 206, 93)"
                strokeDasharray="0.24 5.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                mask="url(#output-lines-3-curved-mobile_svg__fade_2)"
                transform="matrix(1.291941, 0, 0, 1.291941, -95.518341, -191.208176)"
              >
                <path d="M 222.666 -5.248 L 222.696 -6.428 L 222.683 -1.781 L 222 27.825 C 222 35.527 199.512 44.136 191.941 45.552 L 167.946 59.429 C 159.914 63.843 157.935 76.557 158.278 82.628 C 158.296 82.53 157.727 80.174 157.345 82.213 M 240.189 -4.731 L 240.136 -5.674 L 240.271 -0.394 L 241 28.115 C 241 35.817 246.487 42.426 254.058 43.842 L 291.945 55.429 C 299.516 56.845 305.004 63.454 305.004 71.156 L 305.004 81.015" />
              </g>
              <defs>
                <linearGradient
                  id="output-lines-3-curved-mobile_svg__gradient_2"
                  y2={1}
                  x2={0}
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset="0.8" stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <mask
                  id="output-lines-3-curved-mobile_svg__fade_2"
                  maskContentUnits="objectBoundingBox"
                >
                  <path
                    fill="url(#output-lines-3-curved-mobile_svg__gradient_2)"
                    d="M0 0h2v1H0z"
                  />
                </mask>
                <path
                  id="output-apps-1-mobile_svg__SVGID_1_"
                  d="M10.25 147.38h19.2v17.4h-19.2z"
                />
                <path
                  id="output-apps-1-mobile_svg__SVGID_00000150080705808985535080000016461445685766962590_"
                  d="M67 148.8h18v15.9H67z"
                />
                <path
                  id="output-apps-1-mobile_svg__SVGID_00000054953918373775393340000002949357870693313727_"
                  d="M151.3 147.6h17.4v16.8h-17.4z"
                />
              </defs>
              <g transform="matrix(1.291941, 0, 0, 1.291941, -70.969604, -38.807758)">
                <path
                  className="output-apps-1-mobile_svg__st0"
                  d="M 102.992 -36.723 L 174.992 -36.723 C 181.622 -36.723 186.992 -31.353 186.992 -24.723 L 186.992 47.277 C 186.992 53.907 181.622 59.277 174.992 59.277 L 102.992 59.277 C 96.362 59.277 90.992 53.907 90.992 47.277 L 90.992 -24.723 C 90.992 -31.353 96.362 -36.723 102.992 -36.723 Z"
                />
                <g
                  transform="translate(-32,120) scale(0.055,-0.055)"
                  fill="rgb(105, 105, 124)"
                  stroke="none"
                >
                  <path d="M2487 2622 c-15 -16 -17 -49 -17 -255 l0 -237 385 0 385 0 0 235 c0 222 -1 236 -20 255 -19 19 -33 20 -368 20 -325 0 -350 -1 -365 -18z m701 -239 l2 -203 -335 0 -335 0 0 198 c0 109 3 202 7 205 4 4 153 6 332 5 l326 -3 3 -202z" />
                  <path d="M3446 2624 c-14 -13 -16 -55 -16 -304 0 -276 1 -290 19 -300 11 -5 82 -10 160 -10 114 0 142 3 155 16 14 13 16 54 16 298 0 261 -1 284 -18 299 -27 24 -293 25 -316 1z m209 -44 c3 -5 -2 -10 -12 -11 -70 -4 -87 -3 -91 9 -5 15 94 17 103 2z m85 -255 l0 -185 -138 0 -139 0 0 185 0 185 138 0 139 0 0 -185z m-121 -261 c-15 -18 -28 -18 -36 2 -8 20 17 36 34 22 10 -8 10 -14 2 -24z" />
                  <path d="M2370 2085 c0 -18 26 -55 47 -64 16 -7 155 -11 436 -11 440 0 450 1 474 50 l12 25 -175 3 c-144 2 -179 0 -197 -13 -30 -21 -195 -21 -223 0 -15 11 -56 14 -196 15 -98 0 -178 -2 -178 -5z" />
                  <path d="M2487 1862 c-15 -16 -17 -49 -17 -255 0 -201 2 -238 16 -251 13 -13 44 -16 185 -16 98 0 179 4 190 10 18 10 19 24 19 260 0 236 -1 250 -19 260 -11 6 -91 10 -189 10 -151 0 -171 -2 -185 -18z m343 -232 l0 -200 -155 0 -155 0 0 200 0 200 155 0 155 0 0 -200z m-122 -247 c-2 -12 -13 -18 -33 -18 -20 0 -31 6 -33 18 -3 14 4 17 33 17 29 0 36 -3 33 -17z" />
                  <path d="M3009 1863 c-20 -23 -25 -457 -6 -493 12 -25 14 -25 155 -28 l142 -3 0 -29 c0 -26 -4 -30 -28 -30 -29 0 -72 -24 -72 -41 0 -5 81 -9 200 -9 119 0 200 4 200 9 0 15 -42 41 -67 41 -19 0 -23 5 -23 30 l0 30 133 0 c117 0 136 2 150 18 15 16 17 49 17 254 0 215 -2 236 -18 251 -17 15 -59 17 -394 17 -337 0 -377 -2 -389 -17z m746 -253 l0 -215 -352 -3 -353 -2 0 220 0 220 353 -2 352 -3 0 -215z" />
                </g>
                <g transform="translate(100, 80)">
                  <text fontSize={14} fill="white">
                    Seu melhor
                  </text>
                </g>
                <g transform="translate(100, 98)">
                  <text fontSize={14} fill="white">
                    eletrônico
                  </text>
                </g>
              </g>
              <clipPath id="output-apps-1-mobile_svg__SVGID_00000044866859481977142070000001638191257024345765_">
                <path d="M10.25 147.38h19.2v17.4h-19.2z" overflow="visible" />
              </clipPath>
              <g
                clipPath="url(#output-apps-1-mobile_svg__SVGID_00000044866859481977142070000001638191257024345765_)"
                transform="matrix(1.291941, 0, 0, 1.291941, 45.381775, -88.936668)"
              >
                <path
                  className="output-apps-1-mobile_svg__st5"
                  d="M29.45 156.08c0-1.29-1.59-2.52-4.03-3.28.56-2.53.31-4.55-.79-5.19-.27-.15-.57-.23-.88-.22v.89c.16 0 .31.03.45.1.53.31.76 1.49.58 3.01-.04.38-.11.77-.2 1.17-.82-.2-1.65-.35-2.49-.43-.5-.7-1.04-1.36-1.63-1.99 1.28-1.21 2.47-1.87 3.29-1.87v-.89c-1.08 0-2.49.78-3.91 2.13-1.42-1.35-2.83-2.12-3.91-2.12v.89c.81 0 2.01.66 3.29 1.86-.58.62-1.12 1.29-1.62 1.99-.84.09-1.67.23-2.49.44-.09-.4-.16-.78-.2-1.15-.18-1.52.04-2.7.57-3.02.14-.08.29-.11.45-.1v-.89c-.33 0-.63.07-.89.22-1.1.65-1.35 2.66-.78 5.18-2.43.76-4.02 1.99-4.02 3.28s1.59 2.52 4.03 3.28c-.56 2.53-.31 4.55.79 5.19.27.15.57.23.88.22 1.08 0 2.48-.78 3.91-2.13 1.42 1.35 2.83 2.12 3.91 2.12.33 0 .62-.07.88-.22 1.1-.65 1.35-2.66.78-5.18 2.44-.78 4.03-2 4.03-3.29zm-5.09-2.66c-.15.53-.33 1.06-.53 1.57-.33-.65-.69-1.28-1.08-1.89.56.09 1.09.19 1.61.32zm-1.8 4.24c-.29.52-.61 1.03-.94 1.52-1.17.11-2.36.11-3.53 0-.67-.98-1.26-2.02-1.76-3.1a21.63 21.63 0 011.75-3.11c1.17-.11 2.36-.11 3.53 0 .67.98 1.26 2.02 1.76 3.1-.25.54-.52 1.07-.81 1.59zm1.27-.52c.21.53.39 1.07.54 1.59-.51.13-1.05.24-1.61.32.38-.62.74-1.25 1.07-1.91zm-3.97 4.25c-.38-.41-.75-.83-1.09-1.27a19.466 19.466 0 002.17 0c-.36.46-.72.89-1.08 1.27zm-2.91-2.34c-.54-.08-1.07-.18-1.6-.32.14-.51.32-1.04.53-1.57.16.32.33.64.51.96s.36.62.56.93zm2.89-8.29c.36.38.73.81 1.09 1.27a19.466 19.466 0 00-2.17 0c.35-.46.72-.89 1.08-1.27zm-2.9 2.35c-.39.62-.75 1.25-1.07 1.9-.21-.52-.39-1.05-.54-1.59.53-.13 1.07-.23 1.61-.31zm-3.54 4.98c-1.39-.6-2.28-1.39-2.28-2.01s.9-1.42 2.28-2.01c.35-.15.72-.29 1.09-.4.22.78.52 1.59.88 2.43-.36.83-.65 1.64-.87 2.41-.38-.13-.74-.26-1.1-.42zm2.11 5.69c-.53-.31-.76-1.49-.58-3.01.04-.37.11-.77.2-1.17.77.19 1.6.34 2.49.43.5.7 1.04 1.36 1.63 1.99-1.28 1.21-2.47 1.87-3.29 1.87-.17 0-.32-.03-.45-.11zm9.28-3.03c.18 1.52-.04 2.7-.57 3.02-.14.08-.29.11-.45.1-.81 0-2.01-.66-3.29-1.86.58-.62 1.12-1.29 1.62-1.99.84-.09 1.67-.23 2.49-.44.09.41.16.8.2 1.17zm1.51-2.66c-.35.15-.72.29-1.08.4-.24-.83-.53-1.64-.88-2.43.36-.83.65-1.64.87-2.41.39.12.75.26 1.1.41 1.39.6 2.28 1.39 2.28 2.01-.01.63-.91 1.42-2.29 2.02z"
                />
                <path
                  className="output-apps-1-mobile_svg__st5"
                  d="M19.85 157.9c.99 0 1.79-.82 1.79-1.82s-.8-1.82-1.79-1.82-1.79.82-1.79 1.82.8 1.82 1.79 1.82z"
                />
              </g>
              <path
                d="M 107.395 102.142 L 96.931 105.876 L 98.532 119.712 L 107.395 124.623 L 116.258 119.712 L 117.859 105.876 L 107.395 102.142 Z"
                fill="#dd0031"
              />
              <path
                d="M 107.395 102.142 L 107.395 104.636 L 107.395 104.622 L 107.395 124.623 L 116.258 119.712 L 117.859 105.876 L 107.395 102.142 Z"
                fill="#c3002f"
              />
              <path
                className="output-apps-1-mobile_svg__st8"
                d="M 107.395 104.622 L 100.857 119.286 L 103.299 119.286 L 104.617 116.005 L 110.173 116.005 L 111.491 119.286 L 113.932 119.286 L 107.395 104.622 Z M 109.308 113.989 L 105.482 113.989 L 107.395 109.39 L 109.308 113.989 Z"
              />
              <clipPath id="output-apps-1-mobile_svg__SVGID_00000173855754419275868920000002313223426688610719_">
                <path d="M67 148.8h18v15.9H67z" overflow="visible" />
              </clipPath>
              <g
                clipPath="url(#output-apps-1-mobile_svg__SVGID_00000173855754419275868920000002313223426688610719_)"
                transform="matrix(1.291941, 0, 0, 1.291941, 45.381775, -88.936668)"
              >
                <path
                  d="M78.08 148.8L76 152.46l-2.08-3.66H67l9 15.9 9-15.9h-6.92z"
                  fill="#41b883"
                />
                <path
                  d="M78.08 148.8L76 152.46l-2.08-3.66H70.6l5.4 9.54 5.4-9.54h-3.32z"
                  fill="#34495e"
                />
              </g>
              <g transform="matrix(1.291941, 0, 0, 1.291941, -83.073479, -12.086665)">
                <path
                  className="output-apps-1-mobile_svg__st0"
                  d="M 258.992 -57.723 L 330.992 -57.723 C 337.622 -57.723 342.992 -52.353 342.992 -45.723 L 342.992 26.277 C 342.992 32.907 337.622 38.277 330.992 38.277 L 258.992 38.277 C 252.362 38.277 246.992 32.907 246.992 26.277 L 246.992 -45.723 C 246.992 -52.353 252.362 -57.723 258.992 -57.723 Z"
                />
                <g transform="translate(272.5, -27.5)">
                  <path
                    fill="#69697C"
                    d="M37.426,2.633H8.362C3.746,2.633,0,6.369,0,10.985v17.003c0,4.615,3.747,8.344,8.362,8.344h18.48l3.902,5.604 c0.527,0.756,1.39,1.209,2.311,1.211c0.92,0.002,1.785-0.443,2.314-1.197l4.129-5.865c3.611-0.924,6.281-4.198,6.281-8.098V10.985 C45.779,6.369,42.042,2.633,37.426,2.633z M15.431,22.203c-1.505,0-2.726-1.215-2.726-2.717c0-1.499,1.221-2.716,2.726-2.716 c1.506,0,2.726,1.217,2.726,2.716C18.157,20.988,16.937,22.203,15.431,22.203z M22.894,22.203c-1.505,0-2.726-1.215-2.726-2.717 c0-1.499,1.221-2.716,2.726-2.716c1.506,0,2.725,1.217,2.725,2.716C25.619,20.988,24.4,22.203,22.894,22.203z M30.357,22.203 c-1.506,0-2.727-1.215-2.727-2.717c0-1.499,1.221-2.716,2.727-2.716s2.726,1.217,2.726,2.716 C33.083,20.988,31.863,22.203,30.357,22.203z"
                  />
                </g>
              </g>
              <path d="M 265.939 47.705 L 359.308 47.705 L 359.308 96.205 L 265.939 96.205 L 265.939 47.705 Z" />
              <g transform="translate(252, 65)">
                <text fontSize={16} fill="white">
                  Seu chat top
                </text>
              </g>
              <g transform="translate(252, 100) scale(0.45)">
                <path
                  fill="#2CB742"
                  d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                />
                <path
                  fill="#FFFFFF"
                  d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
