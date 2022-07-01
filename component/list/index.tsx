import * as React from "react";
import Box from "@mui/material/Box";

import ListItem, { ListItemType } from "./listItem";

type AddSocialProps = {
  items: ListItemType[];
}

function List({ items }: AddSocialProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {
        items.map((item: ListItemType) => {
          return <ListItem item={item} key={item.id} />
        })
      }
    </Box>
  );
}

export default List;
