export const ACTIONS = {
  DELETE_SOCIALS: "DELETE_SOCIALS",
  CREATE_SOCIALS: "CREATE_SOCIALS",
  EDIT_SOCIALS: "EDIT_SOCIALS",
  RELOAD_EDIT_SOCIALS: "RELOAD_EDIT_SOCIALS",
};

export const deleteSocial = (data?: any) => ({
  type: ACTIONS.DELETE_SOCIALS,
  payload: data,
});

export const createSocial = (data?: any) => ({
  type: ACTIONS.CREATE_SOCIALS,
  payload: data,
});

export const editSocial = (data?: any) => ({
  type: ACTIONS.EDIT_SOCIALS,
  payload: data,
});

export const reloadEditSocial = (data?: any) => ({
  type: ACTIONS.RELOAD_EDIT_SOCIALS,
  payload: data,
});
