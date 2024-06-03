import React from 'react';
import './Home.css';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import TimeSelector from "../components/TimeSelector";


function Home() {
    return (
        <IonPage className={'home-page'}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pace Converter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={'no-scroll'}>
                <TimeSelector/>
            </IonContent>
        </IonPage>
    );
}

export default Home;

