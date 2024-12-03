import StatusPage from "./StatusPage";

const Error401 = () => {
  return (
    <StatusPage
      title="401 - Unauthorized"
      message="You are not authorized to view this page. Please login to continue."
      buttonText="Go to Login"
      redirectUrl="/login"
      buttonColor="#e74c3c"
      titleColor="#e74c3c"
      hoverColor="#c0392b"
      src="./unauthorized.jpg"
    />
  );
};

export default Error401
