// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/viewProfile.css";
// import NavbarMenu from "../atoms/Navbar";
// import Footer from "../atoms/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetUserDetailsQuery } from "../services/auth/authService";
// import { setCredentials } from "../features/auth/authSlice";
// import Layout from "../Components/Layout";
// import InfoBlock from "../atoms/InfoBlock";
// import TitleCard from "../atoms/TitleCard";
// const ViewProfilePage = () => {
//   const { userInfo } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()

//   // automatically authenticate user if token is found
//   const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
//     pollingInterval: 900000, // 15mins
//   })

//   useEffect(() => {
//     if (data) dispatch(setCredentials(data))
//   }, [data, dispatch])
//   // Dummy data for user profile
//   const userProfile = {
//     photo: "../Media.png",
//     //firstName: "John",
//     //lastName: "Doe",
//     name:userInfo?.name,
//     age: 30,
//     dob: "24/12/1997",
//     companyDetails: "Works at Tech Corp as a Senior Developer.",
//     contact:userInfo?.contact,
//     email:userInfo?.email,
//     contactDetails: "john.doe@example.com, +1-555-555-5555",
//   };
//   const loanDetails = {
//     loanType: "Home Loan",
//     loanAmount: "1000000",
//     tenure: "20",
//     emi: "20000",
//     interestRate: 8.5,
//     outStandingAmount: "800000",
//   };

//   return (
//     <>
//       <NavbarMenu />
//         <div className="container my-5">
//           <h3
//             className="card-title text-center mb-5"
//             style={{ color: "#FF7F50" }}
//           >
//             Profile Information
//           </h3>

//           <div className="row">
//             <div className="col-md-6 d-flex justify-content-center">
//               <div className="card p-4">
//                 <img
//                   src={userProfile.photo}
//                   alt="User"
//                   className="img-fluid rounded-circle"
//                   style={{
//                     maxWidth: "250px",
//                     height: "250px",
//                     marginLeft: "120px",
//                   }}
//                 />
//               <div className="mt-2">
//                 <TitleCard title={'Loan Details'}>
//                   <InfoBlock title={'Loan Type'} value={loanDetails.loanType} className={'col-md-6'}/>
//                   <InfoBlock title={'Loan Amount'} value={loanDetails.loanAmount} className={'col-md-6'}/>
//                   <InfoBlock title={'Tenure'} value={loanDetails.tenure} className={'col-md-6'}/>
//                   <InfoBlock title={'Interest Rate'} value={loanDetails.interestRate} className={'col-md-6'}/>
//                   <InfoBlock title={'EMI'} value={loanDetails.emi} className={'col-md-6'}/>
//                   <InfoBlock title={'OutStanding'} value={loanDetails.outStandingAmount} className={'col-md-6'}/>
//                 </TitleCard>
//               </div>
//               </div>
//             </div>
//             <div className="col-md-6"> 
//             <div className="card p-4">
//               <TitleCard title={'Personal Details'}>
//                 <InfoBlock title={'First Name'} value={userProfile.firstName} className={'col-md-6'}/>
//                 <InfoBlock title={'Last Name'} value={userProfile.lastName} className={'col-md-6'}/>
//                 <InfoBlock title={'DOB'} value={userProfile.dob} className={'col-md-6'}/>
//                 <InfoBlock title={'Age'} value={userProfile.age} className={'col-md-6'}/>
//               </TitleCard>

//               <TitleCard title={'Company Details'}>
//                   <InfoBlock title={'First Name'} value={userProfile.firstName} className={'col-md-6'}/>
//                   <InfoBlock title={'Last Name'} value={userProfile.lastName} className={'col-md-6'}/>
//                   <InfoBlock title={'DOB'} value={userProfile.dob} className={'col-md-6'}/>
//                   <InfoBlock title={'Age'} value={userProfile.age} className={'col-md-6'}/>
//                 </TitleCard>

//                 <TitleCard title={'Contact Details'}>
//                   <InfoBlock title={'First Name'} value={userProfile.firstName} className={'col-md-6'}/>
//                   <InfoBlock title={'Last Name'} value={userProfile.lastName} className={'col-md-6'}/>
//                   <InfoBlock title={'DOB'} value={userProfile.dob} className={'col-md-6'}/>
//                   <InfoBlock title={'Age'} value={userProfile.age} className={'col-md-6'}/>
//                 </TitleCard>
//                 </div>
//             </div>             
//           </div>
//         </div>
//       <Footer />
//     </>
//   );
// }

// export default ViewProfilePage;
