import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import ProgressBar from "./ProgressBar";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

let audio: any;

const Player: React.FC = () => {
    const {active, pause, duration, currentTime, volume} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions()

    useEffect(() => {
        if(!audio) {
            audio = new Audio()
        } else {
            audioInit()
            play()
        }
    }, [active])

    const audioInit = () => {
        if(active) {
            audio.src = 'http://localhost:5000/' + active.audio
            audio.volume = volume / 100
            // callback, потому что сработает только после загрузки трека
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            // callback, который срабатывает на каждое изменение времени
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if(pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(event.target.value) / 100
        setVolume(Number(event.target.value))
    }

    const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(event.target.value)
        setCurrentTime(Number(event.target.value))
    }

    if(!active) {
        return null
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction={"column"} style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
            </Grid>
            <ProgressBar left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <ProgressBar left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;