import React, { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Welcome from './components/home/welcome';
import Portfolio from './components/portfolio';
import ModernBusiness from './components/modernbusiness';
import Action from './components/action';
import Footer from './components/footer';

const Home = props => {

    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'https://picsum.photos/seed/people/1900/1080/?blur=2',
                title: "First Slide",
                description: "This is a description for the first slide."
            },
            {
                id: 2,
                image: 'https://picsum.photos/seed/tech/1900/1080/?blur=2',
                title: "Second Slide",
                description: "This is a description for the second slide."
            },
            {
                id: 3,
                image: 'https://picsum.photos/seed/nature/1900/1080/?blur=2',
                title: "Third Slide",
                description: "This is a description for the third slide."
            }
        ],

        infoWelcome: [
            {
                title: "Card Title 1",
                text: "Informacion titulo 1"
            },
            {
                title: "Card Title 2",
                text: "Informacion titulo 2"
            },
            {
                title: "Card Title 3",
                text: "Informacion titulo 3"
            },
            {
                title: "Card Title 4",
                text: "Informacion titulo 4"
            },
            {
                title: "Card Title 5",
                text: "Informacion titulo 5"
            },
            {
                title: "Card Title 6",
                text: "Informacion titulo 6"
            }
        ],

        infoportfolio: [
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 1",
                body: "body de proyecto numero 1"
            },
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 2",
                body: "body de proyecto numero 2"
            },
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 3",
                body: "body de proyecto numero 3"
            },
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 4",
                body: "body de proyecto numero 4"
            },
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 5",
                body: "body de proyecto numero 5"
            },
            {
                portimg: "https://picsum.photos/seed/picsum/700/400",
                title: "title 6",
                body: "body de proyecto numero 6"
            }
        ]
    })

    return (
        <>
            <Navbar />
            <Header slide={state.galery} />
            <div className="container">
                <Welcome infoWelcome={state.infoWelcome} />
                <Portfolio infoportfolio={state.infoportfolio} />
                <ModernBusiness />
                <hr />
                <Action />
            </div>
            <Footer />
        </>
    )
}
export default Home;