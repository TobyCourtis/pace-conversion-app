import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

function TidalCalender() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tidal Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={'no-scroll'}>
                <h1>Calendar here</h1>

            </IonContent>
        </>
    );
}

export default TidalCalender;