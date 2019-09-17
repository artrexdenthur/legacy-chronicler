import React, { Component } from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Navbar, Nav, Tab, Tabs, Card } from "react-bootstrap";
import ContainerA from "./ContainerA";
import ContainerB from "./ContainerB";
import Stateless04 from "./Stateless04";
import Stateless01 from "./Stateless01";
import fetchConcepts from "../../actions/checklist/fetchConcepts";
import { connect } from "react-redux";

class Checklist extends Component {
  componentDidUpdate() {
    this.props.fetchConcepts;
  }

  render() {
    const { path } = this.props.match;
    const routeA = path + "/containera";
    const routeB = path + "/containerb";
    return (
      <div className="mx-5" id="checklist-root"> {/* Spacer class */}
        <br/>
        <h1 className="text-center">🙏 The Inaccurate Conception 🙏</h1>
        <br/>
        <Tabs fill variant="pills" defaultActiveKey="A" className="mx-auto bg-secondary" id="checklist-tabs">
          <Tab eventKey="A" title="Adjectives and Nouns">
            <Card>
              <ContainerA />
            </Card>
          </Tab>
          <Tab eventKey="B" title="Concepts">
            <Card>
                <ContainerB />
            </Card>
          </Tab>
          <Tab eventKey="about" title="About">
            <Card>
                <Stateless04 />
            </Card>
          </Tab>
          <Tab eventKey="howto" title="How to Use">
            <Card>
              <Stateless01 />
            </Card>
          </Tab>
        </Tabs>
        {/* <Navbar className="bg-light"><Nav.Link href={location.pathname + "/adjectives_and_nouns"}>Adj&N</Nav.Link></Navbar>
                <Route path={location.pathname + "/adjectives_and_nouns"} component={ ContainerA } /> */}
        <br />
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchConcepts: dispatch(fetchConcepts())
  };
};

export default connect(
  null,
  mapDispatch
)(Checklist);
