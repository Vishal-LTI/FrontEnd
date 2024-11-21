import StatusPage from "./StatusPage";

const Error500 = () => {
  return (
    <StatusPage
      title="500 - Internal Server Error"
      message="Something went wrong. Please try again later"
      buttonText="Reload"
      redirectUrl="/"
      buttonColor="#e74c3c"
      titleColor="#e74c3c"
      hoverColor="#c0392b"
      src='./500Error.jpg'
    />
  );
};

export default Error500
