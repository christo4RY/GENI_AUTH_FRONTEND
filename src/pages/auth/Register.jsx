import React from "react";
import AuthStepper from "../../components/auth/AuthStepper.jsx";
import {  useSelector } from "react-redux";
import RegisterFields from "../../components/auth/RegisterFields.jsx";
import "./register.css"

const Register = () => {

  const { steps, activeStep } = useSelector((state) => state.authstep);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row">
        <div className="stepperBackground w-full md:w-[28%] md:h-screen space-y-24 p-5 px-9  bg-[#053B50]">
          <h1 className="  text-3xl font-semibold">Auth</h1>
          <div>
            <AuthStepper />
          </div>
        </div>
        <div className="w-full md:w-[70%] p-10 flex items-center">
          <div className="w-full">
            <div className="w-[90%] mx-auto">
              <div className=" space-y-3 mb-8">
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMjZlMDdmOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWZiMTQxIj48cGF0aCBkPSJNMjEuNSwyMS41djEyOWg2NC41di0zMi4yNXYtNjQuNXYtMzIuMjV6TTg2LDUzLjc1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNWMtMTcuNzgwNSwwIC0zMi4yNSwxNC40Njk1IC0zMi4yNSwzMi4yNXpNMTE4LjI1LDg2Yy0xNy43ODA1LDAgLTMyLjI1LDE0LjQ2OTUgLTMyLjI1LDMyLjI1YzAsMTcuNzgwNSAxNC40Njk1LDMyLjI1IDMyLjI1LDMyLjI1YzE3Ljc4MDUsMCAzMi4yNSwtMTQuNDY5NSAzMi4yNSwtMzIuMjVjMCwtMTcuNzgwNSAtMTQuNDY5NSwtMzIuMjUgLTMyLjI1LC0zMi4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                />
                <h1 className=" text-3xl font-semibold">
                  {steps[activeStep].title}
                </h1>
                <h3 className="">{steps[activeStep].description}</h3>
              </div>
              <div>
                  <RegisterFields/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
