import React from "react";
import Navbar from "../Atoms/Navbar";
import "../Styles/home.css";
import FeatureCard from "../Components/FeatureCard";
import Accordion from "../Atoms/Accordion";
import Register from "./Register";
import Footer from "../Atoms/Footer";

const accordionData = [
  {
    title: "Home Loan Interest Rate",
    description:
      "Eligible borrowers can avail Home Loan with an attractive interest rate, lower Equated Monthly Instalments (EMIs) and no pre-payment charges on floating Home Loan interest rates. Extended loan tenures up to 30 years with easy repayment options.",
  },
  {
    btnTitle:'EMI Calculator',
    btnUrl:"/emicalculator",
    title: "Home Loan Eligibility Calculator",
    description:
      "Your dream home is now within your reach with ICICI Bank Home Loan. We offer higher loan amount on your income. You can check this through our Home Loan eligibility calculator. Your Housing Loan eligibility can be further enhanced by including income of the co-applicant(s) in your Home Loan. Home Loan eligibility calculator calculates your eligibility after considering various factors including monthly income, fixed monthly obligation, current age, retirement age etc. Your Home Loan eligibility can also be considered an indicator of your Home Loan affordability.",
  },
  {
    title: "Benefits of Online Home Loan",
    description:
      "Quick call back, Doorstep service, Convenient process, Home Loan approved projects: Explore a vast database of 50K+ ICICI Bank approved projects by leading developers across 44 locations in India.",
  },
  {
    title: "Documentation",
    description:
      "Getting a Home Loan from ICICI Bank is easy and quick. We know you may need a Home Loan for the purpose of buying or constructing a new home, and in some cases, to renovate the house you currently live in. Whatever the reason, we keep the paperwork and other formalities to a minimum so that you are not stressed out. Home Loan documentation is simple. The list of documents required for a Housing Loan are the proof of your identity, address and income.",
  },
];

const featureData = [
  {
    img: "../zero_foreclosure.jpg",
    title: "Zero Foreclosure Charges",
    description: "Applicable only for Home Loan with floating rate of interest",
  },
  {
    img: "../interest_rate.png",
    title: "Attractive Interest Rate",
    description: "Repo rate linked interest rates",
  },
  {
    img: "../approved_projects.png",
    title: "55,000+ Approved Projects",
    description: "Explore 55K+ vast database of ICICI Bank approved projects",
  },
  {
    img: "../digital_sanction.png",
    title: "Digital Sanction",
    description: "Online sanction in few steps",
  },
];

const loanTypesData = [
  {
    img: "../zero_foreclosure.jpg",
    title: "Home Loan",
    btnText:"Calculate",
    description:
      "Transfer your Home Loan to ICICI Bank with lower ROI and reduced Home Loan EMIs",
  },
  {
    img: "../interest_rate.png",
    title: "Car Loan",
    btnText:"Calculate",
    description:
      "Meet personal and business requirements with a Home Loan top-up",
  },
  {
    img: "../approved_projects.png",
    title: "Personal Loan",
    btnText:"Calculate",
    description:
      "An overdraft-based Home Loan can maximize savings on your Home Loan interest",
  },
  {
    img: "../digital_sanction.png",
    title: "Gold Loan",
    btnText:"Calculate",
    description: "Renovate your home with ICICI Bank Home Improvement Loan",
  },
  {
    img: "../zero_foreclosure.jpg",
    title: "Land Loan",
    btnText:"Calculate",
    description: "Acquire land and build your dream home with a Land Loan",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-container">
        <img src="../home.webp" alt="img" className="banner-img" />
        <div className="register-component">
          <Register />
        </div>
      </div>

      <h4>Features and Benefits</h4>
      <div className="d-flex justify-between">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div>
        {accordionData.map((accordion, index) => (
          <Accordion
            key={index}
            bgColor={"#db0011"}
            color={"#ffffff"}
            title={accordion.title}
            description={accordion.description}
            btnTitle={accordion.btnTitle}
          />
        ))}
      </div>

      <h4>Types of Loan</h4>
      <div className="d-flex">
        {loanTypesData.map((loanType, index) => (
          <FeatureCard
            key={index}
            btnText={loanType.btnText}
            img={loanType.img}
            title={loanType.title}
            description={loanType.description}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
