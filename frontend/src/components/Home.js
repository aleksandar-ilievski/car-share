import React from "react";
import {Card,Button} from "react-bootstrap";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <div className="bgimg">
      <header><Nav /></header>
        <div className="container">
          <div className="row textCenter">
            <h1>
              <span style={{ color: "white" }}>FIND THE PERFECT</span> CAR FOR
              YOU
            </h1>
          </div>
          <div className="row textCenter">
            <div className="col-4">
              <select className="select-css">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Audi
                </option>
              </select>
            </div>
            <div className="col-4">
              <select className="select-css">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Audi
                </option>
              </select>
            </div>
            <div className="col-4">
              <select className="select-css">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>
                  Audi
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomScrol">
        <div className="icon-scroll"></div>
      </div>
      <br/><br/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bike.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bike1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bike2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bike.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bmwm3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/bmw3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
