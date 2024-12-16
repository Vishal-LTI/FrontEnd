import React from "react";

const TableComponent = ({ headers, rows, onView, onEdit, onDelete, onUserClick, onApproved, onUnapprove, renderCell,isUserIdClickable }) => {

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {(onView || onEdit || onDelete || onApproved || onUnapprove) && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
             {headers.map((header,cellIndex) => (
              <td key={cellIndex}>
                {renderCell ? renderCell(rowIndex,cellIndex,row[header]): row[header]}
              </td>
            ))} 
            {(onView || onEdit || onDelete || onApproved || onUnapprove) && (
              <td>
                {onView && (
                  <button style={buttonStyle}
                    className="btn btn-info btn-sm me-1"
                    onClick={() => onView(rowIndex)}
                   >
                    View
                  </button>
                )}
                {onEdit && (
                  <button style={buttonStyle}
                    className="btn btn-warning btn-sm me-1"
                    onClick={() => onEdit(rowIndex)}
                  >
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button style={buttonStyle}
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(rowIndex)}
                  >
                    Delete
                  </button>
                )}
                {onApproved && (
                  <button style={buttonStyle}
                    className="btn btn-success btn-sm"
                    onClick={() => onApproved(rowIndex)}
                  >
                    Approved
                  </button>
                )} &nbsp;
                {onUnapprove && (
                  <button style={buttonStyle}
                    className="btn btn-success btn-sm"
                    onClick={() => onUnapprove(rowIndex)}
                  >
                    Verify Details
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

const buttonStyle = {
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  fontSize: "clamp(10px, 2vw, 11px)",
};
