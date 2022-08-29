import { Box, Button, TypographyStylesProvider } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TypographyStylesProvider
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        Выбери с кем будешь сражаться
      </TypographyStylesProvider>
      <Button
        sx={{ backgroundColor: "#2EFFD0", margin: "20px" }}
        onClick={() => {
          navigate("/twoplayer");
        }}
      >
        Agent vs Agent
      </Button>
      <Button
        sx={{ backgroundColor: "#2EFFD0", margin: "20px" }}
        onClick={() => {
          navigate("/batya");
        }}
      >
        Batya vs Agent
      </Button>
    </Box>
  );
}

export default Main;
