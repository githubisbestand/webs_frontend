    // import React from "react";
     import config from "../Config/config.json"

    // function Form({ searchText, handleSearchChange, handleSearch, handleReset }) {
    //     return (
            
    //         <>
    //       <div className="container">
    //         <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <a class="navbar-brand" href="#">Navbar</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //         <ul class="navbar-nav mr-auto">
    //             <li class="nav-item active">
    //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">Features</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="#">Pricing</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //             </li>
    //         </ul>
    //         <div>
    //         <form class="form-inline my-2 my-lg-0">
    //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //         </form>
    //         </div>
    //     </div>
    // </nav>
    // </div>

    //         </>
            // <form class="form-inline my-2 my-lg-0" style={{ marginBottom: "10px", marginLeft: "150px", marginTop: "10px" }}>
            //    <div class="inut   me-2">
            //         <input placeholder="Search by Lead ID" class="input" value={searchText} onChange={handleSearchChange} />
            //         {config.showResetButton &&(
            //        <button class="btn1" onClick={handleReset}><i class="fa-solid fa-x"></i></button>
            //     )}
            //    </div>
            //    {config.shareButton &&(
            //     <button type="button" class="btn btn-primary" onClick={handleSearch}>Search</button>
            //    )}
            // </form>
    //     );
    // }

    // export default Form;

    import Button from 'react-bootstrap/Button';
    import Container from 'react-bootstrap/Container';
    import Form from 'react-bootstrap/Form';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    
    function NavScrollExample({searchText, handleSearchChange, handleSearch}) {
      return (
        <Navbar expand="lg" className="bg-body-tertiary  m-auto">
          <Container >
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by Lead id"
                  className="me-2"
                  aria-label="Search"
                  value={searchText}
                  onChange={handleSearchChange}
                />
                 {config.shareButton &&(
                <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                )}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default NavScrollExample;