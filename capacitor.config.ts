import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.paceconverter.app',
    appName: 'pace-converter',
    webDir: 'dist'
};

// add the below to the CapacitorConfig if you want capacitor's web server to act as a proxy to the URL below
// this is one way of enabling live reloading. See README for more.
// server: {
//     url: 'http://192.168.55.166:8100',
//         cleartext: true
// }

export default config;
