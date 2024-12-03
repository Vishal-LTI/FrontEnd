import React from 'react';
import { Table, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaDownload } from 'react-icons/fa';

const LoanDocumentsTable = () => {
  return (
    // <Card>
    //     <Card.Header as="h5" className="text-black btn">Loan Documents</Card.Header>
    //     <Card.Body>
      <Table striped hover>
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Upload Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Loan Agreement</td>
            <td>2023-04-01</td>
            <td>
              <a href="#view" title="View"className='text-black'><FaEye /></a> &nbsp;
              <a href="#download" title="Download" className='text-black'><FaDownload /></a>
            </td>
          </tr>
          <tr>
            <td>Identity Proof</td>
            <td>2023-04-02</td>
            <td>
              <a href="#view" title="View" className='text-black'><FaEye /></a> &nbsp;
              <a href="#download" title="Download" className='text-black'><FaDownload /></a>
            </td>
          </tr>
          <tr>
            <td>Income Proof</td>
            <td>2023-04-03</td>
            <td>
              <a href="#view" title="View" className='text-black'><FaEye /></a> &nbsp;
              <a href="#download" title="Download" className='text-black'><FaDownload /></a>
            </td>
          </tr>
          <tr>
            <td>Address Proof</td>
            <td>2023-04-04</td>
            <td>
              <a href="#view" title="View" className='text-black'><FaEye /></a> &nbsp;
              <a href="#download" title="Download" className='text-black'><FaDownload /></a>
            </td>
          </tr>
        </tbody>
      </Table>
    //   </Card.Body>
    //   </Card>
  );
};

export default LoanDocumentsTable;
