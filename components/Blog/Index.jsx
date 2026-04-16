import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "./Pagination";
import NewsLetter from "../Home/NewsLetter";
import Link from "next/link";
import EmptyBlog from "./EmptyBlog";
import LatestBlogs from "./LatestBlogs";

const Index = () => {
    return (
        <>
            <div className="blog-list-style">
                <div className="spacer-5" />
                <div className="spacer-5" />
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} lg={8}>
                            <div className="gravity-head-center">
                                <h1 className="mb-0 text-center">
                                    More from the World Of <span>Living</span>
                                </h1>
                                
                                <p className="text-center mt-4 mb-0">
                                    Explore through the passage of details, architecture, inspirations and more. 
                                    <span className="d-block">Study the space and volume of design through the lens of your home.</span>
                                </p>
                                <div className="spacer-4" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="blog-featured-grid">
                                <h4 className="blog-heading-h4 mb-0">Featured</h4>
                                <div className="blog_featured_grid">
                                    <div className="blog-grid1">
                                        <Link href='/blog/how-physiological-routines-influence-design-homes-that-build-good-health/' className="blog-details blog-flex-col">
                                            <div className="blog-media-img position-relative">
                                                <Image
                                                    src="/images/blog/1.jpeg"
                                                    className="img-fluid"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill={true}
													alt="blog-1"
                                                />
                                            </div>
                                            <div className="blog-content-details">
                                                <div className="d-flex align-items-center justify-content-between blog-article-style w-100">
                                                    <h5 className="mb-0">
                                                        Article
                                                    </h5>
                                                    <p className="mb-0">
                                                        By Gravity Homes
                                                    </p>
                                                </div>
                                                <div className="blog-content-txt">
                                                    How Physiological Routines
                                                    Influence Design: Homes that
                                                    Build Good Health
                                                </div>
                                                <span className="blog-date-muted">
                                                    November 06, 2023
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-grid2">
                                        <Link href='/blog/sustainable-luxury-living-the-rise-of-eco-friendly-villas-in-bangalore/' className="blog-details blog-flex-col">
                                            <div className="blog-media-img position-relative">
                                                <Image
                                                    src="/images/blog/2.jpeg"
                                                    className="img-fluid"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill={true}
													alt="blog-2"
                                                />
                                            </div>
                                            <div className="blog-content-details">
                                                <div className="d-flex align-items-center justify-content-between blog-article-style w-100">
                                                    <h5 className="mb-0">
                                                        Article
                                                    </h5>
                                                    <p className="mb-0">
                                                        By Gravity Homes
                                                    </p>
                                                </div>
                                                <div className="blog-content-txt">
                                                    Sustainable Luxury Living:
                                                    The Rise of Eco-Friendly
                                                    Villas in Bangalore
                                                </div>
                                                <span className="blog-date-muted">
                                                    November 06, 2023
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-grid3">
                                        <Link href='/blog/sustainable-living-materials-that-everyone-is-rooting-for-nature-inclusive-living-for-a-better-tomorrow/' className="blog-details blog-flex-col">
                                            <div className="blog-media-img position-relative">
                                                <Image
                                                    src="/images/blog/3.png"
                                                    className="img-fluid"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill={true}
													alt="blog-3"
                                                />
                                            </div>
                                            <div className="blog-content-details">
                                                <div className="d-flex align-items-center justify-content-between blog-article-style w-100">
                                                    <h5 className="mb-0">
                                                        Article
                                                    </h5>
                                                    <p className="mb-0">
                                                        By Gravity Homes
                                                    </p>
                                                </div>
                                                <div className="blog-content-txt">
                                                Sustainable Living Materials That Everyone Is Rooting For: Nature-Inclusive Living for a Better Tomorrow
                                                </div>
                                                <span className="blog-date-muted">
                                                    November 06, 2023
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-grid4">
                                        <Link href='/blog/remarkable-evolution-of-north-bangalore-the-epicentre-of-growth-and-investment-opportunity/' className="blog-details blog-flex-row">
                                            <div className="blog-media-img position-relative">
                                                <Image
                                                    src="/images/blog/4.jpeg"
                                                    className="img-fluid"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill={true}
													alt="blog-4"
                                                />
                                            </div>
                                            <div className="blog-content-details">
                                                <div className="d-flex align-items-center justify-content-between blog-article-style w-100">
                                                    <h5 className="mb-0">
                                                        Article
                                                    </h5>
                                                    <p className="mb-0">
                                                        By Gravity Homes
                                                    </p>
                                                </div>
                                                <div className="blog-content-txt">
                                                    Remarkable Evolution of
                                                    North Bangalore: The
                                                    Epicentre of Growth and
                                                    Investment Opportunity
                                                </div>
                                                <span className="blog-date-muted">
                                                    November 06, 2023
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="blog-latest-grid">
                                <h4 className="blog-heading-h4 mb-0">Latest</h4>
                                <div className="blog_latest_grid">
                                    <EmptyBlog />
                                    {/* <LatestBlogs /> */}
                                </div>
                            </div>
                        </Col>
						<Col sm={12}>
							<Pagination />
						</Col>
                    </Row>
                </Container>

				<div className="blog-newsletter news-letter" style={{ backgroundImage: 'url(/images/newsletter.jpg)' }}>
					<Container className='z-index-1 position-relative'>
						<NewsLetter />
					</Container>
				</div>
            </div>
        </>
    );
};

export default Index;
