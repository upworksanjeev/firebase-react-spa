import React from "react";
import Notifications from "./Notifications";
import { Box, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box width="100%" maxWidth="800px">
          <Typography variant="h4" align="center" gutterBottom>
            Notifications
          </Typography>
          <Notifications />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
