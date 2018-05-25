const spinalCore = require("spinal-core-connectorjs");
const SpinalBIMObject = require("SpinalBIMObject");

class SpinalBIMObjectForge extends SpinalBIMObject {
  constructor(_id, _name, _group, _display, _color, name =
    "SpinalBIMObjectForge") {
    super(_id, _name, _group, _display, _color);
  }

  fillName() {
    return new Promise((resolve, reject) => {
      globalType.v.getProperties(this.id.get(), r => {
        this.title.set(r.name);
        resolve();
      });
    });
  }
}

module.exports = SpinalBIMObjectForgeForge;
spinalCore.register_models([SpinalBIMObjectForge])