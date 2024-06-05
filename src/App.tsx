import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';


import React from 'react';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';

import './App.css';
import TidalCalender from "./Tidal Calender/TidalCalender";

import {Redirect, Route} from 'react-router';

import {library, playCircle, radio, search} from 'ionicons/icons';

import ListenNow from './pages/ListenNow';
import SearchPage from "./pages/SearchPage";
import PaceCalculator from "./pages/PaceCalculator";

setupIonicReact();

function App() {

    return (
        <IonApp className={'app-content'}>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Redirect exact path="/" to="/home"/>
                        <Route path="/home" render={() => <PaceCalculator/>} exact={true}/>
                        <Route path="/tidal" render={() => <TidalCalender/>} exact={true}/>
                        <Route path="/library" render={() => <ListenNow/>} exact={true}/>
                        <Route path="/search" render={() => <SearchPage/>} exact={true}/>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon icon={playCircle}/>
                            <IonLabel>Pace Calculator</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="tidal" href="/tidal">
                            <IonIcon icon={radio}/>
                            <IonLabel>Tidal Calendar</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="library" href="/library">
                            <IonIcon icon={library}/>
                            <IonLabel>Library</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="search" href="/search">
                            <IonIcon icon={search}/>
                            <IonLabel>Search</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;


