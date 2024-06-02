import React from 'react';
import './Home.css';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';


function Home() {
    return (
        <IonPage>
            <IonHeader>|
                <IonToolbar>
                    <IonTitle>PaceCalculator</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
}

export default Home;

