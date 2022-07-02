import { FlashOnRounded } from "@material-ui/icons";
import { ACTIONS } from "./actionCreator";

export type AppStateType = {
  reload: boolean;
  reloadEditSocials: boolean;
};

export type ActinType = {
  type: string;
  payload?: any;
};

export const INIT_STATE: AppStateType = {
  reload: false,
  reloadEditSocials: false,
};

function handleDeleteSocials(state: AppStateType, payload: any) {
  return {
    ...state,
    reload: !state.reload,
  };
}

function handleCreateSocials(state: AppStateType, payload: any) {
  return {
    ...state,
    reload: !state.reload,
  };
}

function handleEditSocials(state: AppStateType, payload: any) {
  return {
    ...state,
    reload: !state.reload,
  };
}

function handleReloadEditSocials(state: AppStateType, payload: any) {
  return {
    ...state,
    reloadEditSocials: !state.reloadEditSocials,
  };
}

const ACTION_HANDLERS = {
  [ACTIONS.DELETE_SOCIALS]: handleDeleteSocials,
  [ACTIONS.CREATE_SOCIALS]: handleCreateSocials,
  [ACTIONS.EDIT_SOCIALS]: handleEditSocials,
  [ACTIONS.RELOAD_EDIT_SOCIALS]: handleReloadEditSocials,
};

export function reducer(state: AppStateType, action: ActinType) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
}
