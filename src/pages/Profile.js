import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/profile/Dashboard";
import PreOrders from "../components/profile/PreOrders";
import Orders from "../components/profile/Orders";
import Address from "../components/profile/Address";
import AccountDetails from "../components/profile/AccountDetails";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/pre-orders" element={<PreOrders></PreOrders>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/address" element={<Address></Address>} />
        <Route
          path="/account-details"
          element={<AccountDetails></AccountDetails>}
        />
      </Routes>
    </>
  );
};

export default Profile;
