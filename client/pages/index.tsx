import React from 'react';
import MainLayout from "../layout/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className={"center"}>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>

                <style jsx>
                    {`
                      .center {
                        margin-top: 200px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                      }
                    `}
                </style>
            </MainLayout>
        </>
    );
};

export default Index;