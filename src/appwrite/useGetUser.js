import { useEffect, useState } from "react";
import { account } from "./appwriteConfig";

const useGetUser = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const getData = account.get();
    getData
      .then((res) => {
        setUserDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return userDetails;
};

export default useGetUser;
