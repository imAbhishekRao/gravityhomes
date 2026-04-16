import React, { useState } from 'react'

const Chatbot = ({ homeStyle }) => {
	const [slideOpen, setSlideOpen] = useState(false);
	const slideIn = () => setSlideOpen(true);
	const slideOut = () => setSlideOpen(false);
	return (
		<>
			<div className={homeStyle.chatBox}>
				<button type='button' onClick={slideIn} name="chat">
					<span>
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.4 30H2V5H38V30H23.6L20 36" stroke="white" strokeWidth="1.5" />
						</svg>
					</span>
				</button>
				<div className={` ${homeStyle.chatBotWidget} ${slideOpen == true ? `${homeStyle.chatBotWidgettt}` : ''}`} open={slideOpen}>
					<div className={`d-flex align-items-center justify-content-between ${homeStyle.chatbotHeader}`}>
						<h4 className='mb-0'>Chat With Us</h4>
						<button onClick={slideOut} type='button' name="chat button">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.927 4.06066L9.02417 7.96351L12.8215 11.7609L11.7609 12.8215L7.96351 9.02417L4.06066 12.927L3 11.8664L6.90285 7.96351L3.10548 4.16614L4.16614 3.10548L7.96351 6.90285L11.8664 3L12.927 4.06066Z" fill="white" />
							</svg>
						</button>
					</div>
					<div className={homeStyle.chatbotContent}>
						<p className={homeStyle.chatInfoTxt}>Welcome to the World of Gravity Living! We are here to help you with the most sought-after luxury living choices for you and your family. Please let us know your topic of inquiry:</p>
						<div className={homeStyle.chatbotTimeStamp}>
							<span>Today (Tue, Oct 17,  2023)</span>
						</div>
						<div className={homeStyle.chatbotOptions}>
							<div className={homeStyle.chatbotOptionsLists}>
								<div className={homeStyle.OptionsLists}>
									<span>1. Available Villa & Villaments</span>
								</div>
								<div className={homeStyle.OptionsLists}>
									<span>2. Upcoming Projects</span>
								</div>
								<div className={homeStyle.OptionsLists}>
									<span>3. Completed Projects</span>
								</div>
								<div className={homeStyle.OptionsLists}>
									<span>4. General Information</span>
								</div>
								<div className={homeStyle.OptionsLists}>
									<span>5. Contact Our Team</span>
								</div>
								<div className={homeStyle.OptionsLists}>
									<span>6. Close Chat</span>
								</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>1. Available Villa & Villaments</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>We are thrilled to see your interest in Gravity Living! Our current available projects are Gravity Aranya- Luxury Forest Villaments in BSK 6th Stage, Nestled in Turahalli Forest, 4 acres of Luxurious Landscape with Duplex & Triplex Sustainable Living Villaments with Private Front Yard and Backyard Gardens, Biophilic Architecture, Community Lifestyle and more. Visit our website (https://www.gravityhomes.in/project/gravity-aranya/) or call us at (+91 9513145554 / +91 9739011616) to know more.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>2. Upcoming Projects</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>We have a promising list of upcoming projects in prime locations like Chandapura with Luxury Private Garden Homes, 12 acres of Gated Community, 4 BHK Duplex Homes, Designer Modelled Driveways, Verdant Green Walkways and more. With the growing business hub of North Bangalore, we are also bringing luxury living homes that are well-connected to the airport with a host of enhanced amenities and our signature community lifestyle. Visit our website (Website) or call us at (+91 905455 95000) to know more.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>3. Completed Projects</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>Bringing Meaningful Homes to All Bangaloreans, our projects are strategically planned in serene and accessible areas, often nestled amidst lush natural surroundings reducing noise pollution. Find Gravity Homes located all over, from Talaghattapura, Kanakapura Main Road and Banashankari in South Bangalore to Rajanakunte and Hoskote Town in North Bangalore, with upcoming projects in Thanisandra, Chandrapura, Hosur Road, Yelahanka and more. Build your Home with Gravity. Call us at (Number) or mail us at (Email) today to know more.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>4. General Information</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>With over a decade of experience and some credible projects to our name, Gravity is committed to provide you more than just a living space but homes that touch lives and stay with you for a lifetime. Our mission is to empower your lifestyle choices with meaningful and quality living that enriches your lives.</span>
									<span>At Gravity, we are actively seeking a shift away from the growing apartment culture and offer you a variety of Duplex & Triplex, 3 & 4 BHK Luxury Villa & Villaments, Gated Communities, Garden Homes & more, that are crafted with mindful sustainable practices and sought-after modern amenities with a keen focus on maximising spacial comfort for enriching your lifestyle choices.</span>
									<span>With each project, we incorporate sought-after sustainable and natural materials projects, we make sure to minimise our environmental footprint and embrace nature in the best ways before you move in and embrace your home!</span>
									<span>For a living that feels grounded in your dreams. Find Gravity homes located all over, from Talaghattapura, Kanakapura Main Road and Banashankari in South Bangalore to Rajanakunte and Hoskote Town in North Bangalore, with upcoming projects in Thanisandra, Chandrapura, Hosur Road, Yelahanka and more. Build your Home with Gravity. Call us at (Number) or mail us at (Email) today to know more.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>5. Contact Our Team</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>We are excited to see your interest in purchasing your home with Gravity! Simply call us at (Number) or mail us at (Email) to know more. Throughout the process of your home purchase, and after, our team will be available to provide you with all the guidance and support you need for a seamless and enjoyable purchase. For a living that feels grounded in your dreams. Build your Home with Gravity today.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>6. Close Chat</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>Thank You for connecting with Gravity Homes. We hope we could solve your queries. Please reach out as at (Email) for any further assistance. Happy to assist you with homes that feel grounded in your dreams!</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>Sorry, we did not hear back from you. Please select an option from number 1-6 so that we can assist you with your inquiry.</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsListsEnd}`}>
								<div className={homeStyle.userReply}>Hi, I want to make an enquiry</div>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
							<div className={` ${homeStyle.chatbotOptionsLists} ${homeStyle.chatbotOptionsSelected}`}>
								<p className='mb-0'>
									<span>Sorry, that was an invalid response. Please select an option from number 1-6 so that we can assist you with your inquiry. You can also call us at (Number) or mail us at (Email) today to know more. Happy to assist you with homes that feel grounded in your dreams!</span>
								</p>
								<div className={homeStyle.chatTime}>09:30 AM</div>
							</div>
						</div>
						
					</div>

					<div className={`position-relative ${homeStyle.chatbotTextbox}`}>
						<input type='text' className={homeStyle.inputControl} placeholder='Type your Message here ...' />
						<span>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.4977 11.594L1.35188 2.15704C1.18652 2.08324 1 2.20426 1 2.38534V8.70659C1 8.82465 1.0826 8.92662 1.19809 8.95114L13.6204 11.588C13.8811 11.6433 13.8858 12.0138 13.6266 12.0757L1.19193 15.0451C1.07939 15.0719 1 15.1725 1 15.2882V21.6088C1 21.7914 1.18932 21.9124 1.355 21.8357L22.5008 12.0492C22.6956 11.959 22.6937 11.6815 22.4977 11.594Z" fill="#787878" />
							</svg>
						</span>
					</div>

				</div>
			</div>
		</>
	)
}

export default Chatbot