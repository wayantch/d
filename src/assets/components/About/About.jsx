import React from "react";
import Image from "../../images/diri.jpg";
import "boxicons/css/boxicons.min.css";

const About = () => {
  const skills = [
    { name: "HTML", icon: "bxl-html5", color: "hover:text-[#E34F26]" },
    { name: "CSS", icon: "bxl-css3", color: "hover:text-[#1572B6]" },
    { name: "Tailwind CSS", icon: "bxl-tailwind-css", color: "hover:text-[#38B2AC]" },
    { name: "Bootstrap", icon: "bxl-bootstrap", color: "hover:text-[#7952B3]" },
    { name: "Figma", icon: "bxl-figma", color: "hover:text-[#F24E1E]" },
    { name: "PHP", icon: "bxl-php", color: "hover:text-[#777BB4]" },
    { name: "React", icon: "bxl-react", color: "hover:text-[#61DAFB]" },
    { name: "WordPress", icon: "bxl-wordpress", color: "hover:text-[#21759B]" },
  ];
  return (
    <>
      {/* bg-gradient-to-tr from-[#6153Cd] to-[#4732e1] */}
      <div className="container md:-mt-32">
        <p className="text-center font-semibold text-sm text-gray-500" data-aos="fade-up"
          data-aos-delay="300">Get To Know More...</p>
        <h1
          className="text-4xl text-center  font-bold"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-primary font-bold">About</span> Me
        </h1>
        <div className="mt-10 ">
          <div className="grid md:grid-cols-3 gap-2 items-center">
            <div className="col-span-1" data-aos="fade-up" data-aos-delay="450">
              <img
                src={Image}
                alt="image"
                className="md:w-3/4 mx-auto rounded-3xl border border-gray-300 shadow-xl transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              />
            </div>
            <div
              className="col-span-1 rounded-3xl p-6 outline outline-2 outline-primary md:text-center "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i class="bx bxs-user-pin text-3xl"></i>
              <h1 className="text-2xl font-bold">Me</h1>
              <p className="text-gray-700 font-semibold">
                Saya sangat tertarik dalam dunia IT, terutama di bagian
                Frontend, dan bersemangat mengembangkan antarmuka pengguna yang
                menarik dan intuitif.
              </p>
            </div>

            <div
              className="col-span-1 rounded-3xl p-6 outline outline-2 outline-primary md:text-center"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <i class="bx bxs-graduation text-3xl"></i>
              <h1 className="text-2xl font-bold">University</h1>
              <p className="text-gray-700 font-semibold">
                Saat ini saya sedang menempuh jurusan Teknologi Informasi di
                Politeknik Takumi, selain itu saya juga memiliki minat dengan
                budaya negara Jepang
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12 ">
          {skills.map((skill, index) => (
            <i
              key={index}
              className={`text-5xl md:text-6xl bx ${skill.icon} transition-all duration-300 ${skill.color}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}></i>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
