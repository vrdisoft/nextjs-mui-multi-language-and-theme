import * as React from "react";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Modal from "@mui/material/Modal";
import CardActions from '@mui/material/CardActions';
import Button from "@mui/material/Button";
import { useForm, Controller } from 'react-hook-form';

import { getTitle, getAllTitle } from "../../helper/getTitle";
import GenerateIcon from "../icon/GenerateIcon";
import { deletUserSettings } from "../../api/userSettings";
import AddSocial from "../userSettings/addSocial";
import { useDispatch } from "../../context/socialDispatcherContext";
import { deleteSocial } from "../../stateManager/actionCreator";

export type ListItemType = {
  id: string;
  social: string;
  url: string;
}

type ListItemProps = {
  item: ListItemType;
}

function ListItem({ item }: ListItemProps) {
  const dispatch = useDispatch();
  const [showEditSocial, setShowEditSocial] = React.useState(false);
  const onClickEditSocial = () => {
    setShowEditSocial(true);
  }
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const onDeletUserSettings = () => {
    deletUserSettings(item.id, item).then((res) => {
      dispatch(deleteSocial());
      handleCloseModal();
    });
  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Paper
      sx={{
        borderRadius: "16px",
        backgroundColor: "action.selected",
        boxShadow: "none",
        padding: "16px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={9} sm={9}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <GenerateIcon variation={item?.social} />
              <Typography variant="body1">{getTitle(item.social)}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography variant="caption">{getTitle("link") + " : "}</Typography>
              <Link href={item.url} >
                <a style={{ color: "rgb(255, 168, 46)" }}>
                  {item.url}
                </a>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button
            variant="text"
            color="warning"
            startIcon={<GenerateIcon variation="Edit" />}
            size="small"
            onClick={onClickEditSocial}
            disabled={showEditSocial}
          >
            {getTitle("edit")}
          </Button>
          <Button
            variant="text"
            color="error"
            startIcon={<GenerateIcon variation="Delete" />}
            size="small"
            onClick={handleOpenModal}
          >
            {getTitle("delete")}
          </Button>
        </Grid>
      </Grid>
      <Collapse in={showEditSocial}>
        <AddSocial
          onShowAddSocial={(show: boolean) => { setShowEditSocial(show) }}
          socialItem={item}
        />
      </Collapse>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {getTitle("areYouSure")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "20px",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              color="warning"
              sx={{
                fontWeight: "500",
                fontSize: "0.696429rem",
                lineHeight: "1.75",
              }}
              size="small"
              onClick={handleCloseModal}
            >
              {getTitle("cancel")}
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="small"
              onClick={onDeletUserSettings}
            >
              {getTitle("delete")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
}

export default ListItem;
