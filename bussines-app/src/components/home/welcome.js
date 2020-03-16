import React from 'react';
import WelcomeCard from './welcomecard';

const Welcome = props => {
    return (
        <>
            <h1 className="my-4">Welcome to Modern Business</h1>
            <div className="row">
                {
                    !!props.infoWelcome &&
                    props.infoWelcome.map((elem, i) => {
                        return (
                            <WelcomeCard
                                title={elem.title}
                                text={elem.text}
                            />
                        )
                    })

                }


            </div>
        </>
    )
}

export default Welcome;