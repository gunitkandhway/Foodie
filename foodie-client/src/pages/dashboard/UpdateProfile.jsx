import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { uploadFileToStorage } from "../../utils/uploadFile"; // This would be your file upload utility

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const photoFile = data.photoURL[0]; // The file selected by the user

    try {
      let photoURL = null;
      if (photoFile) {
        // Upload the photo and get the URL
        photoURL = await uploadFileToStorage(photoFile); // Assuming this function uploads and returns the URL
      }

      // Update the profile
      await updateUserProfile(name, photoURL);
      alert("Profile updated");
      navigate("/");
    } catch (error) {
      alert("Profile not updated");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="file"
              {...register("photoURL")}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
