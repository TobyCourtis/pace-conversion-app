# Running Pace Conversion App

An Ionic test!!

Currently, supports pace to speed e.g 5min/km -> 12km/h

<br>

## Requirements

- node v20.0.0

## Frontend

#### Start

`ionic serve`

#### Fronted client manual run

`npx tsx BackendClient.ts`

## Backend

`cd backend && npm start`


## Building frontend

`npm run build`

`npx cap sync`

`npx cap open ios`


live reload command, looking at local host. Port 8100 set in capacitor.config.ts

`ionic cap run ios -l --external`  - works live

`npx cap run ios --livereload --external --address localhost` - needs testing for exact use case. Probably takes capacitor.config.ts conf.

Full command for prod build and sync

`npm run build && npx cap sync ios && npx cap open ios`