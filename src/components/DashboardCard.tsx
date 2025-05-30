import React from 'react';

interface DashboardCardProps {
    title: string;
    content: string;
    additionalData?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content, additionalData }) => {
    return (
        <div className="dashboard-card">
            <h2>{title}</h2>
            <p>{content}</p>
            {additionalData && <p className="additional-data">{additionalData}</p>}
        </div>
    );
};

export default DashboardCard;