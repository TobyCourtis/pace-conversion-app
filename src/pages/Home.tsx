import React from 'react';
import './Home.css';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import PaceCalculator from "./PaceCalculator";


function Home() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pace Converter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={'no-scroll'}>
                <PaceCalculator/>
            </IonContent>
        </>
    );
}

export default Home;

