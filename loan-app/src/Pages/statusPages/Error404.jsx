import StatusPage from "./StatusPage";

const Error404 = () => {
  return (
    <StatusPage
      title="404 - Page Not Found"
      message="The page you are looking for does not exist."
      buttonText="Back to home"
      redirectUrl="/"
      buttonColor="#e74c3c"
      titleColor="#e74c3c"
      hoverColor="#c0392b"
      src="./404Error.jpg"
    />
  );
};

export default Error404
