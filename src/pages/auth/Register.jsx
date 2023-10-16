import React from "react";
import AuthStepper from "../../components/auth/AuthStepper.jsx";
import { useSelector } from "react-redux";
import RegisterFields from "../../components/auth/RegisterFields.jsx";
import "./register.css"

const Register = () => {

  const { steps, activeStep } = useSelector((state) => state.authstep);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row">
        <div className="stepperBackground w-full md:w-[28%] md:h-screen space-y-24 p-5 px-9  bg-[#053B50]">
          <div className="flex space-x-2 items-center">
            <img src="/images/geni-esign-removebg-120x120.png" className="w-10" alt="" />
            <h1 className="  text-3xl font-semibold uppercase">GENI</h1>
          </div>
          <div>
            <AuthStepper />
          </div>
        </div>
        <div className="w-full md:w-[70%] p-10 flex items-center">
          <div className="w-full">
            <div className="w-[90%] mx-auto">
              <div className=" space-y-3 mb-8">
                <img
                  src="/images/geni-esign-removebg-120x120.png"
                  alt="svgImg"
                />
                <h1 className=" text-3xl font-semibold">
                  {steps[activeStep].title}
                </h1>
                <h3 className="">{steps[activeStep].description}</h3>
              </div>
              <div>
                <RegisterFields />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
