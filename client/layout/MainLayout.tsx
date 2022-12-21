import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";

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
        </>
    );
};

export default MainLayout;