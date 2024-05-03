// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Laptop from "../assets/laptop.jpg";
import { ReactTyped } from "react-typed";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2 sm:text-4xl text-xl">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data...
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, flexible financing for
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            <a href= "/">Get Started </a>
          </button>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify Me
              </button>
            </div>
            <p>
              We care bout the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">
                {" "}
                <u> Privacy Policy.</u>
              </span>
            </p>
          </div>
        </div>
      </div>
      );
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$99</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">250 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 1 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">2 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Multiple User
            </h2>
            <p className="text-center text-4xl font-bold">$249</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">800 GB Storage</p>
              <p className="py-2 border-b mx-8">5 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 5 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
