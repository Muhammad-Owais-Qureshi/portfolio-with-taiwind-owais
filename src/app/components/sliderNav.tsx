import Link from "next/link"

const SliderNav = () => {
  return (
    <div>
        <div>
        <nav className="bg-orange-400 font-medium text-white">
            <ul className="pl-6 leading-8">
                <Link className="sm:hidden" href={"/"}><li>Home</li></Link>
                <Link className="sm:hidden" href={"about"}><li>About</li></Link>
                <Link className="sm:hidden"  href={"contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default SliderNav