import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    Parallax,
    ParallaxBanner,
    ParallaxProvider,
} from "react-scroll-parallax";

const ThankYou = () => {
    return (
        <>
            <div className="thank-you-page">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[
                            { image: "/images/newsletter.jpg", speed: -15 },
                        ]}
                        className="about-widget news-letter aspect-[2/1]"
                    >
                        <Container className="z-index-1 position-relative">
                            <Row className="justify-content-center">
                                <Col lg={6} md={7} sm={10} xs={11}>
                                    <div className="thank-widget">
                                        <h3>Thank You</h3>
                                        <p>
                                            Thank you for choosing a home that
                                            breathes with you!
                                            <br />
                                            We are glad to see your interest in
                                            Gravity Homes and will get back to
                                            you shortly.{" "}
                                        </p>
                                        <p className="mb-0">
                                            Have a great day! Stay connected to
                                            nature’s calm.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </ParallaxBanner>
                </ParallaxProvider>
                <Row>
                    <Col xs={12}>
                        <div className="thank-btns d-md-flex d-none flex-row gap-4">
                            <Link
                                href="/"
                                className="btn-theme-primary-outline"
                            >
                                <span className="me-3">
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 8.5L1 8.5M1 8.5L5.96774 13.5M1 8.5L5.96774 3.5"
                                            stroke="#17574B"
                                        />
                                    </svg>
                                </span>{" "}
                                Back to Home
                            </Link>
                            <Link
                                href="/project"
                                className="btn-theme-primary d-flex"
                            >
                                View Projects
                                <span className="ms-3">
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 8.5H15M15 8.5L10.0323 3.5M15 8.5L10.0323 13.5"
                                            stroke="white"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ThankYou;
