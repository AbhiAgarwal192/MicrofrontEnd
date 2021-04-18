import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableComponent from './Table/Table';

window.renderTable = (containerId) => {
  ReactDOM.render(
    <TableComponent />,
    document.getElementById(containerId),
  );
};

window.unmountTable = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Table-container')) {
  ReactDOM.render(<TableComponent />, document.getElementById('root'));
}