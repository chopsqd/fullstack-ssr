import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Card, Button, Grid, Box} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Text example', comments: [], listens: 5, audio: 'https://cdn.mp3xa.me/igVjAGEnQqX30AkW4AnCgQ/1671650303/L29ubGluZS9tcDMvMjAyMi8wMy9BbGVrcyBBdGFtYW4gJiBGaW5pay5GaW55YSAtINCU0LXQstC-0YfQutCwINCR0LDQvdC00LjRgtC60LAgKFNhc2hhIEZpcnN0IFJhZGlvIFJlbWl4KS5tcDM', picture: 'https://phonoteka.org/uploads/posts/2021-05/1621693392_8-phonoteka_org-p-fon-dlya-oblozhek-trekov-9.jpg'},
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Text example 2', comments: [], listens: 3, audio: 'https://cdn.mp3xa.me/igVjAGEnQqX30AkW4AnCgQ/1671650303/L29ubGluZS9tcDMvMjAyMi8wMy9BbGVrcyBBdGFtYW4gJiBGaW5pay5GaW55YSAtINCU0LXQstC-0YfQutCwINCR0LDQvdC00LjRgtC60LAgKFNhc2hhIEZpcnN0IFJhZGlvIFJlbWl4KS5tcDM', picture: 'https://phonoteka.org/uploads/posts/2021-05/1621693392_8-phonoteka_org-p-fon-dlya-oblozhek-trekov-9.jpg'},
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