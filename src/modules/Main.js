import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';
import styled from 'styled-components';
import HttpService from '../shared/services/HttpService';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Content = styled.div`
  flex: 1;
`;

export class Main extends Component {
  static propTypes = {

  }


  save = async () => {
    this.setState({loading: true}, () => {
      const data  = await HttpService.save();
      this.setState({loading: true})

    })
  }

  render() {
    return (
      <MainWrapper className="MainWrapper">
        <Header/>
        <Content>
        
        </Content>
        <Footer />
      </MainWrapper>
    )
  }
}

export default Main
