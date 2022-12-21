import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Card, Button, Grid, Box} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Text example', comments: [], listens: 5, audio: 'http://localhost:5000/audio/1671550986996.mp3', picture: 'http://localhost:5000/image/1671550987000.jpg'},
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Text example 2', comments: [], listens: 3, audio: 'http://localhost:5000/audio/1671550986996.mp3', picture: 'http://localhost:5000/image/1671550987000.jpg'},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={"space-between"}>
                            <h1>Список треков</h1>
                            <Button
                                onClick={() => router.push('/tracks/create')}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;