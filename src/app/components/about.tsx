import Image from "next/image"
import Link from "next/link"

const Aboutcom = () => {
  return (
    <div>
      <div>
      <div className="sm:flex sm:flex-row flex flex-col-reverse mt-4 mx-4 bg-orange-100 rounded-xl shadow-xl">
        <p className="sm:w-1/2 w-[450px] px-5 leading-7 p-10 text-xl">
          Hi, I am a 30-year-old frontend developer with a passion for crafting
          visually appealing and highly functional user interfaces. Despite my
          education being at the matric level, I have honed my skills in web
          development and have a deep understanding of modern web technologies,
          especially frontend frameworks like Tailwind CSS and Next.js. I love
          solving problems and am always eager to learn more in the
          fast-evolving world of web development.
        </p>
        <div className="mt-4 mr-28 flex justify-center sm:ml-28">
            <Image className="w-64 h-72"
            src={"/images/owais2.png"}
            alt="owais"
            width={280}
            height={280}
            />
        </div>
        
      </div>
      <div className="mx-5">
      <Link href={"/contact"}><button className="bg-orange-400 text-white mt-4 mb-3 px-4 py-2 rounded-lg font-semibold hover:bg-orange-300 shadow-2xl">Contact</button></Link>
      </div>
    </div>
    
    </div>
  )
}

export default Aboutcom