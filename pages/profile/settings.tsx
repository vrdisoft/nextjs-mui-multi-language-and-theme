import Paper from "@mui/material/Paper";

function Settings() {
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
      <Paper
        sx={{
          marginTop: "20px",
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "action.selected",
          boxShadow: "none",
        }}
      >
        Home
      </Paper>
      <Paper
        sx={{
          marginTop: "20px",
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "action.disabled",
          boxShadow: "none",
        }}
      >
        Home
      </Paper>
    </Paper>
  );
}
export default Settings;
