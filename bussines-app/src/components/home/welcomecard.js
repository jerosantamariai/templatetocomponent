import React from 'react';

const WelcomeCard = props => {
    return (
        <>
            <div className="col-lg-4 mb-4">
                <div className="card h-100">
                    <h4 className="card-header">{props.title}</h4>
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-footer">
                        <a href="/#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeCard;