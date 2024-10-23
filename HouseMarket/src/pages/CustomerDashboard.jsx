import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the component
import { faIdCard, faGear } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import analysisImage from "../CSS/images/analysis.png"; // Adjust path as per your directory
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router";
import Profle from "./Profle";
import Overview from "./Overview";
import Setting from "./Setting";

function CustomerDashboard() {
 
 const [activeComponent, setActiveComponent] = useState(<Profle/>)

  const Navigate = useNavigate();
  const HandleLogoutSubmit = () =>{
        Navigate('/logout');
        console.log("Submit LOgout")
  }

  const handleActiveComponent = (component)=>{
        setActiveComponent(component)
  }


  return (
    <div>
      <div className="container-fluid">
        <div className="row">


          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 bg-dark vh-100">
            
            <div className="col-12 w-100 mb-3">

              <button className="bg-dark w-100 text-white p-2 border-0 text-decoration-none fs-5" onClick={()=>handleActiveComponent(<Profle/>)}>
                <div className="row d-flex">
                  <div className="col-left w-25">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faIdCard} />
                    </span>
                  </div>
                  <div className="col-right w-75">
                    <span> Profile</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-12 w-100 mb-3">
              <button className="bg-dark w-100 text-white p-2 border-0 text-decoration-none fs-5" onClick={()=>handleActiveComponent(<Overview/>)}>
                <div className="row d-flex">
                  <div className="col-left w-25">
                    <span className="me-3">
                      <img
                        className="analysis-icon"
                        src={analysisImage}
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="col-right w-75">
                    <span> OverView</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-12 w-100 mb-3">
              <button className="bg-dark w-100 text-white p-2 border-0 text-decoration-none fs-5" onClick={()=>handleActiveComponent(<Setting/>)}>
                <div className="row d-flex">
                  <div className="col-left w-25">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faGear} />
                    </span>
                  </div>
                  <div className="col-right w-75">
                    <span>Settings</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="col-12 w-100 mb-3 logout-div">
              <button className="bg-dark w-100 text-white p-2 border-0 text-decoration-none fs-5" onClick={HandleLogoutSubmit}>
                <div className="row d-flex">
                  <div className="col-left w-25">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </div>
                  <div className="col-right w-75 logout">
                    <span> Logout</span>
                  </div>
                </div>
              </button>

               <div className="toolkit">Are you sure logout now?</div>
               
            </div>



          </div>
          

          <div className="col-sm-12 col-md-8 col-lg-10">
            {activeComponent}
          </div>


        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
