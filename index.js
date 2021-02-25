const { PublishPod } = require("@dendronhq/pods-core");

class HelloPod extends PublishPod {
  static id = "hello";
  static description = "Add a hello statement";

  get config() {
    return super.config.concat([
      {
        key: "name",
        description: "dev.to api key",
        type: "string",
      },
    ]);
  }

  async plant(opts) {
    const { note, config } = opts;
    const body = note.body;
    return [`Hello ${config.name}`, body].join("\n");
  }
}

module.exports = {
  pods: [HelloPod],
};
