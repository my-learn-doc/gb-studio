import React, { Component } from "react";
import l10n from "../../lib/helpers/l10n";

class MovementTypeSelect extends Component {
  render() {
    return (
      <select {...this.props}>
        <option value="static">{l10n("FIELD_MOVEMENT_STATIC")}</option>
        <option value="faceInteraction">
          {l10n("FIELD_MOVEMENT_FACE_INTERACTION")}
        </option>
        <option value="randomFace">
          {l10n("FIELD_MOVEMENT_RANDOM_ROTATION")}
        </option>
        <option value="randomWalk">{l10n("FIELD_MOVEMENT_RANDOM_WALK")}</option>
      </select>
    );
  }
}

export default MovementTypeSelect;
