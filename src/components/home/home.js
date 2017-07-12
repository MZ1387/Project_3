import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import LoginModal from './login_modal';

class Home extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Container fluid>
          <Header as='h2'>Pennie</Header>
          <Divider />
          <Segment textAlign='center' >
            <Header as='h2'>Welcome to Pennie</Header>
            <Header as='h2'>Learn Language Through Handmade Letters</Header>
            <LoginModal>
              <Button onClick={this.show('small')}>Login</Button>
            </LoginModal>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Home;
