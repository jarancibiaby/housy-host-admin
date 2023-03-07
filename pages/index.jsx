import Image from "next/image";

const Home = () => {

  const loggedContent = (
    <>
      <LateralMenu />
      
    </>
  );

  const notLoggedContent = (
    <>
      <Login />
    </>
  )


  return (
    <>
      <p className="">Welcome to Housy Host</p>
    </>
  );
};

export default Home;
