import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "../assets/Icons";
import heroImg from "../assets/images/herol.png";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="mx-auto px-[30px] pt-[46px] md:px-[20px] lg:pt-[51px] lg:px-[40px] ">
        <div className="flex flex-col items-center flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:space-x-12 lg:justify-between">
          <div>
            <div className={``}>
              <h1
                className={`font-clashbold font-semibold text-[30px] leading-[36.9px] text-[#CFFAFF] md:leading-[4 5px] md:text-[35px] md:max-w-max lg:leading-[73.8px] lg:max-w-[580px] lg:text-[60px] `}
              >
                Creative Frontend Developer<span>.</span>
              </h1>
            </div>
            <p
              className={`font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]`}
            >
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[10px] md:text-[15px] lg:text-[15px] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-center lg:gap-[10px]"
            >
              <p className={`max-w-[310px]`}>
                1+ Years of experience. Specialized in building products, while
                ensuring a seamless web experience for clients across africa.
              </p>
              <p className={`max-w-[319px]`}>
                Highly skilled at progressive enhancement, design systems & UI Engineering.
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-center md:justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://web.facebook.com/victortoluu"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <FbIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://twitter.com/HeyVickyJay"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vickyjayox"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/victor-olatunji-889568246"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
             
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative w-max flex flex-col justify-center">
             <motion.div whileHover={{}}>
                <img
                  src={hero}
                  alt="hero image is here"
                 className="absolute w-full h-full md:bottom-5 md:right-6 lg:bottom-10 lg:right-12"
                  draggable={false}
                />
              </motion.div>
              <div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] lg:min-h-[400px] border-[3px] border-[#1ED760]`}
              ></div>
            </div>
          </div>
          {/* <div className="flex flex-col items-center mt-[60px] md:mt-0">
            <div className="relative">
              <motion.div whileHover={{}}>
                <img
                  src={hero}
                  alt="hero image is here"
                  className="w-[330px] h-[330px] mg:w-3/4 lg:w-[512px] lg:h-[512px] absolute bottom-[32px] -left-[36px] md:bottom-[52px] md:right-[56px] object-cover"
                  draggable={false}
                />
              </motion.div>
              <div
                className={`max-w-[330px] min-h-[330px] md:w-[200px] lg:min-w-[512px] lg:min-h-[512px] border-[#1ED760] border-[3px] border-solid`}
              ></div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;