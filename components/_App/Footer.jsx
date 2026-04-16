import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Footer = () => {
    return (
        <>
            <footer className='footer-bg' style={{ backgroundImage: 'url(/images/nav_bg.jpg)' }}>
                <ParallaxProvider>
                    <Parallax speed={5}>
                        <Container className='z-index-1 position-relative'>
                            <div className='spacer-5' />
                            <Row className='justify-content-between'>
                                <Col md={3} sm={12}>
                                    <div className='d-flex flex-column justify-content-between h-100'>
                                        <div className='footer-logo text-center'>
                                            <div className='footer-logo-img'>
                                                <Image src='/images/gravity_homes_whites.png' className='img-fluid' alt='gravity-homes' width='142' height='61' />
                                            </div>
                                            <p className='mb-0 text-uppercase'>Inspired by Nature Built for You</p>
                                        </div>
                                        <div className='text-center'>
                                            <Link href='https://maps.app.goo.gl/2YXVweCENtR4KTsC8' className='footer-map-link text-center' target='_blank'>Find Us On Map
                                                <span className='d-inline-block ms-3'>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#EFE1CA" strokeWidth="1.5" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={5} sm={12}>
                                    <div className='footer-widget d-flex justify-content-between'>
                                        <div className='footer-links-widget d-flex flex-column'>
                                            <h4>Quick Menu</h4>
                                            <ul>
                                                <li>
                                                    <Link href='/' className='footer-link-text'>Home</Link>
                                                </li>
                                                <li>
                                                    <Link href='/about' className='footer-link-text'>About Us</Link>
                                                </li>
                                                <li>
                                                    <Link href='/project' className='footer-link-text'>Projects</Link>
                                                </li>
                                                <li>
                                                    <Link href='/living' className='footer-link-text'>Living</Link>
                                                </li>
                                                <li>
                                                    <Link href='/blog' className='footer-link-text'>Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href='/contact' className='footer-link-text'>Contact</Link>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className='footer-links-widget d-flex flex-column'>
                                            <h4>Others</h4>
                                            <ul>
                                                <li>
                                                    <Link href='/career' className='footer-link-text'>Career</Link>
                                                </li>
                                                <li>
                                                    <Link href='/faqs' className='footer-link-text'>FAQ's</Link>
                                                </li>
                                                <li>
                                                    <Link href='/invest-with-gravity' className='footer-link-text'>Invest with<br />Gravity</Link>
                                                </li>
                                                <li>
                                                    <Link href='/sitemap' className='footer-link-text'>Sitemap</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='footer-links-widget d-flex flex-column'>
                                            <h4>Legal</h4>
                                            <ul>
                                                <li>
                                                    <Link href='/terms' className='footer-link-text'>Terms of Use</Link>
                                                </li>
                                                <li>
                                                    <Link href='/privacy-policy' className='footer-link-text'>Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link href='/disclaimer' className='footer-link-text'>Disclaimer</Link>
                                                </li>
                                                <li>
                                                    <Link href='/rera-disclaimer' className='footer-link-text'>RERA Disclaimer</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} sm={12}>
                                    <div className='footer-links-widget d-flex flex-column text-end'>
                                        <h4>Connect with us</h4>

                                        <ul className='footer-contact-lists'>
                                            <li>
                                                <span>(+91) 95389 44994</span>
                                                <span className='footer_icon'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.9999 15.46L15.7299 14.85L13.2099 17.37C10.3711 15.9262 8.06368 13.6188 6.6199 10.78L9.1499 8.25L8.5399 3H3.0299C2.4499 13.18 10.8199 21.55 20.9999 20.97V15.46Z" fill="white" />
                                                    </svg>
                                                </span>
                                            </li>
                                            <li>
                                                <span>Gravity Homes<br />#18B, Bharat Apartments<br />3rd floor, 5th Main Road<br />39th Cross, 5th Block<br />Jayanagar,Bengaluru<br />Karnataka 560041</span>
                                                <span className='footer_icon'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="white" />
                                                    </svg>
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className='footer-social-lists d-flex align-items-center justify-content-between'>
                                            <li>
                                                <Link href='https://www.youtube.com/@GravityHomes' title="Gravity Homes Youtube" target='_blank'>
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_663_6054)">
                                                            <path d="M34.3725 12.7325C34.203 12.0941 33.8688 11.5114 33.4033 11.0429C32.9377 10.5743 32.3573 10.2362 31.72 10.0625C29.3812 9.43127 20 9.43127 20 9.43127C20 9.43127 10.6187 9.43127 8.27875 10.0625C7.64176 10.2365 7.06162 10.5747 6.59635 11.0433C6.13108 11.5118 5.79699 12.0943 5.6275 12.7325C5 15.0875 5 20 5 20C5 20 5 24.9125 5.6275 27.2675C5.79698 27.9059 6.13122 28.4886 6.59674 28.9572C7.06226 29.4258 7.64272 29.7638 8.28 29.9375C10.6188 30.5688 20 30.5688 20 30.5688C20 30.5688 29.3813 30.5688 31.7213 29.9375C32.3586 29.764 32.9391 29.4259 33.4046 28.9573C33.8702 28.4887 34.2044 27.906 34.3738 27.2675C35 24.9125 35 20 35 20C35 20 35 15.0875 34.3725 12.7325ZM16.9312 24.46V15.54L24.7725 20L16.9312 24.46Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_663_6054">
                                                                <rect width="30" height="30" fill="white" transform="translate(5 5)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.instagram.com/gravityhomesin/' title="Gravity Homes Instagram" target='_blank'>
                                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.5 10C17.7833 10 17.4442 10.0125 16.3775 10.06C15.3125 10.11 14.5875 10.2775 13.95 10.525C13.2925 10.78 12.7342 11.1225 12.1783 11.6783C11.6225 12.2342 11.2792 12.7917 11.025 13.45C10.7775 14.0875 10.6092 14.8125 10.56 15.8775C10.51 16.9442 10.5 17.2833 10.5 20C10.5 22.7167 10.5125 23.0558 10.56 24.1225C10.61 25.1867 10.7775 25.9125 11.025 26.55C11.2761 27.2174 11.6697 27.822 12.1783 28.3217C12.6777 28.8307 13.2824 29.2243 13.95 29.475C14.5883 29.7217 15.3133 29.8908 16.3775 29.94C17.4442 29.99 17.7833 30 20.5 30C23.2167 30 23.5558 29.9875 24.6225 29.94C25.6867 29.89 26.4125 29.7217 27.05 29.475C27.7172 29.2236 28.3218 28.8301 28.8217 28.3217C29.3309 27.8224 29.7245 27.2177 29.975 26.55C30.2217 25.9125 30.3908 25.1867 30.44 24.1225C30.49 23.0558 30.5 22.7167 30.5 20C30.5 17.2833 30.4875 16.9442 30.44 15.8775C30.39 14.8133 30.2217 14.0867 29.975 13.45C29.7238 12.7827 29.3302 12.1781 28.8217 11.6783C28.3226 11.1689 27.7178 10.7752 27.05 10.525C26.4125 10.2775 25.6867 10.1092 24.6225 10.06C23.5558 10.01 23.2167 10 20.5 10ZM20.5 11.8C23.1692 11.8 23.4875 11.8133 24.5417 11.8592C25.5167 11.905 26.0458 12.0667 26.3975 12.205C26.8658 12.3858 27.1975 12.6025 27.5492 12.9517C27.8983 13.3017 28.115 13.6342 28.2958 14.1025C28.4325 14.4542 28.5958 14.9833 28.64 15.9583C28.6875 17.0133 28.6983 17.33 28.6983 20C28.6983 22.67 28.6858 22.9875 28.6367 24.0417C28.5858 25.0167 28.4233 25.5458 28.2858 25.8975C28.1232 26.3315 27.8675 26.7246 27.5367 27.0492C27.2134 27.3802 26.8206 27.6353 26.3867 27.7958C26.0367 27.9325 25.4992 28.0958 24.5242 28.14C23.4625 28.1875 23.15 28.1983 20.475 28.1983C17.7992 28.1983 17.4867 28.1858 16.4258 28.1367C15.45 28.0858 14.9125 27.9233 14.5625 27.7858C14.1283 27.6252 13.7356 27.3692 13.4133 27.0367C13.0788 26.7156 12.8223 26.3222 12.6633 25.8867C12.5258 25.5367 12.3642 24.9992 12.3133 24.0242C12.2758 22.9742 12.2625 22.65 12.2625 19.9875C12.2625 17.3242 12.2758 16.9992 12.3133 15.9367C12.3642 14.9617 12.5258 14.425 12.6633 14.075C12.8383 13.6 13.0625 13.275 13.4133 12.9242C13.7625 12.575 14.0883 12.35 14.5625 12.1758C14.9125 12.0375 15.4383 11.875 16.4133 11.825C17.4758 11.7875 17.7883 11.775 20.4625 11.775L20.5 11.8ZM20.5 14.865C19.8257 14.865 19.1579 14.9978 18.5349 15.2559C17.9119 15.5139 17.3458 15.8922 16.869 16.369C16.3922 16.8458 16.0139 17.4119 15.7559 18.0349C15.4978 18.6579 15.365 19.3257 15.365 20C15.365 20.6743 15.4978 21.3421 15.7559 21.9651C16.0139 22.5881 16.3922 23.1542 16.869 23.631C17.3458 24.1078 17.9119 24.4861 18.5349 24.7441C19.1579 25.0022 19.8257 25.135 20.5 25.135C21.8619 25.135 23.168 24.594 24.131 23.631C25.094 22.668 25.635 21.3619 25.635 20C25.635 18.6381 25.094 17.332 24.131 16.369C23.168 15.406 21.8619 14.865 20.5 14.865ZM20.5 23.3333C18.6583 23.3333 17.1667 21.8417 17.1667 20C17.1667 18.1583 18.6583 16.6667 20.5 16.6667C22.3417 16.6667 23.8333 18.1583 23.8333 20C23.8333 21.8417 22.3417 23.3333 20.5 23.3333ZM27.0383 14.6625C27.0268 14.973 26.8953 15.267 26.6715 15.4826C26.4477 15.6982 26.1491 15.8186 25.8383 15.8186C25.5276 15.8186 25.229 15.6982 25.0052 15.4826C24.7814 15.267 24.6499 14.973 24.6383 14.6625C24.6383 14.3442 24.7648 14.039 24.9898 13.814C25.2148 13.5889 25.5201 13.4625 25.8383 13.4625C26.1566 13.4625 26.4618 13.5889 26.6869 13.814C26.9119 14.039 27.0383 14.3442 27.0383 14.6625Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.linkedin.com/company/gravity-homes/' title="Gravity Homes Linkedin" target='_blank'>
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4660_12838)">
                                                        <path d="M0.5 22.6211C0.5 16.2133 0.5 9.80624 0.5 3.3985C0.519531 3.31964 0.538411 3.24077 0.557943 3.16256C0.963542 1.5383 2.28906 0.501304 3.9668 0.501304C10.0137 0.5 16.0599 0.501955 22.1061 0.5C22.9115 0.5 23.623 0.756153 24.2487 1.25477C24.9414 1.80684 25.3288 2.54075 25.5 3.3985V22.6211C25.3815 23.1809 25.1829 23.705 24.832 24.1651C24.2695 24.9017 23.5176 25.3201 22.6191 25.4993H3.38086C2.82031 25.3814 2.29557 25.1819 1.83594 24.8313C1.09896 24.2694 0.678385 23.5186 0.5 22.6204V22.6211ZM10.5286 15.5811C10.5286 17.0932 10.5286 18.6047 10.5286 20.1169C10.5286 20.6266 10.6953 20.7954 11.1973 20.7967C11.832 20.798 12.4661 20.798 13.1009 20.7967C13.6204 20.7954 13.7682 20.6481 13.7689 20.1312C13.7695 18.5708 13.7643 17.0098 13.7715 15.4494C13.7741 14.8556 13.9036 14.286 14.2272 13.7782C14.6003 13.1936 15.1536 12.955 15.832 13.0117C16.5391 13.071 17.0013 13.4536 17.224 14.1256C17.3529 14.5148 17.4076 14.9163 17.4076 15.3249C17.4089 16.9342 17.4076 18.5435 17.4076 20.1534C17.4076 20.6324 17.5384 20.7687 18.0104 20.7706C18.7103 20.7739 19.4095 20.7732 20.1094 20.7706C20.5853 20.7687 20.7389 20.6181 20.7402 20.1436C20.7474 18.2254 20.7467 16.3072 20.6908 14.3896C20.668 13.6159 20.5286 12.8547 20.2077 12.1396C19.7962 11.2219 19.11 10.6216 18.1296 10.3739C17.3763 10.1836 16.6159 10.1914 15.8561 10.329C15.0872 10.4678 14.4603 10.8432 13.9844 11.467C13.944 11.5198 13.9141 11.6221 13.8255 11.5843C13.7487 11.5511 13.7767 11.4553 13.7747 11.3849C13.7702 11.2304 13.7747 11.0759 13.7715 10.9214C13.763 10.5428 13.6139 10.3928 13.2318 10.3909C12.5566 10.3883 11.8815 10.3896 11.2064 10.3902C10.6751 10.3902 10.5286 10.5369 10.5286 11.0707C10.528 12.5744 10.5286 14.0781 10.5286 15.5817V15.5811ZM8.98503 15.5993C8.98503 14.0787 8.98568 12.5587 8.98503 11.0381C8.98503 10.5356 8.83463 10.3896 8.32552 10.3883C7.69075 10.387 7.05599 10.387 6.42122 10.3883C5.91862 10.3896 5.74349 10.561 5.74349 11.059C5.74284 14.0755 5.74284 17.0919 5.74349 20.1084C5.74349 20.6103 5.93099 20.7947 6.44206 20.7967C7.06836 20.7987 7.69531 20.7993 8.32161 20.7967C8.80599 20.7947 8.98438 20.6168 8.98503 20.1364C8.98633 18.6243 8.98503 17.1121 8.98503 15.5993ZM5.28255 7.32814C5.2806 8.49549 6.20508 9.43015 7.36263 9.43146C8.52344 9.43276 9.46354 8.50266 9.46875 7.34899C9.47396 6.17903 8.5345 5.22742 7.37109 5.22547C6.22526 5.22351 5.2845 6.17056 5.28255 7.32879V7.32814Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_4660_12838">
                                                        <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='https://www.facebook.com/GravityHomes/' title="Gravity Homes Facebook" target='_blank'>
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30 20C30 14.4775 25.5225 10 20 10C14.4775 10 10 14.4775 10 20C10 24.9917 13.6567 29.1283 18.4375 29.8783V22.8908H15.8983V19.9992H18.4375V17.7975C18.4375 15.2917 19.9308 13.9067 22.215 13.9067C23.3083 13.9067 24.4533 14.1025 24.4533 14.1025V16.5633H23.1917C21.9492 16.5633 21.5617 17.3342 21.5617 18.125V20H24.335L23.8917 22.8917H21.5617V29.8792C26.3433 29.1283 30 24.9908 30 20Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <div className='spacer-5' />
                            <Row>
                                <Col md={12} sm={12} className='text-center'>
                                    <p className='mb-0 text-center copyright-content'>

                                        © 2023 Official Website of Gravity. We are committed to protecting and processing your personal data responsibly.</p>
                                </Col>
                                <div className='spacer-5' />
                            </Row>
                        </Container>
                    </Parallax>
                </ParallaxProvider>
            </footer>
        </>
    )
}

export default Footer