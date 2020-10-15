import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Aux from "./hoc/Auxilliary";
import MenuPage from "./Containers/MenuPage/MenuPage";
import OrderAndDeliveryPage from "./Containers/OrderAndDeliveryPage/OrderAndDeliveryPage";
import DeliveryLocationPage from "./Containers/DeliveryLocationPage/DeliveryLocationPage";
import Layout from "./Containers/Layout/Layout"

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    let routes = (
      <Switch>
          <Route path="/handling" component={OrderAndDeliveryPage} />
          <Route path="/delivery" component={DeliveryLocationPage} />
          <Route path="/menu" component={MenuPage} />
          <Redirect to="/menu" />
        </Switch>
    );

    // if (this.props.isAuthenticated) {
    //   routes = (
        // <Switch>
        //   <Route path="/checkout" component={asyncCheckout} />
        //   <Route path="/orders" component={asyncOrders} />
        //   <Route path="/logout" component={Logout} />
        //   <Route path="/auth" component={asyncAuth} />
        //   <Route path="/" exact component={BurgerBuilder} />
        //   <Redirect to="/" />
        // </Switch>
    //   );
    // }

    return (
      <Aux>
        <Layout>
          {routes}
        </Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
