import { NavLink } from "react-router-dom";

const ProfileNavigation = () => {
  return (
    <div>
      <ul className="flex flex-col justify-between items-center">
        <li>
          <NavLink
            className={(navData) => {
              if (navData.isActive) return "";
              return "";
            }}
            to="/profle"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => {
              if (navData.isActive) return "";
              return "";
            }}
            to="/profile/pre-orders"
          >
            Pre-Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => {
              if (navData.isActive) return "";
              return "";
            }}
            to="/profile/orders"
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => {
              if (navData.isActive) return "";
              return "";
            }}
            to="/address"
          >
            Address
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => {
              if (navData.isActive) return "";
              return "";
            }}
            to="/account-details"
          >
            Account Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNavigation;
