import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { globalContext } from "../../context/context";
import useStyles from "./styles";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo";

const Package = (props) => {
  const styles = useStyles();
  const { agentInfo } = useContext(globalContext);

  return (
    <Container className={styles.container}>
      {agentInfo && <ProfileHeader data={agentInfo} />}
      {agentInfo && <ProfileInfo data={agentInfo} />}
    </Container>
  );
};

export default Package;

// ["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"].
