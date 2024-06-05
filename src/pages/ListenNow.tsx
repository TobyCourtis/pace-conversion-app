import React from 'react';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';

const ListenNow = () => (
    <>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Listen now</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className={'no-scroll'}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                Listen now content
            </div>
        </IonContent>
    </>
);

export default ListenNow;