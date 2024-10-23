import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/productSlice";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import UploadProfilePhoto from "./UploadProfilePhoto";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function Profile() {
  const location = useLocation();

  const url = location.pathname;



  const [upload, setUpload] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const { isLoading, profile, error } = useSelector((state) => state.profile);

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error handling
  if (error) {
    return <div>Error: {error}</div>;
  }


  const handleUploadPhoto = () =>{
    setUpload(!upload)
  }


  const profileUploadedHandle = (profileUploaded) =>{
    if(profileUploaded)
      setUpload(false)
  } 



  // Check if profile exists before rendering
  return (
    <div>
      <div className="container-fluid bg-light">

        {
          url==="/user/profile" && (      <div>
            <Link to={"/customer/dashboard"}>
              <button type="submit" className="btn mt-5">
                <FontAwesomeIcon className="me-2" icon={faArrowLeft} />
                Go Back
              </button>
            </Link>
          </div>)
        }

        <div className="row">
          <div className="col-5 bg-white m-3 rounded">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div>
                  {profile && profile.profile_image ? (
                    <img
                      className="profile_icon rounded-circle"
                      src={`http://127.0.0.1:8000${profile.profile_image}`}
                      alt="Profile image"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="profile_icon"
                      icon={faCircleUser}
                    />
                  )}
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center align-items-center p-3">
                {/* Safely check if profile properties exist */}
                <p>
                  {profile?.first_name && profile.first_name}{" "}
                  {profile?.last_name && profile.last_name}
                </p>
              </div>

              <div className="d-flex justify-content-end">
                <button onClick={handleUploadPhoto} className="btn btn-light">Upload Photo</button>
              </div>

              <div>
                  {
                    upload && <UploadProfilePhoto profileUploadedHandle={profileUploadedHandle} />
                  }
              </div>
            </div>
          </div>


          

          <div className="col-6 m-3 bg-white rounded">
            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Full Name</p>
              </div>

              <div className="col-8">
                {/* Safely check if profile properties exist */}
                <p>
                  {profile?.first_name && profile.first_name}{" "}
                  {profile?.last_name && profile.last_name}
                </p>
              </div>
            </div>

            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Email</p>
              </div>

              <div className="col-8">
                <p>{profile?.email && profile.email}</p>
              </div>
            </div>


            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Gender</p>
              </div>

              <div className="col-8">
                <p>{profile?.gender && profile.gender}</p>
              </div>
            </div>

            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Contact Number</p>
              </div>

              <div className="col-8">
                <p>{profile?.contact_number && profile.contact_number}</p>
              </div>
            </div>


            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>City</p>
              </div>

              <div className="col-8">
                <p>{profile?.city && profile.city}</p>
              </div>
            </div>

            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Postal Code</p>
              </div>

              <div className="col-8">
                <p>{profile?.postal_code && profile.postal_code}</p>
              </div>
            </div>

            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>Street</p>
              </div>

              <div className="col-8">
                <p>{profile?.street_address && profile.street_address}</p>
              </div>
            </div>


            <div className="row pt-2 m-2 bg-light rounded">
              <div className="col-4">
                <p>House Number</p>
              </div>

              <div className="col-8">
                <p>{profile?.house_holding_number && profile.house_holding_number}</p>
              </div>
            </div>

            <div className="row pt-2 m-2 rounded">
              <Link to="/edit/profile">
              <button className="btn btn-light">Edit Profile</button>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
