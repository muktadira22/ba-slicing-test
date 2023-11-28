import React from 'react'
import { Button, Form, FormControl, InputGroup, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap'


const Navbar = () => {
  return (
    <NavbarBootstrap bg="white" expand="lg" className='border-bottom'>
      <NavbarBootstrap.Brand href="#home"><h5>FY21 - Recommended Operating Budget</h5></NavbarBootstrap.Brand>
      <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
      <NavbarBootstrap.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Form inline>
          <InputGroup className="mr-sm-2">
            <FormControl
              placeholder="Search Proposal..."
              aria-label="Search Proposal..."
              aria-describedby="basic-addon2"
            />
            {/* <InputGroup.Append>
              <InputGroup.Text className='bg-white' id="basic-addon2">
              </InputGroup.Text>
            </InputGroup.Append> */}
          </InputGroup>
          <Button variant='outline-dark' className='mr-2'>Export</Button>
          <Button variant="dark">Create Proposal</Button>
        </Form>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  )
}

export default Navbar