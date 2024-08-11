import React from "react";
import Image1 from '../../images/ei.jpg';

const Project = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <h1 className="text-4xl font-bold pl-2 border-l-4 border-primary" data-aos="fade-up"
          data-aos-delay="300">
          Project
        </h1>
        <div className="grid md:grid-cols-3 mt-10 gap-6">

          {/* project 1 */}
          <div className="col-span-1 p-5 bg-gray-50 outline outline-gray-400 rounded-xl" data-aos="fade-up"
          data-aos-delay="300">
            <img
              src={Image1}
              className="rounded-xl w-full mx-auto"
            />
            <h1 className="text-2xl font-bold text-center py-4">Raiden Ei Web</h1>
            <div className="flex justify-evenly">
              <a
                href="https://github.com/wayantch/raiden_ei_web.git" target="_blank"
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Github
              </a>
              <a
                href="https://raiden-ei.netlify.app/" target="_blank"
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View
              </a>
            </div>
          </div>
          {/* project 1 */}

          {/* project 1 */}
          <div className="col-span-1 p-5 bg-gray-50 outline outline-gray-400 rounded-xl " data-aos="fade-up"
          data-aos-delay="300">
            <img
              src={Image1}
              className="rounded-xl w-full mx-auto"
            />
            <h1 className="text-2xl font-bold text-center py-4">Project Two</h1>
            <div className="flex justify-evenly">
              <a
                href=""
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Github
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View
              </a>
            </div>
          </div>
          {/* project 1 */}

          {/* project 1 */}
          <div className="col-span-1 p-5 bg-gray-50 outline outline-gray-400 rounded-xl " data-aos="fade-up"
          data-aos-delay="300">
            <img
              src={Image1}
              className="rounded-xl w-full mx-auto"
            />
            <h1 className="text-2xl font-bold text-center py-4">Project Three</h1>
            <div className="flex justify-evenly">
              <a
                href=""
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Github
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full outline  outline-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View
              </a>
            </div>
          </div>
          {/* project 1 */}
        </div>
      </div>
    </div>
  );
};

export default Project;
