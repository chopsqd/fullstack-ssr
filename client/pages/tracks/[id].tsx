import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layout/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
    const track: ITrack = {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Text example 2', comments: [], listens: 3, audio: 'https://cdn.mp3xa.me/igVjAGEnQqX30AkW4AnCgQ/1671650303/L29ubGluZS9tcDMvMjAyMi8wMy9BbGVrcyBBdGFtYW4gJiBGaW5pay5GaW55YSAtINCU0LXQstC-0YfQutCwINCR0LDQvdC00LjRgtC60LAgKFNhc2hhIEZpcnN0IFJhZGlvIFJlbWl4KS5tcDM', picture: 'https://phonoteka.org/uploads/posts/2021-05/1621693392_8-phonoteka_org-p-fon-dlya-oblozhek-trekov-9.jpg'}
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} alt={track.name} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h3>Название: {track.name}</h3>
                    <h3>Исполнитель: {track.artist}</h3>
                    <h3>Прослушиваний: {track.listens}</h3>
                </div>
            </Grid>
            <h3>Слова в треке</h3>
            <p>{track.text}</p>
            <h3>Комментарии</h3>
            <Grid container>
                <TextField
                    label={"Ваше имя"}
                    fullWidth
                />
                <TextField
                    style={{marginTop: 10}}
                    label={"Комментарий"}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button style={{marginTop: 10}} variant={"outlined"}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div key={comment._id}>
                        <div>Автор: {comment.username}</div>
                        <div>Комментарий: {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;