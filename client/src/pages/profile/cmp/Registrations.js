import React, { Component } from "react"; 
import * as registrationActions from "../../../actions/registration.actions";
import { connect } from "react-redux";
import moment from "moment";

const columns = [
  { name: "title", label: "Registration Type" },
  { name: "dateTime", label: "Date" },
  { name: "passes", label: "Passes" },
  { name: "price", label: "Price" },
  { name: "amount", label: "Amount" }
];

class Registrations extends Component {
  componentDidMount() {
    this.props.listRegistrations();
  }
  render() {
    var { list } = this.props;
    return (
      <div className="registrations">
        <div className="row ptl mb0">
          <div className="col s10 offset-s1 ">
            <table width="100%">
              <tr>
                {columns.map(({ label }, i) => (
                  <th key={i} width={i === 0 ? "50%" : "10%"}>
                    {label}
                  </th>
                ))}
                <th width={"10%"} className="update-row"></th>
              </tr>

              {list.map(({ title, dateTime, price, passes, amount }, i) => (
                <tr key={i}>
                  <td>{title}</td>
                  <td>{dateTime && moment(dateTime).format("ll")}</td>
                  <td>{passes}</td>
                  <td>${price}</td>
                  <td>${amount}</td>
                  <td className="update-row">Update</td>
                </tr>
              ))}
            </table>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ registrations }) => ({
  list: Object.values(registrations.list || {})
});

export default connect(mapStateToProps, registrationActions)(Registrations);
