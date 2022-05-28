import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Navbar = ({ extraStyle }) => {
  const { user, saveUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    saveUser({});
  }

  useEffect(() => {
    if (Object.keys(user).length === 0) navigate("/", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <section
      className={` bg-primary-red-60 min-h-[100vh] h-full pl-4 pt-[100%] relative ${extraStyle}`}
    >
      <div className=" flex flex-col fixed left-10 w-[10rem] ">
        <NavLink
          to={"/marketplace"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? "text-primary-red-60 bg-primary-light-30 rounded-l-lg font-semibold "
                : " bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40 "
            }  `
          }
        >
          <i className=" fa far fa-rectangle-list mr-4" />
          Market
        </NavLink>

        <NavLink
          to={"/advert"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? "text-primary-red-60 bg-primary-light-30 rounded-l-lg font-semibold "
                : " bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40 "
            }  `
          }
        >
          <i className=" fa far fa-money-bill-wave mr-4" />
          Adverts
        </NavLink>

        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? "text-primary-red-60 bg-primary-light-30 rounded-l-lg font-semibold "
                : " bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40 "
            }  `
          }
        >
          <i className=" fa fas fa-user mr-4" />
          Profile
        </NavLink>

        <button
          className="  mb-8 px-4 flex items-center py-2 bg-primary-red-30 text-primary-light-30 rounded-lg mr-2 hover:bg-white/40  "
          onClick={() => logout()}
        >
          <i className="fa far fa-sign-out mr-4 " />
          Log out
        </button>
      </div>
    </section>
  );
};

export default Navbar;
