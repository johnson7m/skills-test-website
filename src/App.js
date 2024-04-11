  import React from 'react';
  import { Container, Row, Col, Carousel, Tab, Nav, Accordion, Navbar } from 'react-bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import logo1 from './assets/logo1.png'
  import carouselImg1 from './assets/carousel1.png'
  import carouselImg2 from './assets/carousel2.png'
  import tab1Image from './assets/tab1image.png'
  import tab2Image from './assets/tab2image.png'

  class App extends React.Component { 
    constructor(props) {
      super(props)
      this.state = {
        backgroundImage: tab1Image,
      }
      
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(image) {
      this.setState({
        backgroundImage: image,
      })
      console.log(this.state.backgroundImage);
    }

    
    render() {
      return( 
      <Container fluid className="px-0">
        <Row className="px-0" id="section1">
          <Col lg={true} className="px-0 ">
            <Col id="home-container"className="d-flex justify-content-between">
              <img src={logo1} style={{objectFit: 'contain'}}></img>
              <Nav className="justify-content-end mt-3">
                  <Nav.Link href="#section2" className="custom-nav-link">01. History</Nav.Link>
                  <Nav.Link href="#section3" className="custom-nav-link">02. Team</Nav.Link>
              </Nav>
            </Col>
          </Col>
        </Row>
        <Row className='px-0' id="section2">
          <Col className="px-0 d-flex flex-column min-vh-100">
            <Navbar id="sticky-nav" sticky="top" className="py-3">
              <Container>
                <Navbar.Brand className="d-flex" href="#home">
                  <img src={logo1} alt="Logo" style={{ objectFit:"contain", marginRight: '10px' }} />
                  <div>
                    <div>LOS ANGELES</div>
                    <div>MOUNTAINS</div>
                  </div>
                </Navbar.Brand>
                <Nav>
                  <Nav.Link href="#section1" className="custom-nav-link">01. Home</Nav.Link>
                  <Nav.Link href="#section3" className="custom-nav-link">02. Team</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Row className="justify-content-center" style={{ height: '75vh' }}>
              <Col md={5} className="">
                <div className="large-number">01.</div>
                <div className="history-text">HISTORY</div>
                <p className="lorem-text" id="history-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <Row className="mt-auto">
            <Col>
              <Carousel id="carousel">
                <Carousel.Item>
                  <img className="d-block mx-auto" src={carouselImg1} alt="First slide"></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block mx-auto" src={carouselImg2} alt="Second slide"></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block mx-auto" src={carouselImg1} alt="Third slide"></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block mx-auto" src={carouselImg2} alt="Fourth slide"></img>
                </Carousel.Item>
              </Carousel>
            </Col>
            </Row>            
          </Col>
        </Row>
        <Row className="px-0" id="section3" style={{backgroundImage: `url(${this.state.backgroundImage})`}}>
          <Col className="px-0">
            <Row className="px-0 d-flex justify-content-center align-items-center" id="section-3-header" style={{height: '20vh'}}>
              <Col md={7} className="px-0 d-flex">
                <div className="large-number">02.</div>
                <div className="climb-text">CLIMB</div>
                <p className="lorem-text" id="climb-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <Row className="px-0" id="mountain-nav-container">
              <Col lg={true} className="px-0 d-flex justify-content-center">
                <Tab.Container defaultActiveKey="mountain1">
                  <Nav variant="underline" className="ml-auto" style={{marginRight: '50%'}}as="ul">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="mountain1" onClick={() => this.handleClick(tab1Image)} className="custom-nav-link2" style={{color: 'black'}}>MOUNTAIN 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="mountain2" onClick={() => this.handleClick(tab2Image)} className="custom-nav-link2" style={{color: 'black'}}>MOUNTAIN 2</Nav.Link>
                    </Nav.Item>
                  </Nav> 
                  <Tab.Content>
                  <Tab.Pane eventKey="mountain1">
                  </Tab.Pane>
                  <Tab.Pane eventKey="mountain2">
                  </Tab.Pane>
                </Tab.Content>                 
                </Tab.Container>            
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container fluid className="px-0">
              <Row>
                <Col className="footer d-flex justify-content-center">
                  <img src={logo1} alt="Logo" style={{ objectFit:"contain", margin: '10px' }} />
                    <div>
                      <div style={{color:'gray', margin: "5px"}}>LOS ANGELES</div>
                      <div style={{color:'gray', margin: "5px"}}>MOUNTAINS</div>
                    </div>
                </Col>
                <Col className="footer d-flex justify-content-end">
                  <p style={{margin: '1rem', color: 'var(--light-blue)'}}>COPYRIHT 2016. ALL RIGHTS RESERVED.</p>
                </Col>
              </Row>
            </Container>  
          </Col>
        </Row>
      </Container>
    );
  };
  }


  export default App;
