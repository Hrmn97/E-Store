import React from "react";

const Contact = () => {
  return (
    <div className="contact bg-blue-600 text-white p-3.5 flex justify-center">
      <div className="wrapper w-2/4 flex items-center justify-between">
        <span>CATCH US ON :</span>
        <div className="mail">
          <input
            className="p-2.5 border-0 rounded-l-lg"
            type="text"
            placeholder="Enter your email....."
          />
          <button className="p-2.5 border bg-gray-900 rounded-r-lg border-gray-900">
            JOIN US
          </button>
        </div>
        <div className="icons flex gap-2.5 ">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-discord"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
