import React from "react";
import ChartistGraph from "react-chartist";
import { BarChart, Bar, XAxis, YAxis, 
  CartesianGrid } from 'recharts';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { MDBDataTable } from 'mdbreact';
import { css } from "jquery";

class Dashboard extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         
         
      }
     
  }
 
  render() {
    const data12 = [
      { name: 'General Motors', x: 12, y: 23 },
      { name: 'Maruti', x: 22, y: 3 },
      { name: 'Tesla', x: 13, y: 15 },
      { name: 'Honda', x: 44, y: 35 },
      { name: 'Bajaj', x: 35, y: 45 },
      { name: 'Hero', x: 62, y: 25},
      { name: 'Tata', x: 37, y: 17 },
      { name: 'Toyota', x: 28, y: 32 },
      { name: 'Hundai', x: 19, y: 43 },
      // { name: 'J', x: 12, y: 23 },
      // { name: 'K', x: 22, y: 3 },
      // { name: 'L', x: 13, y: 15 },
      // { name: 'M', x: 44, y: 35 },
      // { name: 'N', x: 35, y: 45 },
      // { name: 'O', x: 62, y: 25},
      // { name: 'P', x: 37, y: 17 },
      // { name: 'Q', x: 28, y: 32 },
      // { name: 'R', x: 19, y: 43 },
  ];

    const data = {
      columns: [
        {
          label: 'OEM Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Total Recalls',
          field: 'Recalls',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Software Related Recalls',
          field: 'software_related_recalls',
          sort: 'asc',
          width: 200
        },
        {
          label: '% Software Related Recalls',
          field: 'per_software_related_recalls',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        
      ],
      rows: [
        {
          name: 'General Motors',
          Recalls: '38,333',
          software_related_recalls: '17,000',
          per_software_related_recalls: '61%',
          date: '2011/04/25',
         
        },
        {
          name: 'Maruti',
          Recalls: '31,303',
          software_related_recalls: '11,000',
          per_software_related_recalls: '41%',
          date: '2011/04/25',
         
        },
        {
          name: 'Hero',
          Recalls: '35,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '31%',
          date: '2011/04/25',
         
        },
        {
          name: 'Bajaj',
          Recalls: '48,333',
          software_related_recalls: '12,000',
          per_software_related_recalls: '71%',
          date: '2011/04/25',
         
        },
        {
          name: 'Tesla',
          Recalls: '23,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '51%',
          date: '2011/04/25',
         
        },
        {
          name: 'General Motors',
          Recalls: '38,333',
          software_related_recalls: '17,000',
          per_software_related_recalls: '61%',
          date: '2011/04/25',
         
        },
        {
          name: 'Maruti',
          Recalls: '31,303',
          software_related_recalls: '11,000',
          per_software_related_recalls: '41%',
          date: '2011/04/25',
         
        },
        {
          name: 'Hero',
          Recalls: '35,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '31%',
          date: '2011/04/25',
         
        },
        {
          name: 'Bajaj',
          Recalls: '48,333',
          software_related_recalls: '12,000',
          per_software_related_recalls: '71%',
          date: '2011/04/25',
         
        },
        {
          name: 'Tesla',
          Recalls: '23,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '51%',
          date: '2011/04/25',
         
        },
        {
          name: 'General Motors',
          Recalls: '38,333',
          software_related_recalls: '17,000',
          per_software_related_recalls: '61%',
          date: '2011/04/25',
         
        },
        {
          name: 'Maruti',
          Recalls: '31,303',
          software_related_recalls: '11,000',
          per_software_related_recalls: '41%',
          date: '2011/04/25',
         
        },
        {
          name: 'Hero',
          Recalls: '35,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '31%',
          date: '2011/04/25',
         
        },
        {
          name: 'Bajaj',
          Recalls: '48,333',
          software_related_recalls: '12,000',
          per_software_related_recalls: '71%',
          date: '2011/04/25',
         
        },
        {
          name: 'Tesla',
          Recalls: '23,333',
          software_related_recalls: '15,000',
          per_software_related_recalls: '51%',
          date: '2011/04/25',
         
        },
       
        
      ]
    };

    

      return (
        <>
      <Container fluid>
        <Row>
          <Col lg="12" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                <Col lg="9" sm="12">
                  <Form.Group>
                    {/* <Form.Control as="select" name='role'>
                      <option value={2}>I am  a ManuFacturer</option>
                      <option value={3}>I am a Retailer</option>
                    </Form.Control> */}
                  </Form.Group>
                </Col>
                <Col lg="3" sm="12">
                  <Form.Group>
                    <Form.Control as="select" name='role'>
                      <option value={2}>Past Month</option>
                      <option value={3}>Past 3 Months</option>
                      <option value={4}>Past 6 Months</option>
                      <option value={5}>Past Year</option>
                      <option value={6}>Past 3 Years</option>
                      <option value={7}>Past 5 Years</option>
                      <option value={8}>All Times</option>
                      <option value={9}>Custom Dates</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                </Row>
              </Card.Body>
             
            </Card>
          </Col>
          <Col lg="12" sm="12">
            <Card className="card-stats">
            <Card.Header>
              
            <Row>
                <Col lg="6" sm="12"> Top 10 OEMs by Recall</Col>
                <Col lg="3" sm="12">  <i className="fas fa-circle text-info"></i> Total Recalls</Col>
                <Col lg="3" sm="12">   <i className="fas fa-circle" style={{Color:"#68d0e7"}}></i>Software Related Recalls</Col>
                 
                </Row>
                <hr></hr>
              </Card.Header>
              <Card.Body>
                
                <BarChart width={1500} height={500} data={data12} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#0788a5" />
            <Bar dataKey="y" stackId="a" fill="#68d0e7" />
            
        </BarChart>
                
              </Card.Body>
             
            </Card>
          </Col>
          <Col lg="12" sm="12">
            <Card className="card-stats">
              <Card.Body>
                
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={data}
                />
               
              </Card.Body>
             
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
                 
      );
  }
}

export default Dashboard;


// function Dashboard() {
//   return (
    
//   );
// }

// export default Dashboard;
