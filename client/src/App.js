import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ExpandRowModule from './components/legacy/expandRowModule'
import { Route } from 'react-router-dom'

function App() {
  const columns = [
    {
      dataField: "id",
      text: "Campaign ID"
    },
    {
      dataField: "name",
      text: "Campaign Name",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "format",
      text: "Game Title",
      filter: textFilter()
    },
    {
      dataField: "creator",
      text: "Created By",
      filter: textFilter()
    },
    {
      dataField: "play_count",
      text: "Number of Plays",
      sort: true
    },
    {
      dataField: "date_started",
      text: "Date Started",
      sort: true
    },
    {
      dataField: "date_completed",
      text: "Date Completed",
      sort: true
    }
  ];

  let date = new Date(2018, 2, 12)
  const products = [
    {
      id: 0,
      name: "Campaign 0",
      format: "Pandemic Legacy Season 1",
      creator: "Paul",
      play_count: 19,
      date_started: date.toDateString()
    },
    {
      id: 1,
      name: "Campaign 1",
      format: "Pandemic Legacy Season 2",
      creator: "Paul",
      play_count: 17,
      date_started: date.toDateString(),
      date_completed: date.toDateString(),
      extra: 123
    }
  ];

  const expandRow = {
      
    renderer: row => (
      <div className="container">
        <p>{ `This Expand row is belong to rowKey ${row.id} with ${Object.keys(row)}` }</p>
        <p>{ `You can render anything here, also you can add additional data like ${row.extra} on every row object` }</p>
        <ExpandRowModule />
        <BootstrapTable
        keyField="id"
        data={[row]}
        columns={[{
        dataField: "id",
        text: "ID"
      },
      {
        dataField: "extra",
        text: "rowData"
      }
    ]} />
      </div>
    )
  };

  const allTable = () => <BootstrapTable
  bootstrap4
  keyField="id"
  data={products}
  columns={columns}
  filter={filterFactory()}
  noDataIndication="No Data Found"
  expandRow={expandRow}
/>

  return (
<>
        <h1 className="text-center bg-secondary mt-md-10">Legacies</h1>
      <Navbar className="bg-secondary" variant='tabs' expand='lg'>
        <Nav variant="pills">
          <Nav.Item><Nav.Link href="/legacy/all">Hi</Nav.Link></Nav.Item>
        </Nav>
      </Navbar>
    <Row>
      <Col>
        <Route path="/legacy/all" component={allTable} />
      </Col>
    </Row>
</>
  );
}

export default App;
