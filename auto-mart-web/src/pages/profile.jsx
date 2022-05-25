import { useState } from "react";
import Heading from "../components/heading";

const Profile = () => {
  const [email, setEmail] = useState("ugbeyellionz@gmail.com");
  const [fullName, setFullName] = useState("Daniel Ugbeye");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function updateUserDetails(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  return (
    <section className=" min-h-[100vh] ">
      <Heading
        heading={"Your Profile"}
        supportText={"your auto mart profile details"}
        extraStyle={
          " px-8 py-2 text-primary-red-60 sticky top-0 left-0 right-0 z-[1000] bg-primary-light-30 shadow-black/10 shadow-md relative "
        }
        headingStyle={" text-5xl mb-2  "}
        supportTextStyle={" text-lg "}
      />

      <div className=" my-12 ">
        <div className=" w-full max-w-lg mb-6 mx-auto ">
          <button
            className={` flex gap-2 bg-primary-red-60 hover:bg-primary-red-90 py-2 w-[5rem] rounded-md text-primary-light-30 justify-center items-center ml-auto text-lg tracking-wider hover:tracking-widest ${
              !isEditing ? "visible" : "invisible"
            } `}
            onClick={() => setIsEditing(!isEditing)}
          >
            <i className=" fa fad fa-pencil " />
            <span>Edit</span>
          </button>
        </div>

        <form className=" w-full max-w-lg text-primary-red-30 mx-auto ">
          <fieldset className=" relative mb-8 flex items-center ">
            <label className=" w-[8rem] text-lg  ">Full name</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className=" w-full p-2 outline-none h-12 overflow-hidden "
              readOnly={!isEditing ? true : false}
            />
          </fieldset>

          <fieldset className=" relative mb-8 flex items-center ">
            <label className=" w-[8rem] text-lg  ">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full p-2 outline-none h-12 overflow-hidden "
              readOnly={true}
            />
          </fieldset>

          {isEditing && (
            <>
              <fieldset className=" relative mb-8 flex items-center ">
                <label className=" w-[8rem] text-lg  ">Old Password</label>
                <input
                  type={"text"}
                  name="old-password"
                  id="old-password"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                  className=" w-full  p-2 outline-none h-12 overflow-hidden border-b "
                  readOnly={!isEditing ? true : false}
                />
              </fieldset>

              <fieldset className=" relative mb-8 flex items-center ">
                <label className=" w-[8rem] text-lg  ">New Password</label>
                <input
                  type={"text"}
                  name="new-password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  className=" w-full  p-2 outline-none h-12 overflow-hidden border-b "
                  readOnly={!isEditing ? true : false}
                />
              </fieldset>

              <fieldset className=" relative mb-8 flex items-center ">
                <label className=" w-[8rem] text-lg  ">Confirm Password</label>
                <input
                  type={"text"}
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className=" w-full  p-2 outline-none h-12 overflow-hidden border-b "
                  readOnly={!isEditing ? true : false}
                />
              </fieldset>
            </>
          )}

          {isEditing && (
            <button className=" w-[7rem] mx-auto flex justify-center items-center gap-2 py-2 h-12 bg-primary-red-60 hover:bg-primary-red-90 text-white rounded-md text-base-blue text-lg tracking-wider hover:tracking-widest " onClick={(e) => updateUserDetails(e)} >
              <i className=" fa far fa-save text-xl " />
              Save
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Profile;
