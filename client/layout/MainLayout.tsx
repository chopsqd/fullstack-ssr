import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";

interface Props {
    children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;