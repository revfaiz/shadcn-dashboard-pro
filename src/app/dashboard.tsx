import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardCard from '../components/DashboardCard';
import DashboardTable from '../components/DashboardTable';

const hardcodedData = {
    cards: [
        { title: 'Total Users', content: '1,234' },
        { title: 'Active Sessions', content: '567' },
        { title: 'New Signups', content: '89' },
    ],
    tableHeaders: ['Date', 'User', 'Action'],
    tableRows: [
        ['2023-10-01', 'User1', 'Logged In'],
        ['2023-10-02', 'User2', 'Signed Up'],
        ['2023-10-03', 'User3', 'Logged Out'],
    ],
};

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="dashboard-cards">
                {hardcodedData.cards.map((card, index) => (
                    <DashboardCard key={index} title={card.title} content={card.content} />
                ))}
            </div>
            <DashboardTable headers={hardcodedData.tableHeaders} rows={hardcodedData.tableRows} />
        </div>
    );
};

export default Dashboard;