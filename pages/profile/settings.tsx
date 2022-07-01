import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";

import { getTitle } from "../../helper/getTitle";
import { getLocaleAndPath } from "../../helper/getLocaleAndPath";
import { userSettings } from "../../api/userSettings";
import AddSocial from "../../component/userSettings/addSocial";
import GenerateIcon from "../../component/icon/GenerateIcon";
import List from "../../component/list";
import { ListItemType } from "../../component/list/listItem";
import { useAppState } from "../../context/socialStateContext";

function Settings({ socialList }: { socialList: ListItemType[] }) {
  const { pathname } = getLocaleAndPath();
  const [showAddSocial, setShowAddSocial] = React.useState(false);
  const [socialData, setSocialData] = React.useState(socialList ?? []);
  const appState = useAppState();

  useEffect(() => {
    userSettings().then(res => {
      setSocialData(res.data)
    });
  }, [appState.reload]);

  const onClickAddSocial = () => {
    setShowAddSocial(true);
  }

  return (
    <Paper
      sx={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
        marginTop: "48px",
        padding: "24px",
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          margin: "0px 0px 0.35em",
          fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
          fontWeight: "400",
          fontSize: "0.642857rem",
          lineHeight: "1.66",
          display: "block",
          color: "rgb(121, 131, 142)",
        }}
      >
        {getTitle("socials")}
      </Typography>
      <Button
        variant="text"
        color="warning"
        size="small"
        startIcon={<GenerateIcon variation="Add" />}
        onClick={onClickAddSocial}
        disabled={showAddSocial}
      >

        {getTitle("addSocial")}
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Collapse in={showAddSocial}>
          <AddSocial onShowAddSocial={(show: boolean) => { setShowAddSocial(show) }} />
        </Collapse>
        <List items={socialData} />
      </Box>
    </Paper >
  );
}
export default Settings;
