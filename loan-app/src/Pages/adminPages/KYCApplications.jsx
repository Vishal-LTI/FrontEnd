import React, { useState } from "react";
import Layout from "../../Components/Layout";
import TableComponent from "../../Components/TableComponent";
import KYCUnverifiedForm from "./KYCAdminVerificationDetails";

const KYCApplications = () => {
  const[isPopupOpen, setIsPopupOpen]=useState(false);
  const[currentRow, setCurrentRow]=useState(null);

  // Data for the loan details table
  const loanDetailsHeader = [
    "Sr.No",
    "Application Id",
    "User Id",
    "PAN",
    "Adhar",
    "Uploaded Documents",
    "User Status",
    "AdminStatus",
    "Application Date",
    "Application Status",
    "Approval Date",
  ];

  const loanDetailsData = 
    [{srNo:"1", userId:"john1511", applicationId:"HSBC003", pan:"ajspv0341d", aadhaar:"7345898934365",
      uploadedDocuments:[{name:"Passport", status:"Pending", link:"https://example.com/passport"},
        {name:"Utility Bill",status:"Pending",link:"https://example.com/bill"},
        {name:"Driving License",status:"Pending", link:"https://example.com/dl"},
        {name:"Adhar Card",status:"Pending",link:"https://example.com/ac"},
        {name:"Pan Card",status:"Pending",link:"https://example.com/pan"},
        {name:"Signature",status:"Pending",link:"https://example.com/signature"},
        {name:"Photo",status:"Pending",link:"https://example.com/photo"}], 
      userStatus:"Active",
      adminStatus:"pending", applicationDate:"21-Nov-2024", applicationStatus:"pending",approvalDate:"NA",
    },
    {srNo:"2", userId:"hotn1611", applicationId:"HSBC004", pan:"hjspv0341d", aadhaar:"767689896565",
      uploadedDocuments:[{name:"Passport", status:"Pending", link:"https://example.com/passport"},
        {name:"Utility Bill",status:"Pending",link:"https://example.com/bill"},
        {name:"Driving License",status:"Pending", link:"https://example.com/dl"},
        {name:"Adhar Card",status:"Pending",link:"https://example.com/ac"},
        {name:"Pan Card",status:"Pending",link:"https://example.com/pan"},
        {name:"Signature",status:"Pending",link:"https://example.com/signature"},
        {name:"Photo",status:"Pending",link:"https://example.com/photo"}], 
      userStatus:"Active",
      adminStatus:"pending", applicationDate:"23-Nov-2024", applicationStatus:"pending",approvalDate:"NA",
    },
      ];

  const keyMap = {
    "Sr.No":"srNo", "User Id":"userId","Application Id":"applicationId","PAN":"pan","Adhar":"aadhaar", "Uploaded Documents":"uploadedDocuments","User Status":"userStatus",
    "Admin Status":"adminStatus", "Application Date":"applicationDate","Application Status":"applicationStatus", "Approval Date":"approvalDate",
    };

    // const excludedFields =["Full Name","Date of Birth","Gender","Email Address","Phone Number","Residential Address","Nationality","Employment Type",
    //   "Company Name","Job Title","Year of Experience","Monthly Income","Business Details","Bank Account Number","Bank Name","Income Prooof",
    //   "Exisiting Loan","Credit Score","Purpose of Loan","Preferred EMI Date", "Co-Applicant Name","Co-Applicant Relationship","Co-Applicant Income",
    //   "Co-Applicant Employment Details"];

  //    const filteredHeaders=loanDetailsHeader.filter((header) => !excludedFields.includes(header));
  // console.log("headers passed --->", loanDetailsHeader);

  // console.log("loanDetailsData----->",loanDetailsData);

  const prepareTableRows =() => {
    return loanDetailsData.map((row, rowIndex) => {
      const filteredRow = {};
      loanDetailsHeader.forEach((header) => {
        // console.log("Header--->"+header +"Key From keyMap"+JSON.stringify(keyMap[header]));
       
        // console.log("<--Header--->"+header +"<--Mapped Key--->"+JSON.stringify(keyMap[header])+"<--Values---->"+JSON.stringify(row[keyMap[header]])); 
        const key = keyMap[header];
        // console.log("Row Data--->"+row.hasOwnProperty(key));
        // console.log("<--filteredRow[header]2-->"+row[key]);
        if(key && key in row){
          filteredRow[header] = row[key];
          // console.log("<--filteredRow[header]2-->"+row[key]);
        } else{
          // console.warn(`Row ${rowIndex + 1}: Key"${key} not found in loanDetailsData`);
        }
      });
      // console.log("<--filtere0dRow--->"+JSON.stringify(filteredRow));
      return filteredRow;
    });
  };
  // const handleApproved = (rowIndex) => {
  //   console.log("Approved:", rowIndex);
  // };
  
  const handleUnapprove= (rowIndex) => {
    console.log("Unapproved:", rowIndex);
    const row = loanDetailsData[rowIndex];
    console.log("rowww--->",JSON.stringify(loanDetailsData[rowIndex]));
    const rowData =loanDetailsHeader.reduce((acc,header,index)=>{
      const key = keyMap[header];
      console.log("keyyy--->",JSON.stringify(key));
    if(key){
      acc[key]=row[key];
      console.log("Mohan pyara--->"+acc[key]);
    }
    return acc;
  },{});

    // const url = '/admin/kyc-Unverified-Form'
    // window.open(url,"_blank","width=600,height=400");
    
    setCurrentRow(rowData);
    setIsPopupOpen(true);
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
    return cell || "N/A";
  };

  // const handleDelete = (rowIndex) => {
  //   console.log("Delete row:", rowIndex);
  // };
  return (
    <>
      <Layout isUser={false}>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">KYC Applications</h5>

                <TableComponent
                  headers={loanDetailsHeader}
                  rows={prepareTableRows()}
                  //onApproved={handleApproved}
                  onUnapprove={handleUnapprove}
                  renderCell={renderCell}
                  // // onDelete={handleDelete}
                  // renderActions={(rowIndex)=>(<><button className="btn btn-success" onClick={() => handleApproved(rowIndex)}>Approve</button>
                  // <button className="btn btn-success" onClick={() => handleUnapprove(rowIndex)}>Unapprove</button></>)}
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

export default KYCApplications;
