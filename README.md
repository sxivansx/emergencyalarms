# Worker Safety Monitoring Dashboard

This dashboard provides real-time monitoring of worker safety using Firebase as the backend.

## Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database in your project
3. Set up the following collections in Firestore:
   - `workers`: For worker data
   - `sensors`: For sensor readings
   - `devices`: For wearable device data
   - `alerts`: For system alerts

4. Update the Firebase configuration in `src/firebase/config.js` with your project details:

\`\`\`javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
\`\`\`

## Data Structure

### Workers Collection
\`\`\`javascript
{
  "id": "worker1",
  "name": "John Smith",
  "position": "Maintenance Engineer",
  "status": "active", // active, warning, critical, offline
  "location": "Zone 1 - Main Floor",
  "heartRate": 72,
  "motionStatus": "moving", // moving, stationary, fallen
  "fallDetected": false,
  "lastUpdated": serverTimestamp()
}
\`\`\`

### Sensors Collection
\`\`\`javascript
{
  "id": "sensor1",
  "name": "Temperature Sensor",
  "value": 24.5,
  "unit": "°C",
  "status": "normal", // normal, warning, critical
  "location": "Zone 1 - Main Floor",
  "lastUpdated": serverTimestamp()
}
\`\`\`

### Devices Collection
\`\`\`javascript
{
  "id": "WD-001",
  "type": "Wearable",
  "assignedTo": "John Smith",
  "batteryLevel": 78,
  "firmwareVersion": "v2.1.4",
  "signalStrength": 85,
  "lastSync": serverTimestamp(),
  "status": "normal" // normal, warning, critical, offline
}
\`\`\`

### Alerts Collection
\`\`\`javascript
{
  "message": "Warning: Elevated heart rate detected for John Smith",
  "level": "warning", // info, warning, critical
  "worker": "John Smith", // optional, can be null
  "timestamp": serverTimestamp()
}
\`\`\`

## Sending Data to Firebase

You can use the utility functions in `src/utils/dataUploader.js` to send data to Firebase from your IoT devices or other systems.

Example:
\`\`\`javascript
import { updateSensorReading } from './utils/dataUploader';

// Update a temperature sensor reading
updateSensorReading('temp-sensor-1', 28.5, 'warning');
\`\`\`

## Testing with Simulated Data

You can use the IoT simulator to generate test data:

\`\`\`javascript
import { runAllSimulations } from './utils/iotSimulator';

// Run all simulations once
runAllSimulations();

// Or set up a periodic simulation
setInterval(runAllSimulations, 30000); // Run every 30 seconds
\`\`\`

## Running the Application

1. Install dependencies:
\`\`\`
npm install
\`\`\`

2. Start the development server:
\`\`\`
npm start
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) to view the dashboard
