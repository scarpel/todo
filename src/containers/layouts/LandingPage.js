import React from 'react';
import MainHeader from '../../components/layout/MainHeader';
import { Container, Row, Col } from 'reactstrap';
import CustomButton from '../../components/commom/CustomButton';
import { NavLink } from 'react-router-dom';
import LandingImg from '../../assets/imgs/fullRender.jpg';
import PurpleNoise from '../../assets/imgs/purple-noise.png';

export default function LandingPage() {
  return (
    <div className="landing-page w-100 h-100">
      <MainHeader />
      <Container className="w-100 h-100">
        <Row className="w-100 h-100">
          <Col xs="12" lg="6" className="p-0 m-0 d-flex align-items-center">
            <div className="mt-4">
              <h2 className="double-huge-text fw-semibold slide-up">
                All your todos in
                <br />a single <span className="font-italic text-secondary">place</span>
              </h2>
              <p
                className="p-0 medium-text text-muter bigger-medium-text mt-4 slide-up"
                style={{ maxWidth: 500, animationDelay: '100ms' }}
              >
                Create and organize all your daily todos in a simple, fast and easy way.
              </p>
              <NavLink to="/login">
                <CustomButton className="mt-4 one-text slide-up" style={{ animationDelay: '200ms' }}>
                  Create todo
                </CustomButton>
              </NavLink>
            </div>
          </Col>
          <Col xs="12" lg="6" className="d-flex align-items-center">
            <img src={LandingImg} alt="To do" width={'100%'} />
          </Col>
        </Row>
      </Container>

      <img src={PurpleNoise} alt="Background" className="purple-noise" />
    </div>
  );
}
