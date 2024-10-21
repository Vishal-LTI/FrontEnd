import React from "react";
import Navbar from "../Atoms/Navbar";
import "../Styles/home.css";
import FeatureCard from "../Components/FeatureCard";
import Accordion from "../Atoms/Accordion";
const Home = () => {
  return (
    <>
      <Navbar />
      <img src="../home.webp" alt="img" className="banner-img" />
      <h4>Features and Benefits</h4>
      <div className="d-flex justify-between">
        <FeatureCard
          img="../zero_foreclosure.jpg"
          title="Zero Foreclosure Charges"
          description="Applicable only for Home
Loan with floating rate of
interest"
        />
        <FeatureCard
          img="../interest_rate.png"
          title="Attractive Interest Rate"
          description="Repo rate linked interest
rates"
        />
        <FeatureCard
          img="../approved_projects.png"
          title="55,000+ Approved Projects"
          description="Explore 55K + vast database
of ICICI Bank approved
projects"
        />
        <FeatureCard
          img="../digital_sanction.png"
          title="Digital Sanction"
          description="Online sanction in
few steps"
        />
      </div>

      <div>
        <Accordion
          bgColor={"#db620a"}
          color={"#ffffff"}
          title="Home Loan Interest Rate"
          description="Eligible borrowers can avail Home Loan with an attractive interest rate, lower Equated Monthly Instalments (EMIs) and no pre-payment charges on floating Home Loan interest rates. Extended loan tenures up to 30 years with easy repayment options."
        />
        <Accordion
          bgColor={"#db620a"}
          color={"#ffffff"}
          title="Home Loan Eligibility Calculator"
          description="Your dream home is now within your reach with ICICI Bank Home Loan. We offer higher loan amount on your income. You can check this through our Home Loan eligibility calculator. Your Housing Loan eligibility can be further enhanced by including income of the co-applicant(s) in your Home Loan.

Home Loan eligibility calculator calculates your eligibility after considering various factors including monthly income, fixed monthly obligation, current age, retirement age etc. Your Home Loan eligibility can also be considered an indicator of your Home Loan affordability."
        />
        <Accordion
          bgColor={"#db620a"}
          color={"#ffffff"}
          title="Benifits of Online Home Loan"
          description="Quick call back
Doorstep service
Convenient process
Home Loan approved projects: Explore a vast database of 50K+ ICICI Bank approved projects by leading developers across 44 locations in India."
        />

        <Accordion
          bgColor={"#db620a"}
          color={"#ffffff"}
          title=" Documentation"
          description="Quick call back
Doorstep service
Convenient process
Getting a Home Loan from ICICI Bank is easy and quick. We know you may need a Home Loan for the purpose of buying or constructing a new home, and in some cases, to renovate the house you currently live in. Whatever the reason, we keep the paperwork and other formalities to a minimum so that you are not stressed out. Home Loan documentation is simple. The list of documents required for a Housing Loan are the proof of your identity, address and income.
        "
        />
      </div>

      <h4>Types of Home Loan</h4>
      <div className="d-flex">
        <FeatureCard
          img="../zero_foreclosure.jpg"
          title={"Balance Transfer"}
          description={
            "Transfer your Home Loan to ICICI Bank with lower ROI and reduced Home Loan EMIs"
          }
        />
        <FeatureCard
          img="../interest_rate.png"
          title={"Home Loan Top-Up"}
          description={
            "Meet personal and business requirements with a Home Loan top-up"
          }
        />
        <FeatureCard
          img="../approved_projects.png"
          title={"Money Saver"}
          description={
            "An overdraft-based Home Loan can maximize savings on your Home Loan interest"
          }
        />
        <FeatureCard
          img="../digital_sanction.png"
          title={"Home improvement Loan"}
          description={
            "Renovate your home with ICICI Bank Home Improvement Loan"
          }
        />
        <FeatureCard
            img="../zero_foreclosure.jpg"
          title={"Land Loan"}
          description={
            "Acquire land and build your dream home with a Land Loan"
          }
        />
      </div>
    </>
  );
};

export default Home;
