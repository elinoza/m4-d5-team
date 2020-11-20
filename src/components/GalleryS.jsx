import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { CardGroup, Card, Row, Col } from "react-bootstrap";

class Gallery extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount = (props) => {
      if(this.props.movies){
       
      this.setState({movies:movies})
      }
      else{
        console.log error

      }  
  };
  render() {
    return (
      <Row>
        
          {this.state.movies.map((movie, index) => (
            <Col className="d-flex justify-content-center mt-2 mb-5" md={4} lg={3} key={index}>
              <Card >
                <Card.Img
                  variant="top"
                  style={{ width: 300, height: 400 }}
                  src={movie.Poster}
                />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Type}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{movie.Year}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        
      </Row>
    );
  }
}

export default Gallery;
