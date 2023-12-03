import React, { Component } from "react";
import StripeCheckout from "@stripe/react-stripe.js";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="$5 for 5 survey credits"
      >
        <buton className="btn">Add Credits</buton>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
