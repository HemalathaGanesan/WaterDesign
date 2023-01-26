import React, { Component } from 'react';
import { Container, Typography } from "@material-ui/core";
import homebackground from '../assets/images/home.gif'
import { keyframes } from "styled-components";

export default class Home extends Component {

  render() {
    // var backgroundImageStyle=style={{
    //   backgroundImage: `url('${homebackground}')`, backgroundPosition: 'center', justifyContent: 'center',  display: 'flex',
    //   height: '700px', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', fontSize: '30px', color: '#13b9fd'
    // }};
    var spin = keyframes`0% { opacity: 0; } 100% { opacity: 1;  }`;
    return (
      <div>
        <div style={{ backgroundColor: 'white', justifySelf: 'center', display: 'grid', justifyItems: 'center', color: '#13b9fd' }}>
          <h1 style={{marginTop: '50px', textAlign: 'center', fontSize: '50px', margin: '70px, 0px' }}>Design your water pipelines</h1>
          <div>
            <img src={homebackground} style={{marginTop: '-40px', width: '100%'}} />
          </div>
          <div>
            <Typography
              style={{ fontSize: '25px', textAlign: 'start', border: 'groove', marginLeft: '50px', marginRight: '50px', marginBottom: '20px', padding:'20px' }}
              component='p'          >
              WDE offers a range of services to its customers.
              Services include understanding the customer requirements, competitive benchmarking for the products,
              developing a conceptual design, verification of design using analytical engineering,
              developing a product prototype and product testing for concept validation etc..
            </Typography>
          </div>
        </div>
      </div >
    );
  }
}