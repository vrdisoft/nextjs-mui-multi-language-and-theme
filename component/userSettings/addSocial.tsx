import * as React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CardActions from '@mui/material/CardActions';
import Button from "@mui/material/Button";
import { useForm, Controller } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { getTitle, getAllTitle } from "../../helper/getTitle";
import GenerateIcon from "../icon/GenerateIcon";
import { addUserSettings, editUserSettings } from "../../api/userSettings";
import { UserSettingType } from "../../helper/api/userSettingsRepo";
import { useDispatch } from "../../context/socialDispatcherContext";
import { createSocial, editSocial } from "../../stateManager/actionCreator";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type optionType = {
  label: string;
  icon: string;
}

type FormValues = {
  link: string;
  type: optionType;
}

type SocialItemType = {
  id: string;
  social: string;
  url: string;
}

type AddSocialProps = {
  onShowAddSocial: (show: boolean) => void;
  socialItem?: SocialItemType;
}

function AddSocial({ onShowAddSocial, socialItem }: AddSocialProps) {
  /* @ts-ignore: Unreachable code error*/
  const [socialType, setSocialType] = React.useState<optionType>(null);
  const options = React.useRef<optionType[]>([
    { label: "Twitter", icon: "Twitter" },
    { label: "Instagram", icon: "Instagram" },
    { label: "Facebook", icon: "Facebook" },
    { label: "Telegram", icon: "Telegram" },
    { label: "LinkedIn", icon: "LinkedIn" },
    { label: "Website", icon: "Public" },
  ]).current;
  const dispatch = useDispatch();
  const allTitle = getAllTitle();
  const { handleSubmit, control, formState, reset } = useForm<FormValues>({ mode: "onChange", reValidateMode: "onSubmit" });

  React.useEffect(() => {
    if (socialItem) {
      reset({ link: socialItem.url, type: { label: socialItem.social, icon: socialItem.social } });
      setSocialType({ label: socialItem.social, icon: socialItem.social });
    }
  }, []);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const onSubmit = (data: FormValues) => {
    const socialData: UserSettingType = {
      id: socialItem ? socialItem.id : "0",
      social: data?.type?.label,
      url: data?.link
    }

    if (socialItem) {
      updetUserSettings(socialData);
    }
    else {
      insertUserSettings(socialData);
    }

  };

  const insertUserSettings = (socialData: UserSettingType) => {
    addUserSettings(socialData).then(data => {
      dispatch(createSocial());
      resetForm();
    }).catch(err => {
      if (err.data.message === "duplicate-keys") {
        setOpenSnackbar(true);
      }
    });
  }

  const updetUserSettings = (socialData: UserSettingType) => {
    editUserSettings(socialData.id.toString(), socialData).then(data => {
      dispatch(editSocial());
      resetForm();
    });
  }

  const onChangeSocialType = (value: optionType) => {
    setSocialType(value);
  }

  const onCancel = () => {
    resetForm();
  }

  const resetForm = () => {
    reset({ link: "", type: undefined });
    /* @ts-ignore: Unreachable code error*/
    setSocialType(null);
    onShowAddSocial(false);
  }

  return (
    <Paper
      sx={{
        marginTop: "16px",
        borderRadius: "16px",
        backgroundColor: "action.disabled",
        boxShadow: "none",
        padding: "16px",
      }}
    >
      <Box sx={{ marginBottom: "16px" }}>
        <Typography
          variant="h6"
          sx={{
            margin: "0",
            fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
            fontWeight: "500",
            fontSize: "0.75rem",
            lineHeight: "1.57",
          }} >
          {` ${getTitle(socialItem ? "editSocial" : "addSocial")} ${getTitle(socialType?.label)}`}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Controller
              name="type"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Autocomplete
                  id="Social"
                  options={options}
                  autoHighlight
                  value={socialType}
                  getOptionLabel={(option) => {
                    /* @ts-ignore: Unreachable code error*/
                    return option?.label ? allTitle[option.label] : ""
                  }}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ display: "flex", gap: "16px" }} {...props}>
                      <GenerateIcon variation={option.icon} />
                      {/* @ts-ignore: Unreachable code error*/}
                      {allTitle[option.label]}
                    </Box>
                  )}
                  isOptionEqualToValue={(option, value) => option.label === value.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={getTitle("type")}
                      color="warning"
                      size="small"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                      error={!!error}
                      helperText={error ? error.message : null}
                    //value={socialType}
                    />
                  )}
                  onChange={
                    (e, data) => {
                      onChangeSocialType(data || { label: "", icon: "" });
                      onChange(data);
                    }}
                />
              )}
              rules={{ required: getTitle("fieldRequired") }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Controller
              name="link"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  id="link"
                  label={getTitle("link")}
                  error={!!error}
                  helperText={error ? error?.type === "required" ? getTitle("fieldRequired") : getTitle("fillCorrectURL") : null}
                  size="small"
                  color="warning"
                  sx={{ width: "100%", lineHeight: "1.4375em" }}
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: true,
                pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
              }}
            />
          </Grid>
        </Grid>
      </form>
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          padding: 0,
          gap: "8px",
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
          onClick={onCancel}
        >
          {getTitle("cancel")}
        </Button>
        <Button
          variant="contained"
          color="warning"
          disabled={!formState.isValid}
          onClick={handleSubmit(onSubmit)}
          sx={{
            fontWeight: "500",
            fontSize: "0.696429rem",
            lineHeight: "1.75",
          }}
          size="small"
        >
          {` ${getTitle(socialItem ? "editSocial" : "submitSocial")} ${getTitle(socialType?.label)}`}
        </Button>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {getTitle("duplicate")}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default AddSocial;
