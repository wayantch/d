import React from "react";

const Contact = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div className="text-center">
          <p className="text-sm text-gray-500 font-semibold">Get In Touch</p>
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <div className="flex justify-center mt-10 ">
            <div className="flex gap-2 px-8 py-3 bg-gray-50 outline outline-gray-400 rounded-xl">
              <i class="bx bx-mail-send text-2xl"></i>
              <p className="text-xl font-normal">wayaandeva123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
