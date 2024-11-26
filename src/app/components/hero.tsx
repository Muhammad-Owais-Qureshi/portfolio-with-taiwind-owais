import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="sm:flex sm:justify-around sm:flex-row mt-5 px-5 flex flex-col-reverse">
        <div className="md:w-1/2 leading-6 w-96 ml-2 mt-4">
          <h1 className="">
            Hello my name is
            <span className="text-orange-400 font-semibold text-2xl px-2">
               Owais Qureshi
            </span>
            .
          </h1>
          <h3 className="text-xl">And I am a Frontend developer</h3>
          <p className="text-xl">
            I am a web Designer with extensive experience for over 1 year
            experties is to create and webside design, Frontend design, and many
            more...
          </p>

          <div className="flex justify-around mt-4 w-40 text-3xl">
            <a href="https://www.facebook.com/OwaisQureshi" target="_blank">
              <FaFacebook className="hover:text-blue-700" />
            </a>

            <a href="https://www.linkedin.com/OwaisQureshi" target="_blank">
              <FaLinkedin className="hover:text-blue-900" />
            </a>

            <a href="https://www.whatsapp.com/03152384339" target="_blank">
              <RiWhatsappFill className="hover:text-green-500" />
            </a>

            <a href="https://www.youtube.com/codewithharry" target="_blank">
              <FaYoutube className="hover:text-red-500" />
            </a>
          </div>

          <Link href={"/about"}>
            <button className="bg-orange-400 text-white mt-4 px-4 py-2 rounded-lg font-semibold hover:bg-orange-300 mb-2">Explore</button>
          </Link>
        </div>

        <div className="mt-4 flex justify-center bg-clip-border rounded-md bg-gradient-to-r from-orange-400 to-white text-transparent">
          <Image
            className=" w-60 shadow-xl"
            src={"/images/owais2.png"}
            alt="owais"
            width={280}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
