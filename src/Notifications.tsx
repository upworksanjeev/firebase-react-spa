import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const fetchNotifications = async () => {
    const q = query(
      collection(db, "notifications"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const notificationsData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNotifications(notificationsData);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleButtonClick = async (message: string) => {
    await addDoc(collection(db, "notifications"), {
      message,
      read: false,
      createdAt: new Date(),
    });
    fetchNotifications();
  };

  const handleItemClick = async (id: string) => {
    const notificationRef = doc(db, "notifications", id);
    await updateDoc(notificationRef, { read: true });
    fetchNotifications();
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "No date available";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  return (
    <Card
      variant="outlined"
      style={{ width: "100%", maxWidth: 600, margin: "auto" }}
    >
      <CardHeader title="Add New Notifications" />
      <CardContent>
        <Box mb={3}>
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick("Notification 1")}
              style={{ marginRight: 8 }}
            >
              Button 1
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleButtonClick("Notification 2")}
              style={{ marginRight: 8 }}
            >
              Button 2
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleButtonClick("Notification 3")}
            >
              Button 3
            </Button>
          </Box>
        </Box>
        <Typography variant="h6" gutterBottom>
          Notification List
        </Typography>
        <List>
          {notifications.map((notification) => (
            <ListItem
              key={notification.id}
              button
              onClick={() => handleItemClick(notification.id)}
              style={{
                backgroundColor: notification.read ? "#ffffff" : "#e0e0e0",
                color: notification.read ? "#000000" : "#757575",
                border: "1px solid #ddd",
                marginBottom: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              <ListItemText
                primary={notification.message}
                secondary={formatDate(notification.createdAt)}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Notifications;
