const IFilter = require("./IFilter");
const { Client } = require("wolf.js");
const CommandContext = require("../CommandContext");

module.exports = class Banded extends IFilter {
  #Maker = 80512250;
  /**
   * Only Bot Maker Can Use This Command.
   */
  constructor() {
    super();
    this.FailedMessage = "مالي خلق الرد عليك.";
  }
  /**
   *
   * @param {Client} client
   * @param {CommandContext} context
   */
  Validate = async (client, context) => {
    try {
      if (context.User.Id === this.#Maker) return false;
    } catch (e) {
      return false;
    }
  };
};
