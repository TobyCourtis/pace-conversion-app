import React, {useState} from 'react';
import {IonButton, IonContent, IonDatetime} from '@ionic/react';
import './TimeSelector.css';
import {IonIcon} from '@ionic/react';
import {arrowDownOutline} from 'ionicons/icons';

import {Haptics} from '@capacitor/haptics';

const hapticsVibrate = async () => {
    await Haptics.vibrate();
};

const TimeSelector = () => {
    const [selectedTime, setSelectedTime] = useState<string>("05:30");
    const [history, setHistory] =
        useState<{ time: string; speed: string }[]>([]);

    const handleTimeChange = (e: CustomEvent) => {
        const newTime = e.detail.value!;
        setSelectedTime(newTime);
    };

    const convertToSpeed = (time: string): string => {
        if (!time) {
            return "";
        }

        const [minsString, secsStr] = time.split(":");
        const mins: number = parseInt(minsString, 10);
        const secs: number = parseInt(secsStr, 10);

        return (3600 / ((mins * 60) + secs)).toFixed(1).toString();
    }

    const handleLogTime = () => {
        const speed = convertToSpeed(selectedTime);
        const newEntry = {time: selectedTime, speed};

        const alreadyExists = history.some(entry => entry.time === newEntry.time);

        hapticsVibrate()
        if (alreadyExists) {
            console.log('TODO - show modal saying already added');
        } else {
            setHistory(prevHistory => [...prevHistory, newEntry]);
        }
    };


    return (
        <IonContent className="ion-padding no-scroll time-selector-content">
            <div className={'time-selector-datetime-div centre'}>
                <IonDatetime
                    presentation="time"
                    onIonChange={handleTimeChange}
                    className="time-selector-datetime"
                    value={selectedTime}
                />
            </div>

            <IonIcon icon={arrowDownOutline} className={'centre'} id={'arrow-down'}/>

            <div className={'converted-time-div centre'}>
                {selectedTime &&
                    <h1>{convertToSpeed(selectedTime)} km/h</h1>
                }
            </div>

            <div className="history-section">
                <div className="history-header">
                    <h2 id={'history-title'}>History</h2>
                    <IonButton color="medium" onClick={handleLogTime} id={'save-button'} size={'small'}>
                        Save
                    </IonButton>
                </div>
                <ul>
                    {history.length > 0 ? (
                        history.map((entry, index) => (
                            <li key={index}>
                                {entry.time} min/km - <strong>{entry.speed} km/h</strong>
                            </li>
                        ))
                    ) : (
                        <>
                            <br/>
                            <p>Press save to add results to history</p>
                        </>
                    )}
                </ul>

            </div>
        </IonContent>
    );
};

export default TimeSelector;
