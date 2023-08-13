const Services = () => {
  return (
    <section className={`mt-[20px] mx-[30px] lg:mt-[86px] lg:mx-[76px]`}>
      <div>
        <h2
          className={`font-clashbold font-semibold text-white text-[25px] leading-[30.75px] lg:text-[60px] lg:leading-[73.8px]`}
        >
          Services
        </h2>
        <p
          className={`text-[#FFFFFF99] font-medium text-[15px] leading-[22.5px]  lg:text-[18px] lg:leading-[27px]`}
        >
          This are some of the services I render
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col mt-[56px] gap-2 lg:mt-[56px] lg:flex lg:flex-wrap lg:flex-shrink-0 lg:justify-center lg:flex-row lg:gap-[24px]">
        <div
          className={`flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:flex lg:flex-col lg:gap-[0px]`}
        >
          <div
            className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
          >
            <h4
              className={`font-semibold text-white font-clashbold text-[20px] leading-[24.6px] max-w-[156px] lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              WEB DEVELOPMENT
            </h4>
            <p
              className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              I create beautiful interfaces with HTML, CSS TailwindCss,
              Bootstrap, JavaScript, ReactJs, NextJs & Typescript.
            </p>
          </div>
          <div className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pt-0.5">
            <div
              className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]`}
            >
              <h4
                className={`font-semibold uppercase text-white text-[20px] leading-[24.6px] font-clashbold max-w-[156px] lg:max-w-[400px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Responsive Design
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Building websites and applications that work seamlessly on
                various deviced and screen sizes, from desktop to smartphones.
              </p>
            </div>
          </div>
          <div
            className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
          >
            <h4
              className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              Integration with APIs
            </h4>
            <p
              className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              Integrating frontend interfaces with backend services and APIs to
              fetch and display data in real time.
            </p>
          </div>
          <div
            className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
          >
            <h4
              className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              Web Accessibility
            </h4>
            <p
              className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              Ensuring that websites and applications are accessible to users
              with disabilities by implementing features like proper HTML
              structure and ARIA roles.
            </p>
          </div>
        </div>
        {/* second card */}
        <div
          className={`flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-around md:gap-4 lg:mt-[148px] lg:flex lg:flex-col lg:gap-[24px]`}
        >
          <div className="bg-gradient-to-l max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
            <div
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                VERVISON CONTROL
              </h4>
              <p
                className={`font-normal lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Using version control systems like Git to collaborate with other
                developers and manage code changes effectively.
              </p>
            </div>
          </div>
          <div
            className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]`}
          >
            <h4
              className={`font-semibold uppercase text-white font-clashbold lg:max-w-[400px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              UI Design
            </h4>
            <p
              className={`font-normal lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              Designing the visual elements of the user interface, including
              layout, typography, color schemes, icons, and other graphical
              elements.
            </p>
          </div>
          <div
            className={`bg-[#0A1C20] text-[#FFFFFF99] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
          >
            <h4
              className={`font-semibold uppercase text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              Continuous Learning
            </h4>
            <p
              className={`font-normal lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              Staying updated with the latest frontend technologies, trends, and
              best practices to deliver modern and innovative solutions.
            </p>
          </div>
          <div
            className={`bg-[#0A1C20] text-[#FFFFFF99] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
          >
            <h4
              className={`font-semibold uppercase text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
            >
              Continuous Learning
            </h4>
            <p
              className={`font-normal lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
            >
              Staying updated with the latest frontend technologies, trends, and
              best practices to deliver modern and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;