const fs = require('fs');

export type UserSettingType = {
  id: number;
  url: string;
  social: string;
}

let userSettings = require('./data/userSettinds.json') as UserSettingType[];

function create(userSetting: UserSettingType) {
  userSetting.id = userSettings.length ? Math.max(...userSettings.map(x => x.id)) + 1 : 1;

  userSettings.push(userSetting);
  saveData();
}

function update(userSetting: UserSettingType) {
  const tempUserSetting = userSettings.find(x => x.id.toString() === userSetting.id.toString());

  if (!!tempUserSetting) {
    tempUserSetting.url = userSetting.url;
    tempUserSetting.social = userSetting.social;
  }

  saveData();
}


function _delete(id: number) {
  userSettings = userSettings.filter(x => x.id.toString() !== id.toString());
  saveData();

}

function saveData() {
  fs.writeFileSync('data/userSettinds.json', JSON.stringify(userSettings, null, 2));
}

export const userSettingsRepo = {
  getAll: () => userSettings,
  getById: (id: number) => userSettings.find(x => x.id.toString() === id.toString()),
  create,
  update,
  delete: _delete
}
