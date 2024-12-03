import React from "react";

const TableComponent = ({ headers, rows, onView, onEdit, onDelete }) => {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {(onView || onEdit || onDelete) && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            {(onView || onEdit || onDelete) && (
              <td>
                {onView && (
                  <button
                    className="btn btn-info btn-sm me-1"
                    onClick={() => onView(rowIndex)}
                  >
                    View
                  </button>
                )}
                {onEdit && (
                  <button
                    className="btn btn-warning btn-sm me-1"
                    onClick={() => onEdit(rowIndex)}
                  >
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(rowIndex)}
                  >
                    Delete
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
