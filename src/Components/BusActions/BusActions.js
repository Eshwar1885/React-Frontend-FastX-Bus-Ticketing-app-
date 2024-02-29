import React from 'react';
import { Link } from 'react-router-dom';
import './BusActions.css';

function BusActions() {
  return (
    <div className="bus-actions-container">
      <div className="bus-action-card">
        <h3>Add Route</h3>
        <p>Add a new route for the selected bus.</p>
        <Link to="/add-route">Add Route</Link>
      </div>
      <div className="bus-action-card">
        <h3>Delete Route</h3>
        <p>Delete an existing route for the selected bus.</p>
        <Link to="/delete-route">Delete Route</Link>
      </div>
      <div className="bus-action-card">
        <h3>Edit Bus Details</h3>
        <p>Edit the details of the selected bus.</p>
        <Link to="/edit-bus-details">Edit Bus Details</Link>
      </div>
      <div className="bus-action-card">
        <h3>Add Amenities</h3>
        <p>Add new amenities for the selected bus.</p>
        <Link to="/add-amenities">Add Amenities</Link>
      </div>
      <div className="bus-action-card">
        <h3>Delete Amenities</h3>
        <p>Delete existing amenities from the selected bus.</p>
        <Link to="/delete-amenities">Delete Amenities</Link>
      </div>
      {/* Add more action cards as needed */}
    </div>
  );
}

export default BusActions;
