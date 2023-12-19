import React from "react";
import { Link } from "react-router-dom";
import { Typography, Divider, Container, Paper } from "@material-ui/core";

const NotFoundError = () => {
  return (
    <Container component={Paper}>
      <Typography variant="h5" gutterBottom>
        Oops! can't find what you looking for.
        <Divider />
        <Button fullWidth component={Link} to={"/category"}>
          Go back
        </Button>
      </Typography>
    </Container>
  );
};

export default NotFoundError;
