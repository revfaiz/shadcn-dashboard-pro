import React from 'react';

const DashboardHeader: React.FC = () => {
    return (
        <header className="dashboard-header">
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default DashboardHeader;