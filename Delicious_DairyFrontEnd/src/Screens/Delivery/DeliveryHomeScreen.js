import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import home8 from "../../Images/home8.jpeg";
const DeliveryHomeScreen = (props) => {
  const userSignIn = useSelector((store) => store.userSignIn);
  return (
    <div className="Screen">
      {!userSignIn.response && <Header title="You are not logged in" />}
      {userSignIn.response && (
        <Header title={"Welcome back " + userSignIn.response.data.firstName} />
      )}
      <img
        src={home8}
        height="500px"
        width="1080px"
      />
    </div>
  );
};

export default DeliveryHomeScreen;
