import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonListHeader,
    IonText,
} from "@ionic/react";
import React, {useState} from "react";
import './TidalCalender.css';

interface HistoryEntry {
    dateTime: string;
    morning: number;
    afternoon: number;
}

function TidalCalender() {
    const [morning, setMorning] = useState<string>("");
    const [afternoon, setAfternoon] = useState<string>("");
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const handleLog = () => {
        const morningValue = parseFloat(morning);
        const afternoonValue = parseFloat(afternoon);

        if (!isNaN(morningValue) && !isNaN(afternoonValue)) {
            const entry: HistoryEntry = {
                dateTime: currentDate.toISOString().split('T')[0],
                morning: morningValue,
                afternoon: afternoonValue,
            };
            setHistory([...history, entry]);

            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 1);
            setCurrentDate(newDate);
        }

        setMorning("");
        setAfternoon("");
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tidal Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="container">
                    <div className="fixed-top">
                        <IonItem>
                            <IonLabel>Morning</IonLabel>
                            <IonInput
                                type="number"
                                value={morning}
                                onIonInput={(e) => setMorning(e.detail.value!)}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Afternoon</IonLabel>
                            <IonInput
                                type="number"
                                value={afternoon}
                                onIonInput={(e) => setAfternoon(e.detail.value!)}
                            />
                        </IonItem>
                        <IonButton expand="block" onClick={handleLog} className="log-button">
                            Log
                        </IonButton>
                    </div>
                    <div className="scrollable-content">
                        <IonList>
                            <IonListHeader>
                                <IonLabel>Tidal Data</IonLabel>
                            </IonListHeader>
                            {history.map((entry, index) => (
                                <IonItem key={index}>
                                    <IonText>{`${entry.dateTime}, ${entry.morning}, ${entry.afternoon}`}</IonText>
                                </IonItem>
                            ))}
                        </IonList>
                    </div>
                </div>
            </IonContent>
        </>
    );
}

export default TidalCalender;
