import { GiHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillLayout } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import Lottie from "lottie-react";
import task from "../../../public/task.json"

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
            <div className="flex justify-center mb-3">
            <div className="w-72">
            <Lottie animationData={task} loop={true} />
            </div>
            </div>
        <div>
          <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-2">
          Elevate, Empower, Achieve, Simplify.{" "}
            <RiCalendarTodoLine className="text-teal-500 text-2xl"></RiCalendarTodoLine>
          </h1>
          <h1 className="text-4xl text-gray-700 font-bold text-center mb-2">
          Empower Your Productivity: Elevate Your <br /> Workflow with Our Intuitive Task Management <span className="text-teal-500">Platform!</span>
          </h1>

          <p className="text-center text-gray-500">
          Unleash productivity with our intuitive platform. Elevate your workflow effortlessly, efficiently managing tasks. Empower your journey <br /> toward success with streamlined organization and enhanced productivity at your fingertips.
          </p>
        </div>

        <div className="py-10 w-full">
        <div className="flex gap-5 justify-center items-center border p-6 rounded-md max-w-6xl mx-auto">
            
        <Link to={"/login"} className="flex items-center">
                <button className="flex items-center relative w-36 bg-teal-500 text-white p-2 rounded-lg group"><span>Get Start</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                </Link>
            
        <Link to={"/login"} className="flex items-center">
                <button className="flex items-center relative w-36 border-2 border-teal-500 text-teal-500 p-2 rounded-lg group"><span>Sign Up</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
