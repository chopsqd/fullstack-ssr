import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import {IComment, ITrack} from "../../types/track";
import {useInput} from "../../hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const text = useInput('')
()
    const addComment = () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (error) {
            console.log(error)
        }
    }

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
                <img src={'http://localhost:5000/' + track.picture} alt={track.name} width={200} height={200}/>
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
                    {...username}
                    label={"Ваше имя"}
                    fullWidth
                />
                <TextField
                    {...text}
                    style={{marginTop: 10}}
                    label={"Комментарий"}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment} style={{marginTop: 10}} variant={"outlined"}>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map((comment: IComment) =>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params!.id)

    return {
        props: {serverTrack: response.data}
    }
}