# Firebase/React SPA with Notification System

This project is a React Single Page Application (SPA) integrated with Firebase for managing notifications. Users can add new notifications, view them in a scrollable list, and mark them as read by clicking on them. Notifications are ordered by creation date, and their appearance changes based on whether they are read or unread.

## Features

- **Add Notifications**: Use buttons to create new notifications.
- **View Notifications**: Display notifications in a scrollable list, sorted by the most recent first.
- **Mark as Read**: Click on a notification to mark it as read; the appearance updates accordingly.
- **Design**: Professional UI with Material-UI (MUI) components.
- **Styling**: Consistent button spacing and alternating colors for read and unread notifications.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Firebase**: Backend platform for real-time data with Firestore.
- **Material-UI (MUI)**: React component library for building responsive and styled components.
- **TypeScript**: Superset of JavaScript that adds static types.

## Setup and Installation

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- Firebase project setup with Firestore

### Clone the Repository

```bash
git clone https://github.com/upworksanjeev/firebase-react-spa.git
cd firebase-react-spa
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Configure Firebase in .env file

```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

```

### Start the Development Server

```bash
npm start
# or
yarn start

```

### Build the Project

```bash
npm run build
# or
yarn build

```
