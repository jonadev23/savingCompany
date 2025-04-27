import React from "react";
import Button from "../components/Button";
import { CiLocationOn } from "react-icons/ci";
import map from "../assets/images/map.png";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  return (
    <div>
      <section className="m-[4%] flex justify-between">
        <div className="w-4/12">
          <span>
            <p className="text-sm">Contact Us</p>
          </span>
          <span className="text-5xl font-medium">
            We are here for your needs
          </span>
          <span>
            <p className="py-4">
              Success in business thrives on innovation, persistence, and strong
              networks. Embrace challenges as opportunities, prioritize customer
              needs, and stay adaptable.
            </p>
            <p>
              Adapt to market changes, foster innovation, prioritize customer
              satisfaction and leverage technology to achieve sustainable growth
            </p>
          </span>
          <span>
            <Button
              className={
                "text-white my-[4%] text-sm bg-black rounded-3xl px-6 py-2 "
              }
            >
              Find a Demo partner
            </Button>
          </span>
        </div>
        <div className="w-1/2">
          <div className="text-2xl my-4 font-medium">
            <h1>Make sure to call</h1>
          </div>
          <form className="">
            <div className="flex gap-4 justify-between">
              <span className="grid w-1/2">
                <label htmlFor="">First Name*</label>
                <input type="text" className="border-b-1 py-2 outline-0" />
              </span>

              <span className="grid w-1/2">
                <label htmlFor="">Last Name*</label>
                <input type="text" className="border-b-1 py-2 outline-0" />
              </span>
            </div>
            {/* <span className="text-sm py-2">Please complete the required field</span> */}
            <div className="py-4">
              <span className="grid ">
                <label htmlFor="">Email*</label>
                <input type="email" className="border-b-1 py-2 outline-0" />
              </span>
            </div>
            <div className="flex gap-4 justify-between">
              <span className="grid w-1/2">
                <label htmlFor="">Company Name*</label>
                <input type="text" className="border-b-1 py-2 outline-0" />
              </span>
              <span className="grid w-1/2">
                <label htmlFor="">Phone Number*</label>
                <input type="text" className="border-b-1 py-2 outline-0" />
              </span>
            </div>
            <div>
              <span className="grid py-4">
                {" "}
                <label htmlFor="">Region*</label>
                <select
                  name=""
                  id=""
                  className="border-b-1 bg-gray-200 py-2 outline-0"
                >
                  <option value="">Please select...</option>
                </select>
              </span>
            </div>
            <div>
              <span className="grid py-4">
                {" "}
                <label htmlFor="">Enquiry Type*</label>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                  dignissimos culpa qui fugiat rem quidem ea nulla architecto
                  earum consequatur, harum,
                </p>
                <select
                  name=""
                  id=""
                  className="border-b-1 bg-gray-200 py-2 outline-0"
                >
                  <option value="">Please select...</option>
                </select>
              </span>
            </div>
            <div className="">
              <span className="grid py-4">
                {" "}
                <label htmlFor="">Message*</label>
                <textarea
                  className="py-2 outline-0 border-b-1"
                  name=""
                  id=""
                  placeholder="Youre message .."
                ></textarea>
              </span>
              <label htmlFor=""></label>

              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                dignissimos culpa qui fugiat rem quidem ea nulla architecto
                earum consequatur, harum, quo eaque, vitae reiciendis doloribus
                at suscipit atque soluta.
              </p>
            </div>
            <span>
              <Button
                className={
                  "text-white my-[2%] text-sm bg-black rounded-3xl px-6 py-2 "
                }
              >
                Send Message
              </Button>
            </span>
          </form>
        </div>
      </section>
      {/* info */}
      <section className="px-[10%]">
        <div className="text-3xl my-10 font-medium">
          <h1>Our offices</h1>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          <div>
            <span className="flex py-4 items-center text-xl font-medium">
              <CiLocationOn />
              &nbsp; Uganda
            </span>
            <span className="text-sm">
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Uganda House</p>
              <p>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; William Street, Plot 45,
                Kampala, Uganda
              </p>
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; +256-778-098-484</p>
            </span>
          </div>
          <div>
            <span className="flex py-4 items-center text-xl font-medium">
              <CiLocationOn />
              &nbsp; Uganda
            </span>
            <span className="text-sm">
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Uganda House</p>
              <p>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; William Street, Plot 45,
                Kampala, Uganda
              </p>
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; +256-778-098-484</p>
            </span>
          </div>
          <div>
            <span className="flex py-4 items-center text-xl font-medium">
              <CiLocationOn />
              &nbsp; Uganda
            </span>
            <span className="text-sm">
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Uganda House</p>
              <p>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; William Street, Plot 45,
                Kampala, Uganda
              </p>
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; +256-778-098-484</p>
            </span>
          </div>
          <div>
            <span className="flex py-4 items-center text-xl font-medium">
              <CiLocationOn />
              &nbsp; Uganda
            </span>
            <span className="text-sm">
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Uganda House</p>
              <p>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; William Street, Plot 45,
                Kampala, Uganda
              </p>
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; +256-778-098-484</p>
            </span>
          </div>
          <div>
            <span className="flex py-4 items-center text-xl font-medium">
              <CiLocationOn />
              &nbsp; Uganda
            </span>
            <span className="text-sm">
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; Uganda House</p>
              <p>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; William Street, Plot 45,
                Kampala, Uganda
              </p>
              <p>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; +256-778-098-484</p>
            </span>
          </div>
        </div>
      </section>
      <section className="px-[4%] py-[12%] relative z-10 bg-white">
        <div className=" font-medium flex justify-center items-center">
          <div className="w-1/2 text-center">
            <h1 className="text-5xl">Find a Demo partner</h1>
            <p className="text-sm py-10">
              Business is the art of identifying opportunities and transforming
              them into value. It thrives on innovation, teamwork, and
              resilience.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-6/12 px-[10%] " id="func">
            <ul>
              <li className="bg-white flex  my-2 text-black py-2">
                <span className="flex py-4 items-center text-xl font-medium">
                  <CiLocationOn />
                  &nbsp; Home
                </span>
              </li>
              <li className="bg-white flex my-2 text-black py-2">
                <span className="flex py-4 items-center text-xl font-medium">
                  <CiLocationOn />
                  &nbsp; About
                </span>
              </li>
              <li className="bg-white flex my-2 text-black py-2">
                <span className="flex py-4 items-center text-xl font-medium">
                  <CiLocationOn />
                  &nbsp; Info
                </span>
              </li>
            </ul>
          </div>
          <div
            style={{
              backgroundImage: `url(${map})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-[70vh] py-8e  w-full rounded-3xl bg-blue-100"
          ></div>
        </div>
      </section>
      {/* subfooter */}
      <div className="bg-black">
        <Parallax speed={-20}>
          <div className="bg-black text-white px-[4%]">
            <div className="grid grid-cols-3 gap-4 py-[8%] ">
              <div className=" text-5xl">
                <p>We are here to help</p>
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

export default Contact;
