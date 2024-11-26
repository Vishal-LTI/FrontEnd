import React from 'react';
import Layout from '../Components/Layout';
import NumberCard from '../atoms/NumberCard';
import TableComponent from '../Components/TableComponent';

const Dashboard = () => {
  // Data for the cards
  const cardData = [
    { title: '1', text: 'Title' },
    { title: '2', text: 'Title' },
    { title: '3', text: 'Title' },
    { title: '2', text: 'Title' },
    { title: '3', text: 'Title' },
    { title: '2', text: 'Title' },
  ];

  // Data for the table
  const tableHeaders = ['#', 'First Name', 'Last Name', 'Username'];
  const tableRows = [
    ['1', 'John', 'Doe', '@john'],
    ['2', 'Jane', 'Doe', '@jane'],
    ['3', 'Mark', 'Zuckerberg', '@zuck'],
  ];

  return (
    <Layout>
      <div className="row mb-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-2">
            <NumberCard title={card.title} value={card.text} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Table Title</h5>
              <TableComponent headers={tableHeaders} rows={tableRows} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
