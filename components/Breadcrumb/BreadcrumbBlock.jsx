import Link from 'next/link';
import React from 'react';

function BreadcrumbBlock(props) {
	const { breadcrumb_item_first, breadcrumb_item_second, breadcrumb_item_last } = props
	return (
		<>
			<div className='breadcrumb__custom'>
				<ul>
					<li>
						<Link href='/'>
							<span>{breadcrumb_item_first}</span>
						</Link>
					</li>
					<li>
						<Link href='/blog'>
							<span>{breadcrumb_item_second}</span>
						</Link>
					</li>
					<li>
						<div className='breadcrumb__last'>{breadcrumb_item_last}</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default BreadcrumbBlock;
