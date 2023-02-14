import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "San Serif",
    padding: theme.spacing(3, 2),
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "calc(100vh - 56px)",
  },
  heading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h3" className={classes.heading}>
        Transport Management
      </Typography>
      <Typography variant="body1">
        Transport Management is a web-based platform designed to simplify and
        streamline the transportation and logistics process. Our mission is to
        provide a convenient and efficient solution for managing the
        transportation of goods, from point A to point B.
      </Typography>
      <Typography variant="body1">
        With our platform, users can easily track shipments, manage deliveries,
        and coordinate with drivers in real-time. We also offer a range of tools
        and features to help businesses optimize their operations and improve
        their bottom line.
      </Typography>
      <Typography variant="body1">
        Whether you're a small business just starting out or a large corporation
        with a complex supply chain, Transport Management has the tools you need
        to succeed.
      </Typography>
    </Container>
  );
};

export default About;
