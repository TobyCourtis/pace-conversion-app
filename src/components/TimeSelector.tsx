import React, {useState} from 'react';
import {IonContent, IonDatetime} from '@ionic/react';
import './TimeSelector.css';

const TimeSelector = () => {
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (e) => {
        setSelectedTime(e.detail.value);
        console.log('Selected Time:', console.log(selectedTime));
    };

    return (
        <IonContent className="ion-padding no-scroll time-selector-content">
            <div className={'time-selector-datetime-div'}>
                <IonDatetime
                    presentation="time"
                    displayFormat="HH:mm"
                    pickerFormat="HH:mm"
                    onIonChange={handleTimeChange}
                    className="time-selector-datetime"
                />
            </div>
        </IonContent>
    );
};

export default TimeSelector;
