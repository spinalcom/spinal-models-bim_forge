const spinalCore = require("spinal-core-connectorjs");
const SpinalModelsBIMViewer = require("spinal-models-bim_viewer");

// name: _name || "",
// BIMObjects: _BIMObjects || [],
// display: _display || true,
// color: _color || ""

class SpinalBIMGroupForge extends SpinalModelsBIMViewer.SpinalBIMGroup {
  constructor(_name, _BIMObjects, _display, _color, name =
    "SpinalBIMGroupForge") {
    super(_name, _BIMObjects, _display, _color);
  }
}

module.exports = SpinalBIMGroupForge;
spinalCore.register_models([SpinalBIMGroupForge])