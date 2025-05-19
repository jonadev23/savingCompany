import React, { useState } from "react";
import Button from "../components/Button";
import Video from "../components/Video";
import vid from "../assets/videos/video.mp4";
import animationData from "../assets/lotties/heart.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationArrow1, CiMedal } from "react-icons/ci";
import c from "../assets/images/card3.jpg";
import thumbnail from "../assets/images/thumbnail.jpg";
import woman from "../assets/images/woman.jpg";
import person from "../assets/images/person.jpg";
import phone from "../assets/images/phone.png";
import phone2 from "../assets/images/phone2.png";
import airtel from "../assets/images/airtel.jpg";
import phone3 from "../assets/images/phone3.png";
import mtn from "../assets/images/mtn.jpg";
import { motion } from "framer-motion";
import { MdFlight } from "react-icons/md";
import { Parallax } from "react-scroll-parallax";
import { FaPlay, FaWhatsapp } from "react-icons/fa";
import InvestmentSimulator from "./Charts";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoAnalytics, IoPhonePortraitOutline } from "react-icons/io5";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000, // 7 seconds for the transition animation
    cssEase: "linear",
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 7000, // 7 seconds for the transition animation
    cssEase: "linear",
  };

  // var settings3 = {
  //   afterChange: (current) => setActiveSlide(current),
  //   autoplay: true,
  //   autoplaySpeed: 7000,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  // };

  const features = [
    {
      icon: <CiLocationArrow1 />,
      title: "Strategic Guidance",
      text: "Expert market analysis and investment roadmapping",
    },
    {
      icon: <IoAnalytics />,
      title: "Performance Analytics",
      text: "Real-time portfolio tracking and predictive modeling",
    },
    {
      icon: <CiMedal />,
      title: "Accredited Expertise",
      text: "Certified professionals with proven track records",
    },
    {
      icon: <IoPhonePortraitOutline />,
      title: "Mobile Management",
      text: "Full account control through our secure mobile platform",
    },
  ];

  const settings3 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const texts = [
    {
      title: "Make a plan today",
      description: "The secret of getting ahead is getting started",
    },
    {
      title: "Save now to invest",
      description: "Don’t be pushed by your problems",
    },
    {
      title: "Make money tomorrow",
      description: "Be led by your dreams.",
    },
  ];
  return (
    <div className="bg-[#fffefe]" style={{ fontFamily: "Cabin, sans-serif" }}>
      {/* intro */}

      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Success comes
                </span>
                <br />
                to those who act.
              </h1>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Empowering innovation, driving success, and shaping the future
                through
                <span className="font-semibold text-blue-900">
                  {" "}
                  strategic solutions
                </span>
                , sustainable practices, and client-focused excellence.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg 
                         text-lg font-semibold transition-all transform hover:scale-105
                         shadow-lg hover:shadow-xl"
                >
                  Schedule Consultation
                </Button>

                <div className="border-l-2 border-blue-200 pl-4">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                    Trusted by leading platforms
                  </p>
                  <div className="flex gap-6 items-center">
                    <img
                      src={mtn}
                      className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      alt="MTN"
                    />
                    <img
                      src={airtel}
                      className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      alt="Airtel"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div
              className="relative group rounded-3xl overflow-hidden shadow-2xl 
                         border-4 border-white transform hover:shadow-3xl transition-shadow
                         before:absolute before:inset-0 before:bg-gradient-to-br 
                         before:from-blue-900/20 before:to-red-600/10"
            >
              <Video
                thumbnail={thumbnail}
                className="w-full h-[500px] object-cover"
                src={vid}
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </section>
      {/* video */}
      <section className="bg-[#0A0A2F] min-h-screen w-full px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left: Slider */}
        <motion.div
          initial={{ x: -100, opacity: 0, skewY: 0 }}
          animate={{ x: 0, opacity: 1, skewY: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-6/12 w-full flex justify-center items-center mb-10 lg:mb-0"
        >
          <div className="lg:w-10/12 w-full flex justify-center items-center mb-10 lg:mb-0">
            <Slider {...settings3} className="w-full max-w-xs md:max-w-sm">
              <div className="px-4">
                <img
                  src={phone}
                  alt="Phone preview"
                  className="w-full h-auto rounded-xl   shadow-xl"
                />
              </div>
              <div className="px-4">
                <img
                  src={phone2}
                  alt="Phone UI"
                  className="w-full h-auto rounded-xl  shadow-xl"
                />
              </div>
              <div className="px-4">
                <img
                  src={phone}
                  alt="App screen"
                  className="w-full h-auto rounded-xl  shadow-xl"
                />
              </div>
            </Slider>
          </div>
        </motion.div>

        {/* Right: Steps */}
        <motion.div
          initial={{ x: 100, opacity: 0, skewY: 0 }}
          animate={{ x: 0, opacity: 1, skewY: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-6/12 w-full flex flex-col justify-center gap-6 px-2 md:px-6"
        >
          {texts.map((text, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 transition duration-500 ${
                activeSlide === index ? "opacity-100" : "opacity-60"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  activeSlide === index
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                {index + 1}
              </div>
              <div>
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    activeSlide === index ? "text-white" : "text-white/70"
                  }`}
                >
                  {text.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 mt-1">
                  {text.description}
                </p>
              </div>
            </div>
          ))}

          <div>
            <button className="mt-6 uppercase text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow-md transition">
              Get Started
            </button>
          </div>
        </motion.div>
      </section>

      {/* software */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Planning Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div className="space-y-6 pl-0 lg:pl-12">
              <h3 className="text-lg uppercase tracking-widest text-blue-600 font-medium">
                Strategic Planning
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  How We Help You
                </span>
                <br />
                Achieve Financial Goals
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Driving sustainable growth through innovative strategies,
                collaborative partnerships, and visionary leadership. We empower
                success through:
              </p>
            </div>

            {/* Video CTA */}
            <div className="group flex items-center gap-4 cursor-pointer hover:text-red-600 transition-colors">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <FaPlay className="text-xl ml-1" />
              </div>
              <span className="text-lg font-semibold text-blue-900 group-hover:text-red-600">
                Watch Our Process
              </span>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-2">
            <Button
              className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-l-full
                 hover:bg-red-700 transition-colors font-semibold text-sm uppercase"
            >
              <span>Individual Plans</span>
              <div className="w-7 h-7 rounded-full bg-white text-red-600 flex items-center justify-center">
                5
              </div>
            </Button>

            <Button
              className="flex items-center gap-3 px-6 py-3 bg-white text-blue-900 border-2 border-blue-200
                 hover:border-blue-300 rounded-r-full transition-all font-semibold text-sm uppercase
                 hover:shadow-sm"
            >
              <span>Institutional Solutions</span>
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                8
              </div>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        </div>
      </section>
      {/* trusted */}

      <section className="relative bg-[#01013F] overflow-hidden min-h-screen py-16 px-6">
        {/* Top skew overlay */}
        <div className="absolute top-0 left-0 w-full h-24 bg-[#01013F] transform -skew-y-[3deg] origin-top z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto">
          <Slider {...settings2}>
            {[person, woman, person, woman].map((img, i) => (
              <div key={i} className="px-4">
                <div className="relative group mx-auto w-[18rem] md:w-[22rem] h-[28rem] bg-white rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={img}
                    alt="person"
                    className="h-[70%] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-[11rem] right-4 bg-blue-600 hover:bg-red-600 text-white p-4 w-[14rem] md:w-[15rem] z-10 transition-colors duration-300 rounded-md shadow-md">
                    <h1 className="text-lg font-semibold tracking-wide">
                      Our Future
                    </h1>
                    <p className="text-sm py-3 leading-snug">
                      We are trying to start a new revolution.
                    </p>
                    <Button className="bg-white text-blue-600 hover:text-red-600 font-semibold text-xs px-3 py-1 uppercase rounded-full transition-all">
                      Start &gt;
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* aboutUs */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-900 via-blue-950 to-black">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12 xl:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12 relative z-10"
          >
            <div className="space-y-8">
              <motion.blockquote
                className="text-3xl lg:text-4xl font-light leading-snug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  "Strategic innovation
                </span>
                <span className="text-gray-200">
                  {" "}
                  drives market momentum, creating
                </span>
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  exponential opportunities
                </span>
                <span className="text-gray-200">
                  {" "}
                  for growth and sustainable success."
                </span>
              </motion.blockquote>

              <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-105">
                Explore Our Strategy
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all group"
                >
                  <div className="text-blue-400 text-4xl mb-4 group-hover:text-red-400 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full md:w-auto bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.02]">
                Begin Your Journey
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative z-10"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden border-4 border-white/10 hover:border-blue-400/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-red-600/20" />
              <img
                src={c}
                alt="Strategic planning"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h4 className="text-white text-xl font-semibold mb-2">
                  Market Insights 2023
                </h4>
                <p className="text-gray-300 text-sm">
                  Latest trends in global investment opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-r from-red-600/10 to-blue-600/10 rounded-full blur-3xl" />
      </section>
      {/* calculator */}
      <section>
        {/* image 1 */}
        <div className=" flex justify-center items-end  rounded-2xl m-[4%] ">
          <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              {/* Planning Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                <div className="space-y-6 pl-0 lg:pl-12">
                  <h3 className="text-lg uppercase tracking-widest text-blue-600 font-medium">
                    Strategic Planning
                  </h3>
                  <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                      How We Help You
                    </span>
                    <br />
                    Achieve Financial Goals
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Driving sustainable growth through innovative strategies,
                    collaborative partnerships, and visionary leadership. We
                    empower success through:
                  </p>
                </div>

                {/* Video CTA */}
                <div className="group flex items-center gap-4 cursor-pointer hover:text-red-600 transition-colors">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                    <FaPlay className="text-xl ml-1" />
                  </div>
                  <span className="text-lg font-semibold text-blue-900 group-hover:text-red-600">
                    Watch Our Process
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </section>
        </div>
        <div>
          <InvestmentSimulator />
        </div>
      </section>

      {/* advisor */}
      <section className="bg-[#0D1016] my-[4%] text-white py-20 px-6">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          {/* Text Block */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-semibold leading-tight">
              <span className="text-blue-600">Speak to an </span>advisor about
              your goals.
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Driving sustainable growth through innovation, collaboration,
              <br className="hidden md:block" />
              vision, integrity, and leadership; empowering success.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex items-center gap-3 text-blue-400 cursor-pointer text-lg">
            <FaPlay className="text-xl" />
            <span className="hover:underline">How Zeno Works</span>
          </div>
        </div>

        {/* Slider Section */}
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="px-4">
                <div className="border border-teal-400 rounded-md p-8 bg-[#11141A] h-full shadow-md">
                  <div className="text-3xl text-teal-400 mb-4">
                    <FaWhatsapp />
                  </div>
                  <h2 className="text-xl font-semibold text-teal-500 mb-4">
                    How do we achieve our goals through this product
                  </h2>
                  <p className="text-sm text-gray-300 mb-6">
                    Access the professional guidance from our advisors.
                  </p>
                  <Link
                    className="text-teal-500 text-xs font-bold uppercase hover:underline"
                    href="#"
                  >
                    More+
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
