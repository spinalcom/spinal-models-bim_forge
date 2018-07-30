const spinalCore = require("spinal-core-connectorjs");
const SpinalModelsBIMViewer = require("spinal-models-bim_viewer");
const globalType = typeof window === "undefined" ? global : window;

// id: _id || 0,
// name: _name || "",
// group: new Ptr(_group),
// display: _display || true,
// color: _color || ""

class SpinalBIMObjectForge extends SpinalModelsBIMViewer.SpinalBIMObject {
  constructor(
    _id,
    _name,
    _group,
    _display,
    _color,
    name = "SpinalBIMObjectForge"
  ) {
    super(_id, _name, _group, _display, _color);
    if (FileSystem._sig_server) {
      this.fillName();
    }
  }

  fillName() {
    return new Promise((resolve, reject) => {
      globalType.v.getProperties(this.id.get(), r => {
        this.name.set(r.name);
        resolve();
      });
    });
  }
}

module.exports = SpinalBIMObjectForge;
spinalCore.register_models([SpinalBIMObjectForge]);
