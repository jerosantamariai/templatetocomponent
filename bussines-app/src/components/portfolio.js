import React from 'react';
import Portfoliocard from './home/portfoliocard';

const Portfolio = props => {
    return (
        <>
            <h2>Portfolio Heading</h2>
            <div className="row">
            {
                        !!props.infoportfolio &&
                        props.infoportfolio.map((elem, i) => {
                            return (
                                <Portfoliocard 
                                    portimg={elem.portimg}
                                    title={elem.title}
                                    body={elem.body}
                                />
                            )
                        })
                        
                    }

                                                   
            </div>
        </>
    )
}

export default Portfolio;