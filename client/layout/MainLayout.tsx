import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";
import {Head} from "next/document";

interface MainLayoutProps {
    children: React.ReactNode
    title?: string
    description?: string
    keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальная площадка'}</title>
                <meta name={"description"} content={`
                    Музыкальная площадка. Здесь каждый может загрузить свой трек и стать популярным!
                    ${description}`
                }/>
                <meta name={"robots"} content={"index, follow"}/>
                <meta name={"keywords"} content={keywords || "Музыка, треки, исполнители, подкасты, аудиокниги"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;