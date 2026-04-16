import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const OtherSuggestions = () => {

	const location = useRouter();
	
	return (
		<>
			<div className='blog-suggestion-grid'>
				{ location.pathname != '/blog/sustainable-luxury-living-the-rise-of-eco-friendly-villas-in-bangalore' && (
					<Link href='/blog/sustainable-luxury-living-the-rise-of-eco-friendly-villas-in-bangalore' className="blog-details blog-flex-col">
						<div className="blog-media-img position-relative">
							<Image
								src="/images/blog/2.jpeg"
								className="img-fluid"
								fill={true}
								alt="suggestions-blog-2"
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
								Sustainable Luxury Living: The Rise of Eco-Friendly Villas in Bangalore
							</div>
							<span className="blog-date-muted">
								November 06, 2023
							</span>
						</div>
					</Link>
				)}
				{ location.pathname != '/blog/sustainable-living-materials-that-everyone-is-rooting-for-nature-inclusive-living-for-a-better-tomorrow' && (
				<Link href='/blog/sustainable-living-materials-that-everyone-is-rooting-for-nature-inclusive-living-for-a-better-tomorrow' className="blog-details blog-flex-col">
					<div className="blog-media-img position-relative">
						<Image
							src="/images/blog/3.png"
							className="img-fluid"
							fill={true}
							alt="suggestions-blog-3"
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
				)}
				{ location.pathname != '/blog/remarkable-evolution-of-north-bangalore-the-epicentre-of-growth-and-investment-opportunity' && (
				<Link href='/blog/remarkable-evolution-of-north-bangalore-the-epicentre-of-growth-and-investment-opportunity' className="blog-details blog-flex-col">
					<div className="blog-media-img position-relative">
						<Image
							src="/images/blog/4.jpeg"
							className="img-fluid"
							fill={true}
							alt="suggestions-blog-4"
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
						Remarkable Evolution of North Bangalore: The Epicentre of Growth and Investment Opportunity
						</div>
						<span className="blog-date-muted">
							November 06, 2023
						</span>
					</div>
				</Link>
				)}
				{ location.pathname != '/blog/how-physiological-routines-influence-design-homes-that-build-good-health' && (
				<Link href='/blog/how-physiological-routines-influence-design-homes-that-build-good-health' className="blog-details blog-flex-col">
					<div className="blog-media-img position-relative">
						<Image
							src="/images/blog/1.jpeg"
							className="img-fluid"
							fill={true}
							alt="suggestions-blog-1"
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
						How Physiological Routines Influence Design: Homes that Build Good Health
						</div>
						<span className="blog-date-muted">
							November 06, 2023
						</span>
					</div>
				</Link>
				)}

			</div>
		</>
	)
}

export default OtherSuggestions