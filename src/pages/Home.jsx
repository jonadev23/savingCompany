import React from "react";
import Button from "../components/Button";
import man from "../assets/images/man.jpg";
import Video from "../components/Video";
import vid from "../assets/videos/video.mp4";
import AutoPlay from "../components/AutoPlay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assets/images/card1.jpg";
import b from "../assets/images/card2.jpg";
import c from "../assets/images/card3.jpg";
import thumbnail from "../assets/images/thumbnail.jpg";
import back from "../assets/images/back.png";
import back_2 from "../assets/images/back_2.png";
import back_3 from "../assets/images/back_3.png";
import equity from "../assets/logos/equity.png";
import dtb from "../assets/logos/dtb.png";
import hfb from "../assets/logos/hfb.jpg";
import shell from "../assets/logos/shell.png";
import stanbic from "../assets/logos/stanbic.jpg";
import { MdFlight } from "react-icons/md";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000, // 7 seconds for the transition animation
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000, // 7 seconds for the transition animation
    cssEase: "linear",
  };
  return (
    <div className="">
      {/* intro */}
      <section className="h-[100vh] mx-[10%]">
        <div className="flex justify-between py-[1%]">
          <div className="w-7/12">
            <h1 className="text-7xl font-medium text-black/80">
              Empowering <span className="text-blue-600">driving success</span>,
              Shaping the Future
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
              Book a Demo→
            </Button>
          </div>
          <div className="w-4/12 h-100 flex flex-col">
            <img
              src={man}
              className="rounded-full h-full object-cover object-center"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
      {/* video */}
      <section className=" h-full w-full px-[4%]">
        <Video
          thumbnail={thumbnail}
          className="w-full h-70vh object-cover"
          src={vid}
        />
      </section>
      {/* software */}
      <section className="">
        <div className="text-5xl text-center flex justify-center  font-medium text-black">
          <div className="w-7/12 py-[7%]">
            Innovation and collaboration drive{" "}
            <span className="border-b-2 border-blue-400">
              sustainable drive
            </span>
          </div>
        </div>
        {/* image 1 */}
        <div
          style={{
            backgroundImage: `url(${back})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" flex justify-center items-center text-white rounded-2xl mx-[4%] h-[100vh]"
        >
          <div id="words" className="">
            <div className=" flex pl-[9%]  flex-col gap-6">
              <h1 className="text-xl">Integrity</h1>
              <h1 className="text-3xl font-medium">
                Vision and integrity spark collaboration, innovation
              </h1>
              <p className="">
                Driving sustainable growth through innovation, collaboration,
                <br />
                vision, integrity, and leadership; empowering success by
                <br />
                fostering creativity, building value, promoting trust, and
                <br />
                shaping a future rooted in strategy and sustainability
              </p>
              <span>
                {" "}
                <Button
                  className={
                    "text-black text-sm bg-white rounded-3xl px-6 py-2 "
                  }
                >
                  Book a Demo{" "}
                </Button>
              </span>
            </div>
          </div>
          <div className="w-6/12 px-[10%] " id="func">
            <ul>
              <li className="bg-white text-center  my-2 text-black py-2">
                Home
              </li>
              <li className="bg-white text-center my-2 text-black py-2">
                About
              </li>
              <li className="bg-white text-center my-2 text-black py-2">
                Info
              </li>
            </ul>
          </div>
        </div>
        {/* image 2 */}
        <div
          style={{
            backgroundImage: `url(${back_2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" flex justify-center items-center text-white rounded-2xl m-[4%] h-[100vh]"
        >
          <div className="w-6/12 px-[10%] " id="func">
            <ul>
              <li className="bg-white text-center  my-2 text-black py-2">
                Home
              </li>
              <li className="bg-white text-center my-2 text-black py-2">
                About
              </li>
              <li className="bg-white text-center my-2 text-black py-2">
                Info
              </li>
            </ul>
          </div>
          <div id="words" className="">
            <div className=" flex pl-[9%]  flex-col gap-6">
              <h1 className="text-xl">Integrity</h1>
              <h1 className="text-3xl font-medium">
                Vision and integrity spark collaboration, innovation
              </h1>
              <p className="">
                Driving sustainable growth through innovation, collaboration,
                <br />
                vision, integrity, and leadership; empowering success by
                <br />
                fostering creativity, building value, promoting trust, and
                <br />
                shaping a future rooted in strategy and sustainability
              </p>
              <span>
                {" "}
                <Button
                  className={
                    "text-black text-sm bg-white rounded-3xl px-6 py-2 "
                  }
                >
                  Book a Demo{" "}
                </Button>
              </span>
            </div>
          </div>
        </div>
        {/* image 3 */}
        <div
          style={{
            backgroundImage: `url(${back_3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" flex justify-center items-center text-white rounded-2xl m-[4%] h-[100vh]"
        >
          <div id="words" className="">
            <div className=" flex pl-[9%]  flex-col gap-6">
              <h1 className="text-xl">Integrity</h1>
              <h1 className="text-3xl font-medium">
                Vision and integrity spark collaboration, innovation
              </h1>
              <p className="">
                Driving sustainable growth through innovation, collaboration,
                <br />
                vision, integrity, and leadership; empowering success by
                <br />
                fostering creativity, building value, promoting trust, and
                <br />
                shaping a future rooted in strategy and sustainability
              </p>
              <span>
                {" "}
                <Button
                  className={
                    "text-black text-sm bg-white rounded-3xl px-6 py-2 "
                  }
                >
                  Book a Demo{" "}
                </Button>
              </span>
            </div>
          </div>
          <div className="w-6/12 px-[10%] " id="func"></div>
        </div>
      </section>
      {/* trusted */}
      <section className="overflow-hidden">
        <div className="text-5xl text-center flex justify-center  font-medium text-black">
          <div className="w-7/12 py-[7%]">
            Trusted by more than 7,000 companies
          </div>
        </div>

        <div>
          <Slider {...settings2}>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
          </Slider>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
            <div className="flex justify-center  w-full ">
              <img className="" src={dtb} alt="" />
            </div>
          </Slider>
        </div>
      </section>
      {/* aboutUs */}
      <section className="bg-blue-100 py-[8%]">
        <div className="flex   justify-center items-center text-center">
          <span className="w-1/2">
            <h3 className="text-lg ">About Us</h3>
            <h1 className="text-5xl py-[4%] font-medium text-black">
              Strong leadership drives innovation, fostering growth
            </h1>
            <p>
              Strategic investment in innovation and efficiency drives momentum,
              creating opportunities for growth, profit, and success in a
              competitive market.
            </p>
            <Button
              className={
                "text-white my-[4%] text-sm bg-black rounded-3xl px-6 py-2 "
              }
            >
              More about Us
            </Button>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 px-[4%]">
          <div>
            <div className="h-[60vh]">
              <img
                src={a}
                className="h-full object-cover object-center rounded-3xl"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <p className="text-2xl font-medium py-4">$USD 3,000</p>
              <p className="font-medium text-lg">
                Success in business demands hard work, discipline, and courage
              </p>
            </div>
          </div>
          <div>
            <div className="h-[60vh]">
              <img
                src={b}
                className="h-full object-cover object-center rounded-3xl"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <p className="text-2xl font-medium py-4">$USD 3,000</p>
              <p className="font-medium text-lg">
                Success in business demands hard work, discipline, and courage
              </p>
            </div>
          </div>
          <div>
            <div className="h-[60vh]">
              <img
                src={c}
                className="h-full object-cover object-center rounded-3xl"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <p className="text-2xl font-medium py-4">$USD 3,000</p>
              <p className="font-medium text-lg">
                Success in business demands hard work, discipline, and courage
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
