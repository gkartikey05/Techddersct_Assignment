import "./App.css";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="">
      <div className="nav-bar flex justify-center border shadow-md border-gray-200">
        <div className="w-5/12"></div>
        <div className="w-4/12 py-1 border-x border-gray-200">
          <ul className="flex items-center justify-evenly around text-right h-7">
            <li>
              <a title="Home" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/home.png"
                  alt="home icon"
                />
              </a>
            </li>
            <li>
              <a title="" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/clock.png"
                  alt="clock icon"
                />
              </a>
            </li>
            <li>
              <a title="Screen Reader Access" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/screen-reader.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a title="Sitemap" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/sitemap.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a title="PwD Features" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/pwd-icon.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a title="हिन्दी संस्करण हेतु यहां क्लिक करें" href="#">
                <img
                  className="h-6 hover:opacity-30"
                  src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/language.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a title="Search" href="#">
                <FaSearch className="hover:opacity-30" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className="flex justify-around items-center">
        <div className="w-1/12 p-4 bg-linear-to-r from-[#852d69] to-[#4e256c] ">
          <img
            className="h-20"
            src="https://demo2.techsseract.com/snakebite/webassets/images/newImages/images/foot-logo.png"
            alt=""
          />
        </div>
        <div className="w-10/12 py-4 px-7">
          <h1 className="text-[#302258] font-bold text-3xl">
            UTTAR PRADESH SNAKEBITE MITIGATION
          </h1>
          <p className="font-bold text-gray-800">
            Office of Relief Commissioner, Govt Of Uttar Pradesh
          </p>
        </div>
        <div className="w-1/12 p-4 justify-items-end">
          <a href="/">
            <img
              className="h-20"
              src="https://demo2.techsseract.com/snakebite/webassets/images/logo/rahatLogo.png"
              alt=""
            />
          </a>
        </div>
      </header>

      <section className="hero-section relative">
        <div className="absolute top-0 right-0 text-white text-xs">
          <ul className="flex justify-center items-center bg-[#53266b] font-medium gap-2 py-1 pl-10 pr-5 rounded-s-full">
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              HOME
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              ABOUT
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              DO'S & DON'TS
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              SUPPORT
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              OUR WORK
            </li>
            <li className="cursor-pointer hover:bg-white hover:text-[#53266b] rounded-t-xl duration-500 ease-in-out hover:shadow-xl hover:shadow-white-500/50 px-3 py-2 z-10">
              REGISTER AS TRAINEE
            </li>
          </ul>
        </div>
        
        <video autoPlay muted loop className="w-full h-screen object-cover">
          <source
            src="https://demo2.techsseract.com/snakebite/webassets/videos/snakebite_video.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className="text-white absolute bottom-50 left-15">
          <h2 className="text-5xl font-semibold">UP SNAKEBITE MITIGATION</h2>
          <p className="w-4/12 text-justify font-medium text-sm mt-2">
            Snakebite remains a significant concern in the state of Uttar
            Pradesh, particularly in theregions surrounded by fields, jungles
            and forests combined with poor health carefacilities. Recognizing
            the urgency of addressing this issue
          </p>
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default App;
