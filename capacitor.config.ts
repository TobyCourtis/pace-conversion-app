import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.paceconverter.app',
  appName: 'pace-converter',
  webDir: 'dist',
  server: {
    url: 'http://localhost:8100',
    cleartext: true
  }
};

export default config;
