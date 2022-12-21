import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import ProgressBar from "./ProgressBar";

const Player: React.FC = () => {
    const active = false
    const track: ITrack = {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Text example 2', comments: [], listens: 3, audio: 'https://cdn.mp3xa.me/igVjAGEnQqX30AkW4AnCgQ/1671650303/L29ubGluZS9tcDMvMjAyMi8wMy9BbGVrcyBBdGFtYW4gJiBGaW5pay5GaW55YSAtINCU0LXQstC-0YfQutCwINCR0LDQvdC00LjRgtC60LAgKFNhc2hhIEZpcnN0IFJhZGlvIFJlbWl4KS5tcDM', picture: 'https://phonoteka.org/uploads/posts/2021-05/1621693392_8-phonoteka_org-p-fon-dlya-oblozhek-trekov-9.jpg'}

    return (
        <div className={styles.player}>
            <IconButton>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction={"column"} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <ProgressBar left={0} right={100} onChange={() => {}}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <ProgressBar left={0} right={100} onChange={() => {}}/>
        </div>
    );
};

export default Player;