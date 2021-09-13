import React from "react";
import HornedBeast from "./HornedBeast";
import dataArray from "./data.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Row xs={1} md={4} className="g-4">
          {dataArray.map((data, index) => {
            return (
              <HornedBeast
                key={index}
                title={data.title}
                img={data.image_url}
                description={data.description}
                keyWord={data.keyWord}
                horns={data.horns}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Main;
