import React, {useState} from 'react';
import {IonContent, IonDatetime} from '@ionic/react';
import './TimeSelector.css';

const TimeSelector = () => {
    const [selectedTime, setSelectedTime] = useState<string>("05:30");

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

    return (
        <IonContent className="ion-padding no-scroll time-selector-content">
            <div className={'time-selector-datetime-div centre'}>
                <IonDatetime
                    presentation="time"
                    displayFormat="HH:mm"
                    pickerFormat="HH:mm"
                    onIonChange={handleTimeChange}
                    className="time-selector-datetime"
                    value={selectedTime}
                />
            </div>

            <div className={'converted-time-div centre'}>
                {selectedTime &&
                    <h1>{convertToSpeed(selectedTime)} km/h</h1>
                }
            </div>

            <button onClick={() => console.log(selectedTime)}>Log the time</button>
        </IonContent>
    );
};

export default TimeSelector;
