import React, { Component } from "react";

class TextField extends Component {
  render() {
    var { name, label, onChange, value, type, labelClass, readOnly } = this.props;

    return (
      <div className="row text-field ptm">
        <div className={"col s12 " + (labelClass || "m3")}>
          <label>{label}</label>
        </div>
        <div className="col s12 m6">
          {
            readOnly ? (
            <p className='read-only'>{value}</p>
            ) : (
              <input
              type={type || "text"}
              onChange={e => onChange(name, e.target.value)}
              value={value}
            />
            )
          }
         
        </div>
      </div>
    );
  }
}

export default TextField;
