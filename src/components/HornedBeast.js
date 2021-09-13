import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickNum: 0,
    };
  }

  increaseclickNum = () => {
    this.setState({
      clickNum: this.state.clickNum + 1,
    });
  };
  render() {
    return (
      <div>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="cardi" variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>number of clicks {this.state.clickNum}</Card.Text>
              <Button
                className="cardB"
                onClick={this.increaseclickNum}
                variant="primary"
              >
                Vote{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
export default HornedBeast;
