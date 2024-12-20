import React, { useEffect } from 'react';
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import Button from 'elements/Button';
import { numberFormat } from 'utils/helper';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero(props) {
	useEffect(() => {
		AOS.init();
	}, []);

	const showMostPick = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: 'smooth'
		});
	}

	return (
			<section className='container pt-4'>
				<div className='row align-items-center'>
					<div className='col-auto pr-5' style={{ width: 530 }} 
						data-aos="fade-up" 
						data-aos-delay="100">
						<h1 className='font-weight-bold line-height-1 mb-3'>
							Forget Busy Work,<br />Start Next Vacation
						</h1>
						<p className='mb-5 font-weight-light text-gray-500 w-75'>
							We provide what you need to enjoy your
							holiday with family. Time to make another
							memorable moments.
						</p>
						<Button style={{ borderRadius: 8 }} className='btn px-5' isPrimary hasShadow onclick={showMostPick}> Show Me Now </Button>

						<div className='row mt-5'>
							<div className='col-auto' data-aos="flip-up" data-aos-delay="200">
								<img style={{ width: 36, height: 36 }} src={`/images/icon-traveler.svg`} alt={`${props.data.travellers} travelers`} />
								<h6 className='mt-2'>
									{numberFormat(props.data.travelers)} <span className='text-gray-500 font-weight-light'>Travelers</span>
								</h6>
							</div>
							<div className='col-auto' data-aos="flip-right" data-aos-delay="400">
								<img style={{ width: 36, height: 36 }} src={`/images/icon-treasure.svg`}  alt={`${props.data.travellers} treasures`} />
								<h6 className='mt-2'>
									{numberFormat(props.data.treasures)} <span className='text-gray-500 font-weight-light'>Treasures</span>
								</h6>
							</div>
							<div className='col-auto' data-aos="flip-left" data-aos-delay="600">
								<img style={{ width: 36, height: 36 }} src={`/images/icon-cities.svg`}  alt={`${props.data.travellers} cities`} />
								<h6 className='mt-2'>
									{numberFormat(props.data.cities)} <span className='text-gray-500 font-weight-light'>Cities</span>
								</h6>
							</div>
						</div>
					</div>
					<div className='col-6 pl-5 mt-5'
						data-aos="fade-up" 
						data-aos-delay="200">
						<div style={{ width: 520, height: 410 }}>
							<img src={ImageHero} alt='Room with couchers' className='img-fluid position-absolute'
								style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
							<img src={ImageHeroFrame} alt='Room with couchers Frame' className='img-fluid position-absolute'
								style={{ margin: '0 -15px -15px 0' }} />
						</div>
					</div>
				</div>
			</section>
	);
}
