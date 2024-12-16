import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Success icon
import DoneAllIcon from "@mui/icons-material/DoneAll"; // Success checkmark icon

const RegistrationSuccess = () => {
  const handleLoginRedirect = () => {
    // Logic to redirect to login page
    window.location.href = import.meta.env.VITE_JARVIS_LOGIN;
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <DoneAllIcon
        sx={{ fontSize: 80, color: "rgb(241, 85, 108)", marginBottom: "20px" }}
      />
      {/* Specific heading for the success message */}
      <Typography variant="h4" gutterBottom>
        Registration Successful!
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <CheckCircleIcon
          color="success"
          sx={{ fontSize: 40, marginRight: 1 }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Please verify your email to complete the process.
        </Typography>
      </Box>

      {/* Description text */}
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We've sent a verification link to your email. Please check your inbox
        and follow the instructions to activate your account.
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgb(241, 85, 108)",
        }}
        onClick={handleLoginRedirect}
      >
        Go to Login
      </Button>
    </Container>
  );
};

export default RegistrationSuccess;
