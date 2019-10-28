import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Nav, Navbar, Dropdown } from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import SpoilerBar from "./spoilerBar";
import CampaignTable from "./campaignTable";

class LegacyContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1 className="text-center bg-secondary mt-md-10">Legacy Campaigns</h1>
        <Navbar className="bg-secondary" variant="tabs" expand="lg">
          <Nav variant="pills">
            <Nav.Item>
              <LinkContainer to="/legacies/all">
                <Nav.Link>View All Campaigns</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Choose a Game</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="div">
                  <LinkContainer to="#1">
                    <Nav.Link>Pandemic: Legacy Season 1</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
                <Dropdown.Item as="div">
                  <LinkContainer to="#2">
                    <Nav.Link>Pandemic: Legacy Season 2</Nav.Link>
                  </LinkContainer>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="justify-content-end">
            <LinkContainer to="#me">
              <Nav.Link>My Campaigns</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>

        <Row className="overflow-auto">
          <Col >
            <SpoilerBar /> 
            <Route path="/legacies/campaigns" component={CampaignTable} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapState = state => {
  return {
    state: state.legacy
  };
};

const mapDispatch = dispatch => {
  return {
    action: dispatch({ type: "LEGACY_ACTION" })
  };
};

export default connect(
  mapState,
  mapDispatch
)(LegacyContainer);
