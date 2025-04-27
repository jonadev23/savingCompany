import React from "react";
import Button from "../components/Button";
import thumbnail from "../assets/images/thumbnail.jpg";
import b from "../assets/images/card2.jpg";
import c from "../assets/images/card3.jpg";
import woman from "../assets/images/woman.jpg";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <div>
      {/* intro */}
      <section className="h-[100vh] my-[4%] mx-[10%]">
        <div className="flex justify-between py-[1%]">
          <div className="w-7/12">
            <span>
              <p className="text-sm">About Us</p>
            </span>
            <h1 className="text-7xl font-medium text-black/80">
              Let us Invest to{" "}
              <span className="text-[#258cda]">start a journey</span>,
            </h1>
            <p className="py-8 ">
              Empowering innovation, driving success , and shaping the future
              together through creative solutions, sustainable practices, and
              unparalleled customer focus. We believe in collaboration, and
              delivering excellence that transforms.
            </p>
            <Button
              className={"text-white text-sm bg-black rounded-3xl px-6 py-2 "}
            >
              Lets Talk
            </Button>
          </div>
          <div className="w-4/12 h-100 flex flex-col">
            <img
              src={woman}
              className="rounded-full h-full object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
      {/* other */}
      <section className=" bg-black flex justify-between  text-white rounded-2xl mx-[4%] h-[100vh]">
        <div id="words" className="w-1/2 px-[6%]">
          <ul>
            <li className=" border-b-1 border-b-white text-white py-4">
              <h1 className="text-3xl py-6">1,000,000</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia incidunt labore sint repudiandae explicabo
                dignissimos
              </p>
            </li>
            <li className=" border-b-1 border-b-white text-gray-500 py-4">
              <h1 className="text-3xl py-6">1,000,000</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia incidunt labore sint repudiandae explicabo
                dignissimos
              </p>
            </li>
            <li className=" border-b-1 border-b-white text-white py-4">
              <h1 className="text-3xl py-6">1,000,000</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia incidunt labore sint repudiandae explicabo
                dignissimos
              </p>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-1/2 brightness-80 bg-white h-full "
          id="func"
        ></div>
      </section>
      {/* info */}
      <section className="  flex justify-between items-center   rounded-2xl mx-[4%] h-[100vh]">
        <div id="words" className="w-1/2 px-[6%]">
          <ul>
            <li className="   py-4">
              <h1 className="text-3xl font-bold py-6">Lets get started now</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia incidunt labore sint repudiandae explicabo
                dignissimos
              </p>
              <p className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                voluptatum libero minus non hic. Ex quo debitis suscipit
                corporis beatae. Perspiciatis quia dolore aperiam, labore
                excepturi dolorum ipsam fugit nulla?
              </p>
              <Button
                className={
                  "text-white text-sm bg-black rounded-3xl px-6 py-2  "
                }
              >
                Visit our site
              </Button>
            </li>
          </ul>
        </div>
        <div className="w-1/2 bg-white h-[20rem]  " id="func">
          <img src={b} className="rounded-4xl" />
        </div>
      </section>
      {/* info 2 */}
      <section className="relative z-10 bg-blue-100 flex justify-between items-center   rounded-2xl px-[4%] h-[100vh]">
        <div id="words" className="w-1/2 px-[6%]">
          <ul>
            <li className="   py-4">
              <h1 className="text-3xl font-bold py-6">Lets get started now</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur officia incidunt labore sint repudiandae explicabo
                dignissimos
              </p>
              <p className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                voluptatum libero minus non hic. Ex quo debitis suscipit
                corporis beatae. Perspiciatis quia dolore aperiam, labore
                excepturi dolorum ipsam fugit nulla?
              </p>
              <Button
                className={
                  "text-white text-sm bg-black rounded-3xl px-6 py-2  "
                }
              >
                Visit our site
              </Button>
            </li>
          </ul>
        </div>
        <div className="w-1/2 bg-white h-[20rem] rounded-4xl  " id="func">
          <img src={c} className="rounded-4xl" />
        </div>
      </section>
      {/* subfooter */}
      <div className="bg-black">
        <Parallax speed={-20}>
          <div className="bg-black text-white px-[4%]">
            <div className="grid grid-cols-3 gap-4 py-[8%] ">
              <div className=" text-5xl">
                <p>Learn More about Us</p>
              </div>
              <div className=" "></div>
              <div className="grid gap-10">
                <span className=" text-lg font-medium">
                  Great businesses are built on innovation, dedication, and
                  resilience.
                </span>

                <Button className={"bg-white text-black px-4 py-1 rounded-3xl"}>
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
