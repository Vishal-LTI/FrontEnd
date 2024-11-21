import StatusPage from "./StatusPage";

const Success201 = () => {
  return (
    <StatusPage
      title="Profile Created Successfully"
      message="Your profile has been successfully created. Welcome aboard!"
      buttonText="Go to Profile"
      redirectUrl="/profile"
      buttonColor="#e74c3c"
      titleColor="#e74c3c"
      hoverColor="#c0392b"
    />
  );
};

export default Success201
