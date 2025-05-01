import { useState } from "react";

import "./App.css";
import { FaSearch } from "react-icons/fa";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);
  const fullText = `
    Snakebite envenomation is a critical but often neglected public health emergency, 
    disproportionately affecting low-resource communities. Globally, snakebites claim the lives 
    of an estimated 81,000 to 138,000 people each year, while 400,000 survivors suffer from permanent 
    disabilities, disfigurement, or psychological trauma. Each year, 4.5 to 5.4 million people are 
    bitten by snakes, and 1.8 to 2.7 million develop clinical illness. South Asia bears the highest burden, 
    with India alone accounting for nearly 50% of global snakebite-related deaths. This grave situation 
    stems from the wide diversity of venomous snakes, coupled with environmental and occupational exposure—particularly 
    in rural, agrarian settings where access to timely medical care is limited.`;

  const previewText = fullText.slice(0, 360) + "...";

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

      {/* Header */}
      <header className="flex justify-around items-center">
        <div className="main-logo w-1/12 p-4 bg-linear-to-r from-[#852d69] to-[#4e256c] ">
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

      {/* Hero Section */}
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

        <div className="text-white absolute bottom-45 left-15">
          <h2 className="text-5xl font-semibold">UP SNAKEBITE MITIGATION</h2>
          <p className="w-4/12 text-justify font-medium text-sm mt-2">
            Snakebite remains a significant concern in the state of Uttar
            Pradesh, particularly in theregions surrounded by fields, jungles
            and forests combined with poor health carefacilities. Recognizing
            the urgency of addressing this issue
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="snakebite-crisis-section"
        className="bg-[#f5f5dc] py-10 flex justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <h2 className="text-center text-[#1e3262] border-b-4 border-[#af1e2c] font-bold text-[26px] mb-10">
              UTTAR PRADESH AT THE HEART OF INDIA
            </h2>
          </div>

          <div className="flex justify-center gap-5">
            {/* Left Side Content*/}
            <div className="w-[40%]">
              <div className="crisis-card">
                <div className="relative bg-white h-[450px] rounded-2xl shadow p-6">
                  <div className="text-center">
                    <img
                      src="https://demo2.techsseract.com/snakebite/webassets/images/logo/rahatLogo.png"
                      alt="Yogi Adityanath"
                      className="rounded-full shadow-xl mx-auto"
                      width="120"
                    />
                    <h4 className="text-[20px] font-bold mt-4 text-gray-700">
                      UNDERSTANDING THE SNAKEBITE CRISIS
                    </h4>
                    <h6 className="text-lg font-bold tracking-tight text-gray-700">
                      A Global to Local Perspective
                    </h6>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {isExpanded ? fullText : previewText}
                  </p>
                  <div className="text-right">
                    <button
                      id="readMoreBtn"
                      onClick={handleToggle}
                      className="mt-4 px-4 py-2 text-blue-500 font-bold text-sm inline-block"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="w-[60%] mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Card 1 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(253, 160, 0), rgb(231, 86, 14))",
                        }}
                      >
                        <i className="fa fa-image text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">Posters</h5>
                      <h6 className="mt-2 text-gray-700">23767 +</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-orange-700 text-white rounded shadow">
                      <h6 className="font-bold">Types of Posters:</h6>
                      <p className="text-sm text-center">
                        1. Awareness Posters at Ration Shops
                      </p>
                      <p className="text-sm text-center">
                        2. Treatment Protocol Posters
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(0, 253, 42), rgb(37, 163, 12))",
                        }}
                      >
                        <i className="fa fa-book text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">
                        Information booklets
                      </h5>
                      <h6 className="mt-2 text-gray-700">100397+</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-green-700 text-white rounded shadow h-96">
                      <h6 className="font-bold">Information booklets</h6>
                      <p className="text-sm text-justify">
                        Information booklets provide concise guidance on
                        snakebite prevention and care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(0, 253, 42), rgb(37, 163, 12))",
                        }}
                      >
                        <i className="fa fa-book text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">
                        Information booklets
                      </h5>
                      <h6 className="mt-2 text-gray-700">100397+</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-blue-700 text-white rounded shadow h-96">
                      <h6 className="font-bold">Information booklets</h6>
                      <p className="text-sm text-justify">
                        Information booklets provide concise guidance on
                        snakebite prevention and care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(0, 253, 42), rgb(37, 163, 12))",
                        }}
                      >
                        <i className="fa fa-book text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">
                        Information booklets
                      </h5>
                      <h6 className="mt-2 text-gray-700">100397+</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-gray-700 text-white rounded shadow h-96">
                      <h6 className="font-bold">Information booklets</h6>
                      <p className="text-sm text-justify">
                        Information booklets provide concise guidance on
                        snakebite prevention and care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(0, 253, 42), rgb(37, 163, 12))",
                        }}
                      >
                        <i className="fa fa-book text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">
                        Information booklets
                      </h5>
                      <h6 className="mt-2 text-gray-700">100397+</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-amber-900 text-white rounded shadow h-96">
                      <h6 className="font-bold">Information booklets</h6>
                      <p className="text-sm text-justify">
                        Information booklets provide concise guidance on
                        snakebite prevention and care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="h-96 w-full sm:w-[48%] md:w-[30%] flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col justify-center items-center p-4 bg-white rounded shadow">
                      <span
                        className="p-4 rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(0, 253, 42), rgb(37, 163, 12))",
                        }}
                      >
                        <i className="fa fa-book text-2xl"></i>
                      </span>
                      <h5 className="mt-3 font-bold text-gray-800">
                        Information booklets
                      </h5>
                      <h6 className="mt-2 text-gray-700">100397+</h6>
                    </div>
                    <div className="flip-card-back flex flex-col justify-center items-center p-4 bg-purple-700 text-white rounded shadow h-96">
                      <h6 className="font-bold">Information booklets</h6>
                      <p className="text-sm text-justify">
                        Information booklets provide concise guidance on
                        snakebite prevention and care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
