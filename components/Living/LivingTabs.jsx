import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import projectStyle from '../Projects/projects.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const LivingTabs = ({ livingStyles }) => {
	const [key, setKey] = useState('breathing');
	return (
		<>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className={`justify-content-start projectTabs_tab ${projectStyle.projectTabs}`}
			>
				<Tab eventKey="breathing" title="Breathing with Nature">
					<div className='spacer-5' />
					<div className={livingStyles.livingBg}style={{ backgroundImage: 'url(/images/living/living.png)'}}>
					<Row className='justify-content-center z-index-1 position-relative'>
						<Col lg={8} md={11} sm={12}>
							<h6 className='mb-2'>Tree Friends</h6>
							<p className='mb-4'>Find them in tree-lined walkways, surrounding the clubhouse, or in your own backyard! Our projects welcome a variety of local, designer and air-purifying trees.</p>
							<h6 className='mb-2'>Private & Community Gardens</h6>
							<p className='mb-4'>Welcoming sunlight, fresh air, and the warmth of your heart, we understand how personal moments and quality time with the community are enriching amidst the peace and calm of nature.</p>
							<h6 className='mb-2'>Rainwater & Groundwater Recharge</h6>
							<p className='mb-4'>Equipped with recharge depression for rainwater conservation, we extend our commitment to natural replenishment by reducing our reliance on conventional water sources.</p>
						</Col>
					</Row>
					</div>
				</Tab>
				<Tab eventKey="community" title="Community Living">
					<div className='spacer-5' />
					<Row className='justify-content-center'>
						<Col lg={7} md={11} sm={12}>
							<p className='mb-0 px-5'>Cherished moments, enriching journeys, community living is slowly becoming an old charm in the era of apartments. We strive to revive this old world charm of building meaningful connections with people.</p>
							<div className='spacer-5' />
						</Col>
						<Col lg={7} md={11} sm={12}>
							<div className={livingStyles.tabGrid4}>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/prahath.webp' className='img-fluid' alt='prahath' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0'>Prahladh</h6>
										<span>Gravity Forest view</span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/2_2.webp' className='img-fluid' alt='living-2-2' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0'>Rashmi & Manoj Nayak</h6>
										<span>Gravity Aranya</span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/2_3.webp' className='img-fluid' alt='living-2-3' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0'>Guruprasad</h6>
										<span>Gravity Aranya</span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/2_4.webp' className='img-fluid' alt='living-2-4' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0'>Narahari</h6>
										<span>Gravity Aranya</span>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Tab>
				<Tab eventKey="materials" title="Materials with Life">
					<div className='spacer-5' />
					<Row className='justify-content-center'>
						<Col lg={8} md={11} sm={12} xs={10}>
							<div className={` ${livingStyles.tabGrid4} ${livingStyles.tabGrid44}`}>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_1.webp' className='img-fluid' alt='living-3-1' fill={true} />
									</div>
									<div className={`d-flex align-items-start justify-content-between flex-column`}>
										<h6 className='mb-0'>Traditional Mud Blocks</h6>
										<p className='mb-0 mb-md-4'>With more urban homeowners employing mud for construction, make room for homes designed with breathable mud blocks that offer you comfortable climate control and healthy quality indoor air.</p>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_2.webp' className='img-fluid' alt='living-3-2' fill={true} />
									</div>
									<div className={`d-flex align-items-start justify-content-between flex-column`}>
										<h6 className='mb-0'>Low-VOC Paints</h6>
										<p className='mb-0 mb-md-4'>VOC stands for Volatile Organic Compounds which are often present in standard paints and emit harmful toxic gases. Low-VOC paints, on the other hand, help maintain a healthier indoor air quality with reduced odour.</p>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_3.webp' className='img-fluid' alt='living-3-3' fill={true} />
									</div>
									<div className={`d-flex align-items-start justify-content-between flex-column`}>
										<h6 className='mb-0'>Domal Aluminium</h6>
										<p className='mb-0 mb-md-4'>Offering compelling advantages over glass, Domal Aluminium provides an energy-efficient serene escape that is both highly durable and sustainable.</p>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_4.webp' className='img-fluid' alt='living-3-4' fill={true} />
									</div>
									<div className={`d-flex align-items-start justify-content-between flex-column`}>
										<h6 className='mb-0'>Eco-Friendly Indian Kota Stones</h6>
										<p className='mb-0 mb-md-4'>Did you know Rajasthani Kota Stones are not only eco-friendly but also a climate-comfort option against Conventional Italian Marble? Our Founder, Mr. Surya N.C., calls this natural and sustainable goodness, ‘Materials with Life’. Choose a communion with the world, not the concrete.</p>
									</div>
								</div>
							</div>
							
						</Col>
					</Row>
				</Tab>
				<Tab eventKey="collaborative" title="Collaborative Responsibility">
					<div className='spacer-5' />
					<Row className='justify-content-center'>
						<Col lg={7} md={11} sm={12}>
							<p className='mb-0 px-5'>Our esteemed nature-inclusive partners are crucial collaborators in every project we undertake. Meet our team of landowners, channel partners, architects, interior designers, and more who work closely with Team ABC to promote shared responsibility that empowers our collaborative culture.</p>
							<div className='spacer-5' />
						</Col>
						<Col lg={11} md={12} sm={12}>
							<div className={` ${livingStyles.tabGrid4} ${livingStyles.tabGrid_3}`}>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/4.webp' className='img-fluid' alt='living-4' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Dr. Shah E Akbar Pasha</h6>
										<span>Gravity Forest View</span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_7.webp' className='img-fluid' alt='living-3-7' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Guruprasad</h6>
										<span className='text-end'>AGM, SBI Banking Partner,<span className='d-block'>Bangalore South</span></span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_6.webp' className='img-fluid' alt='living-3-6' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Raghunandan </h6>
										<span>Principal Architect <span className='d-block'>Parallax Architects</span></span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/5.webp' className='img-fluid' alt='living-4' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Ravikumar </h6>
										<span> Principal Architect <span className='d-block'>Maark Vision Architects</span></span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/3_5.webp' className='img-fluid' alt='living-3-5' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Samhita Suresh</h6>
										<span> Founder  <span className='d-block'>Guhina Lifestyle</span></span>
									</div>
								</div>
								<div className={livingStyles.tabGridStyle}>
									<div className={`position-relative ${livingStyles.mediaStyleGrid}`}>
										<Image src='/images/living/new/2_1.webp' className='img-fluid' alt='living-2-1' fill={true} />
									</div>
									<div className={`d-flex align-items-center justify-content-between ${livingStyles.ContentStyleGrid}`}>
										<h6 className='mb-0 me-3'>Monika & Savitha</h6>
										<span>Channel partner, <span className='d-block'>Whitehall estate </span></span>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Tab>			
			</Tabs>
		</>
	)
}

export default LivingTabs