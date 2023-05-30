import React from "react";
import bg6 from "../images/bg6.jpg";
import { images } from "../images/images";
import {
  faMobileScreenButton,
  faLocationDot,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Support = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" relative w-full h-[360px] mb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/90 opacity-50"></div>
        <img
          src={bg6}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay object-fixed"
        />
        <div className="absolute top-1/3 z-10 mx-auto w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-lg mb-4">Get in Touch with Us</h1>
          <h1 className="text-white text-5xl mb-4">CONTACT US</h1>
          <div className="flex items-center mb-4">
            <div className="m-2">
              <div className="w-[70px] h-[3px] bg-green-300 rounded-5"></div>
            </div>
            <div className="w-[10px] h-[10px] bg-green-300 rounded-full"></div>
            <div className="m-2">
              <div className="w-[70px] h-[3px] bg-green-300 rounded-5"></div>
            </div>
          </div>
          <p className="w-1/2 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            odit ratione delectus eum voluptates sint laudantium, reprehenderit
            blanditiis earum aspernatur, distinctio fugiat velit maxime
            eligendi?
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col h-[20vh] justify-center items-center mt-12 mb-24">
        <div className="flex flex-row justify-center items-center w-[70vw] h-[80vh]">
          <div class="bg-white w-80 h-32 p-2 my-10 mx-3">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faMobileScreenButton} size="xl" />
            </span>
            <h2 class="text-lg font-semibold mb-2">Phone No.</h2>
            <p class="text-gray-700 text-base">
              <p>+91 98765 43210/</p>
              <p>+91 65774 89324</p>
            </p>
          </div>
          <div class="bg-white w-80 h-32 p-2 my-10 mx-3">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
            </span>
            <h2 class="text-lg font-semibold mb-2">Address</h2>
            <p class="text-gray-700 text-base">
              123, ABC Street, Cityville, West Bengal, Pin Code: 123456 India
            </p>
          </div>
          <div class="bg-white w-80 h-32 p-2 my-10 mx-3">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </span>
            <h2 class="text-lg font-semibold mb-2">E-mail</h2>
            <p class="text-gray-700 text-base">
              <p>john.doe1234@example.com/</p>
              <p>emily.smith5678@gmail.com</p>
            </p>
          </div>
          <div class="bg-white w-80 h-32 p-2 my-10 mx-3">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faClock} size="xl" />
            </span>
            <h2 class="text-lg font-semibold mb-2">Opening Hours</h2>
            <p class="text-gray-700 text-base">
              Monday-Friday(9:00 AM to 8:00 PM)
            </p>
          </div>
        </div>
      </div>
      <div className="h-[0.1vh] bg-gray-400 w-[75vw]"></div>
      <div className="w-full flex flex-col h-[50vh] justify-center items-center mt-12 mb-24">
        <div className="flex flex-row justify-center items-center w-[60vw]">
          <div className="w-1/2">
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                className="border-2 rounded-md w-[25vw] h-[6vh] my-2"
                name=""
                id=""
                placeholder="Your Full Name"
              />
              <input
                type="email"
                className="border-2 rounded-md w-[25vw] h-[6vh] my-2"
                name=""
                id=""
                placeholder="Your Email"
              />
              <input
                type="number"
                className="border-2 rounded-md w-[25vw] h-[6vh] my-2"
                name=""
                id=""
                placeholder="Your Phone"
              />
              <textarea
                className="border-2 rounded-md w-[25vw] my-2"
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-green-300 rounded-md border-2 w-[25vw] p-2"
              >
                Submit Your Message Here
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <img src={images.contact_us} alt="" className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
