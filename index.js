const { PublishPod } = require("@dendronhq/pods-core");

class HelloPod extends PublishPod {
  static id = "hello";
  static description = "Add a hello statement";

  async plant(opts) {
    const { note } = opts;
    const body = note.body;
    return ["Hello World", body].join("\n");
  }
}

module.exports = {
  pods: [HelloPod],
};
