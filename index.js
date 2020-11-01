const { Plugin } = require('powercord/entities');
const { i18n: { Messages } } = require('powercord/webpack');

const i18n = require('./i18n');

module.exports = class BringBackGamerTexts extends Plugin {
  startPlugin () {
    powercord.api.i18n.loadAllStrings(i18n);

    // Strings that are the same in every language
    Messages.VERIFICATION_LEVEL_HIGH = "(╯°□°）╯︵ ┻━┻";
    Messages.VERIFICATION_LEVEL_VERY_HIGH = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻";
  }
};
