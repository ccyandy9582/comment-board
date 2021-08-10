import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Header'

class Entry extends React.Component {
  render() {
    let linkStyle = {
      color: 'black',
      cursor: 'pointer'
    }

    return (
      <div>
        <Header />
        <Row>
        <Col>
          <Link to={`/blog/${this.porps.id}`} style={linkStyle}>
              <h1>{this.props.title}</h1>
              <p>{this.props.content}</p>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div style={{backgroundImage: `url('../blog_banner.jpg')`, height:`${400}px`, backgroundSize: 'cover'}}>
        <h1>Blog</h1>
      </div>
    )
  }
}

export default Blog