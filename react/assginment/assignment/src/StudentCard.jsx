import React from 'react';

const StudentCard = ({ name, age, grade }) => {
    return (
        <div className="card mx-auto my-4" style={{ maxWidth: '300px' }}>
            <div className="card-body">
                <h5 className="card-title mb-3">{name}</h5>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Grade: {grade}</p>
            </div>
        </div>
    );
};

export default StudentCard;
