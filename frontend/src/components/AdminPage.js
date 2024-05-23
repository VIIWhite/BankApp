import React from 'react';
import './AdminPage.css';

function AdminPage() {
    return (
        <div className="admin-container">
            <h2>Admin Page</h2>
            <p>
                <strong> CWE-425: Direct Request ('Forced Browsing')</strong><br />
                The vulnerability is described as occurring when an application does not properly check if a user has permission to access a specific page or resource. Attackers can exploit this by directly entering a URL to access restricted pages or resources.
            </p>
        </div>
    );
}

export default AdminPage;
