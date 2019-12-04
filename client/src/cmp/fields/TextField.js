import React, { Component } from "react";

class TextField extends Component {
  render() {
    var { name, label, onChange } = this.props;

    return (
      <div className="row text-field ptm">
        <div className="col s12 m3">
          <label>{label}</label>
        </div>
        <div className="col s12 m6">
          <input type="text" onChange={e => onChange(name, e.target.value)} />
        </div>
      </div>
    );
  }
}

export default TextField;
