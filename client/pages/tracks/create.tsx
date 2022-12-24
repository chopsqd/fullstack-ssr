import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";
import {useRouter} from "next/router";
import axios from "axios";

const Create = () => {
    const router = useRouter()
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null as any)
    const [audio, setAudio] = useState(null as any)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            axios.post('http://localhost:5000/tracks', formData)
                .then(res => router.push('/tracks'))
                .catch(error => console.log(error))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{padding: 20}}>
                        <TextField
                            {...name}
                            style={{marginTop: 10}}
                            label={"Название трека"}
                        />
                        <TextField
                            {...artist}
                            style={{marginTop: 10}}
                            label={"Исполнитель"}
                        />
                        <TextField
                            {...text}
                            style={{marginTop: 10}}
                            label={"Слова к треку"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }

                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept={"image/*"}>
                        <Button>Загрузите изображение</Button>
                    </FileUpload>
                }

                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept={"audio/*"}>
                        <Button>Загрузите аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;