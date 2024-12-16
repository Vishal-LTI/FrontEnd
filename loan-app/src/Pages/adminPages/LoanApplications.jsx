import React from "react";
import { useState } from "react";
import Layout from "../../Components/Layout";
import TableComponent from "../../Components/TableComponent";
import {useNavigate} from "react-router-dom";
import KYCUnverifiedForm from "./readOnly/userProfileReadOnly";
import { Row } from "react-bootstrap";

const LoanApplications = () => {
  const navigate = useNavigate();
  const[isPopupOpen, setIsPopupOpen]=useState(false);
  const[currentRow, setCurrentRow]=useState(null);
  // Data for the loan details table
  const loanDetailsHeader = [
    "Sr.No",
    "User Id",
    "Application Id",
    "Full Name",
    "Date of Birth",
    "Gender",
    "Email Address",
    "Phone Number",
    "Residential Address",
    "Nationality",
    "Employment Type",
    "Job Title",
    "Year of Experience",
    "Monthly Income",
    "Business Details",
    "Bank Account Number",
    "Bank Name",
    "Income Prooof",
    "Exisiting Loan",
    "Credit Score",
    "Loan Amount",
    "Loan Type",
    "Tenure",
    "ROI",
    "Purpose of Loan",
    "Preferred EMI Date",
    "Co-Applicant Name",
    "Co-Applicant Relationship",
    "Co-Applicant Income",
    "Co-Applicant Employment Details",
    "Application Date",
    "Application Status",
    "Approval Date",
  ];

  const loanDetailsData = 
    [{srNo:"1", userId:"John1511", applicationId:"HSBC003", fullName:"Lalit Kumar Vihan", dob:"18-dec-2024", gender:"Male", email:"xyz@gmail.com",
      phoneNumber:"8787878787", residentialAddress:"fffgfgf", Nationality:"Indian",
      employmentType:"Salaried",companyName:"Lti",jobTitle:"speccialist",yoe:"7.2",monthlyIncome:"2000",businessDetails:"NA",
      bankAccountNumber:"32324342434",bankName:"inin",incomeProof:"lti",existingLoans:"no",creditScore:"765",
      loanType:"Personal",loanAmount: "500000", roi:"9.5%",purposeOfLoan:"Car Purchasing", loanTenure:"20",preferredEmiDate:"NA",partnerName:"",
      partnerRelationship:"", partnerIncome:"",partnerEmploymentDetails:"",applicationDate:"22-Nov-2024", applicationStatus:"Pending",approvalDate:"NA",
    },
    {srNo:"2", userId:"hotn1611", applicationId:"HSBC004", fullName:"Kumar Vihan", dob:"19-dec-2024", gender:"Male", email:"xyjz@gmail.com",
      phoneNumber:"8787878987", residentialAddress:"fffjjjgfgf", Nationality:"Indian",
      employmentType:"Self Employed",companyName:"xebia",jobTitle:"Director",yoe:"15.2",monthlyIncome:"20000",businessDetails:"Gurugram",
      bankAccountNumber:"32464646342434",bankName:"hsbc",incomeProof:"ITR",existingLoans:"no",creditScore:"865",
      loanType:"Personal",loanAmount: "700000", roi:"7.5%",purposeOfLoan:"home Purchasing", loanTenure:"29",preferredEmiDate:"25-Feb-2025",partnerName:"xyx",
      partnerRelationship:"sis", partnerIncome:"9800",partnerEmploymentDetails:"meerut",applicationDate:"19-Nov-2024", applicationStatus:"Inreview",approvalDate:"NA",
    },
      ];

  const keyMap = {
    "Sr.No":"srNo", "User Id":"userId","Application Id":"applicationId","Full Name":"fullName","Date of Birth":"dob", "Gender":"gender","Email Address":"email",
    "Phone Number":"phoneNumber", "Residential Address":"residentialAddress","Nationality":"nationality", "Employment Type":"employmentType",
    "Company Name":"companyName","Job Title":"jobTitle","Year of Experience":"yoe", "Monthly Income":"monthlyIncome","Business Details":"businessDetails",
    "Bank Account Number":"bankAccountNumber","Bank Name":"bankName","Income Prooof":"incomeProof","Exisiting Loan":"existingLoans", "Credit Score":"creditScore",
    "Loan Amount":"loanAmount", "Loan Type":"loanType", "Tenure":"loanTenure","ROI":"roi","Purpose of Loan":"purposeOfLoan","Preferred EMI Date":"preferredEmiDate",
    "Co-Applicant Name":"partnerName","Co-Applicant Relationship":"partnerRelationship","Co-Applicant Income":"partnerIncome",
     "Co-Applicant Employment Details":"partnerEmploymentDetails","Application Date":"applicationDate", "Application Status":"applicationStatus",
    "Approval Date":"approvalDate",
    };

    const excludedFields =["Full Name","Date of Birth","Gender","Email Address","Phone Number","Residential Address","Nationality","Employment Type",
      "Company Name","Job Title","Year of Experience","Monthly Income","Business Details","Bank Account Number","Bank Name","Income Prooof",
      "Exisiting Loan","Credit Score","Purpose of Loan","Preferred EMI Date", "Co-Applicant Name","Co-Applicant Relationship","Co-Applicant Income",
      "Co-Applicant Employment Details"];

     const filteredHeaders=loanDetailsHeader.filter((header) => !excludedFields.includes(header));
    //    const filteredData= loanDetailsData.map((row, rowIndex)=>{
    //     const filteredRow={};
    //     filteredHeaders.forEach((header)=>{
    //       const key = keyMap[header];
    //       if(key){
    //         filteredRow[key]= row[key];
    //       }
    //     });
    //     return filteredRow;
    // });
    // console.log("master2-->"+JSON.stringify(filteredData,null,2));
    // console.log("master3-->"+JSON.stringify(filteredData));

const prepareTableRows =() => {
  return loanDetailsData.map((row, rowIndex) => {
    const filteredRow = {};
    filteredHeaders.forEach((header) => {
      console.log("Header--->"+header +"Key From keyMap"+JSON.stringify(keyMap[header]));
     
      console.log("<--Header--->"+header +"<--Mapped Key--->"+JSON.stringify(keyMap[header])+"<--Values---->"+JSON.stringify(row[keyMap[header]])); 
      const key = keyMap[header];
      console.log("Row Data--->"+row.hasOwnProperty(key));
      console.log("<--filteredRow[header]2-->"+row[key]);
      if(key && key in row){
        filteredRow[header] = row[key];
        console.log("<--filteredRow[header]2-->"+row[key]);
      } else{
        console.warn(`Row ${rowIndex + 1}: Key"${key} not found in loanDetailsData`);
      }
    });
    console.log("<--filtere0dRow--->"+JSON.stringify(filteredRow));
    return filteredRow;
  });
};

const handleView= (rowIndex) => {
  console.log("Unapproved:", rowIndex);
  const row = loanDetailsData[rowIndex];
  console.log("rowwwhello--->",JSON.stringify(loanDetailsData[rowIndex]));
  const rowData =loanDetailsHeader.reduce((acc,header,index)=>{
    const key = keyMap[header];
    console.log("keyyy--->",JSON.stringify(key));
  if(key && key in row){
    acc[key]=row[key];
    console.log("Mohan pyara--->"+acc[key]);
  }
  return acc;
},{});


  // const handleView = (rowIndex) => {
  //   console.log("View row:", rowIndex);
  //   const row = loanDetailsData[rowIndex];
  //   console.log("vdfnkdj----->",row);
  //   const rowData =loanDetailsHeader.reduce((acc,header)=>{
  //     const key = keyMap[header];
  //   console.log("master-->"+keyMap[header]);
  //   if(key){
  //     acc[key]=row[key];
  //   }
  //   return acc;
  // },{});

    // const url = '/admin/kyc-Unverified-Form'
    // window.open(url,"_blank","width=600,height=400");
    
    setCurrentRow(rowData);
    setIsPopupOpen(true);
  };
  const handleEdit = (rowIndex) => {
    console.log("Edit row:", rowIndex);
  };
  const handleDelete = (rowIndex) => {
    console.log("Delete row:", rowIndex);
  };
  const closeForm =() =>{
    setIsPopupOpen(false);
    setCurrentRow(null);
  };
  const renderCell =(rowIndex, cellIndex, cell)=>{
    if(Array.isArray(cell)){
      return (
      <ul>
        {cell.map((doc,docIndex)=>(
      <li key={docIndex}>
        <a 
        href={doc.link} 
        target="_blank"
         rel="noopener noreferrer">
          {doc.name}
          </a>
        -{doc.status}
      </li>
      ))}
      </ul>
      );
    }
    return cell;
  };
  return (
    <>
      <Layout isUser={false}>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Loan Applications</h5>

                <TableComponent
                  headers={filteredHeaders}
                  rows={prepareTableRows()}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  // renderCell={renderCell}
                />
                 {isPopupOpen && <KYCUnverifiedForm isOpen={isPopupOpen} onClose={closeForm} data={currentRow} />}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoanApplications;
