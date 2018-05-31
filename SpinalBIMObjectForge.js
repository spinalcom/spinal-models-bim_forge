const spinalCore = require("spinal-core-connectorjs");
const SpinalModelsBIMViewer = require("SpinalModelsBIMViewer");

// id: _id || 0,
// name: _name || "",
// group: new Ptr(_group),
// display: _display || true,
// color: _color || ""

class SpinalBIMObjectForge extends SpinalModelsBIMViewer.SpinalBIMObject {
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

module.exports = SpinalBIMObjectForge;
spinalCore.register_models([SpinalBIMObjectForge])
