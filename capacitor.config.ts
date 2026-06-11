import type { CapacitorConfig } from '@capacitor/cli';

const devServerUrl = process.env.DEV_SERVER_URL;

const config: CapacitorConfig = {
  appId: 'com.andrewdev.mashit',
  appName: 'MASHIT',
  webDir: 'dist',
  ...(devServerUrl ? {
    server: {
      url: devServerUrl,
      cleartext: true
    }
  } : {})
};

export default config;
