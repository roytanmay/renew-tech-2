import { useNavigate, Link } from "react-router-dom";
import { account } from "../../appwrite/appwriteConfig";
import useGetUser from "../../appwrite/useGetUser";

const Dashboard = () => {
  const navigate = useNavigate();

  const userDetails = useGetUser();
  // console.log(userDetails);

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {userDetails ? (
        <>
          <div className="flex flex-col justify-center items-center rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/login">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
};

export default Dashboard;
