import React, { useRef, useState } from 'react';
import livingStyles from './living.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import LivingTabs from './LivingTabs';
import Link from 'next/link';
//import video from '../'

const Index = () => {
	const videoRef = useRef();
    const [stop, setStop] = useState(false);

    const handleVideo = () => {
        setStop(!stop);
        if (stop === true) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };
	return (
		<>
			<div className={`static-page-style ${livingStyles.StaticLivingPage}`}>
				<div className={livingStyles.livingTermsBanner} style={{ backgroundImage: 'url(/images/living/new/gravity_banner.png)' }}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h6 className={`mb-0 text-center px-3 px-md-0 ${livingStyles.banner_text_shadow}`}>A Homely <span>Warmth</span></h6>
					</div>
				</div>
				<div className={livingStyles.LivingPageTxt}>
					<Container>
						<Row className='justify-content-center'>
							<Col md={11} lg={10} xl={8}>
								<p>A home is where our stories begin, and with time, these moments shape our world. The very fabric of belonging, our homes inspire. Designing a home then, is not just resonating with your idea of living, it is supporting your culture of living where your values and your narratives contribute to your experiences.</p>
								<p className='mb-0'>Our approach is to co-create as we co-exist, nurture community living, providing opportunities for ponder and the joy of personal spaces. Sharing a transparent journey along our course of development, we invite you to Gravity Living, a culture committed to belonging.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<Row className='justify-content-center'>
					<Col sm={12} md={10} lg={7} className='text-center'>
						<Link href='#belongingS' role='button' className={`d-none d-md-inline-block ${livingStyles.iconArrowDown}`}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
							</svg>
						</Link>
						<div className='spacer-4' id='belongingS' />
					</Col>
				</Row>
				<div className={` ${livingStyles.livingVideoBg}`}>
					<Container>
						<Row className='justify-content-center'>
							<Col md={12} sm={12}>
								<div className='gravity-head-center'>
									<h6 className='mb-0 text-start'>Your Tales of <span>Belonging</span></h6>
								</div>
								<div className='spacer-4' />
							</Col>
							<Col md={10} sm={10}>
								<div className={`video ${livingStyles.videoGalleryDiv}`}>
									<video src='https://gravityhomes.objectstore.e2enetworks.net/videos/Gravity_Aranya.mp4' controls='controls' ref={videoRef} type="video/mp4" autoPlay={false}  />
									<div className={`${stop === true ? `${livingStyles.playingVideo}` : `${livingStyles.startVideo}`} ${livingStyles.videoOverlay}`}>
										<button type='button' onClick={handleVideo}>
											<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="32" cy="32" r="22" fill="#17574B"/>
												<circle cx="32" cy="32" r="28.75" stroke="#C6E2D5" strokeWidth="0.5"/>
												<path d="M27.5 22.8397L42.5 31.5L27.5 40.1603L27.5 22.8397Z" stroke="white" strokeWidth="1.5"/>
											</svg>
										</button>
										<p className='mb-0'>Community x Gravity Homes</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>

				<div className={` ${livingStyles.livingTabs}`}>
					<Container>
						<Row className='justify-content-center'>
							<Col md={12} sm={12}>
								<div className='spacer-5' />
								<LivingTabs livingStyles={livingStyles} />
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	)
}

export default Index