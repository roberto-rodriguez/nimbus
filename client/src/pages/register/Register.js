import React, { Component } from "react";
import { Header, Footer } from "../../cmp";
import { Steps, Contact, Packages, Payment, Confirmation } from "./cmp";
import "./register.style.scss";

class Register extends Component {
  state = {
    page: 1,
    data: { passes: 1 }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="register">
        <Header hideRegister={true} />
        <Steps page={this.state.page} />
        <div className="blue-bck pts">{this.buildSection()}</div>
        <Footer />
      </div>
    );
  }

  onNext = () => this.onPageChange(1);
  onBack = () => this.onPageChange(-1);
  onPageChange = offset => {
    this.setState({ page: this.state.page + offset });
    window.scrollTo(0, 0);
  };

  onChange = (name, value) =>
    this.setState({
      data: { ...this.state.data, [name]: value }
    });

  buildSection = () => {
    const { page, data } = this.state;

    switch (page) {
      case 1:
        return (
          <Contact
            onNext={this.onNext}
            onBack={this.onBack}
            onChange={this.onChange}
            data={data}
          />
        );
      case 2:
        return (
          <Packages
            onNext={this.onNext}
            onBack={this.onBack}
            onChange={this.onChange}
            data={data}
          />
        );
      case 3:
        return (
          <Payment
            onNext={this.onNext}
            onBack={this.onBack}
            onChange={this.onChange}
            data={data}
          />
        );
      case 4:
        return <Confirmation onBack={this.onBack} data={data} />;
      default:
        return null;
    }
  };
}

export default Register;
