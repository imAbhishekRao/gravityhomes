import Image from 'next/image'
import React from 'react'

const EmptyBlog = () => {
	return (
		<>
			<div className="blog-latest-empty">
				<div className="blog-empty-media position-relative">
					<Image
						src="/images/blog/empty.svg"
						className="img-fluid"
						alt="blog-empty"
						fill={true}
					/>
				</div>
				<p className="mb-0 text-center">
					Stay tuned to learn what’s next in sustainable luxury living
				</p>
			</div>
		</>
	)
}

export default EmptyBlog