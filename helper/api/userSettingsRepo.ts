const fs = require('fs');
import jsonFile from '../../data/userSettinds.json' assert {type: 'json'};

export type UserSettingType = {
  id: string;
  url: string;
  social: string;
}

let userSettings = jsonFile as UserSettingType[];

function create(userSetting: UserSettingType) {
  userSetting.id = userSettings.length ? (Math.max(...userSettings.map(x => Number(x.id))) + 1).toString() : "1";

  userSettings.push(userSetting);
  saveData();
}

function update(userSetting: UserSettingType) {
  const tempUserSetting = userSettings.find(x => x.id.toString() === userSetting.id.toString());

  if (!!tempUserSetting) {
    tempUserSetting.url = userSetting.url;
    tempUserSetting.social = userSetting.social;
  }
  console.log()
  saveData();
}

function _delete(id: string) {
  userSettings = userSettings.filter(x => x.id !== id);
  saveData();
}

function saveData() {
  fs.writeFileSync('data/userSettinds.json', JSON.stringify(userSettings, null, 2));
}

export const userSettingsRepo = {
  getAll: () => userSettings,
  getById: (id: string) => userSettings.find(x => x.id === id),
  getByUrl: (url: string, social: string) => userSettings.find(x => x.url === url && x.social === social),
  create,
  update,
  delete: _delete
}
