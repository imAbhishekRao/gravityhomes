import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UpcomingProjects = ({ projectStyle }) => {
	return (
		<>
			<div className={projectStyle.projectItemBox} id='allProjectsSection'>
				<Link href='/project/gravity-racchena' className={`position-relative ${projectStyle.projectItemFlx}`}>
					{/* <div className={projectStyle.projectMda}>
						<Image src='/images/projects/thumbnail/rachana_halli.webp' className='img-fluid' alt='Gravity Aranya' width='624' height='408' /> */}
					<div className={projectStyle.projectMda} style={{backgroundImage: 'url(/images/projects/thumbnail/rachana_halli.webp)', backgroundSize: 'cover', backgroundPosition: '50%', height: '408px'}}>
						<div className={projectStyle.projectInfoHover}>
							<h4 className='mb-0'>Sustainable Living Forest Villaments</h4>
							<div className={`position-relative ${projectStyle.logoEffect}`}>
								{/* <Image src='/images/sky-forest.png' className='img-fluid' fill='true' style={{objectFit: 'contain'}} alt='' /> */}
							</div>
						</div>
					</div>
					<div className={projectStyle.projectCnt}>
						<h4>Gravity Rachenahalli Project</h4>
						<div className={projectStyle.projectInfFlx}>
							<div className={projectStyle.projectInfPlc}>
								<span className='me-2 me-md-3'>
									<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7 10.0181C6.33696 10.0181 5.70107 9.75467 5.23223 9.28583C4.76339 8.81699 4.5 8.18111 4.5 7.51807C4.5 6.85503 4.76339 6.21914 5.23223 5.7503C5.70107 5.28146 6.33696 5.01807 7 5.01807C7.66304 5.01807 8.29893 5.28146 8.76777 5.7503C9.23661 6.21914 9.5 6.85503 9.5 7.51807C9.5 7.84637 9.43534 8.17146 9.3097 8.47478C9.18406 8.77809 8.99991 9.05369 8.76777 9.28583C8.53562 9.51798 8.26002 9.70213 7.95671 9.82777C7.65339 9.9534 7.3283 10.0181 7 10.0181ZM7 0.518066C5.14348 0.518066 3.36301 1.25556 2.05025 2.56832C0.737498 3.88107 0 5.66155 0 7.51807C0 12.7681 7 20.5181 7 20.5181C7 20.5181 14 12.7681 14 7.51807C14 5.66155 13.2625 3.88107 11.9497 2.56832C10.637 1.25556 8.85652 0.518066 7 0.518066Z" fill="#17574B" />
									</svg>
								</span> Behind  Manyata Tech park
							</div>
							<div className={projectStyle.projectInfSpn}>
								<span>3200 - 3700 sq. ft.</span>
								<span>3 & 4 BHK Villaments</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

export default UpcomingProjects