import React from 'react';
import Button from 'elements/Button';


export default function MostPicked(props) {
	return (
		<section className='container' ref={props.refMostPicked}>
			<h4 className='mb-3'> Most Picked </h4>
			<div className='container-grid'>
				{
					props.data.map((item, index) => {
						return (
							<div key={index}
								data-aos="flip-right" data-aos-delay={index * 300} data-aos-once='false'
								className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
								<div className='card card-featured'>
									<div className='tag'>
										${item.price}
										<span className='font-weight-light'>Per ${item.unit}</span>
									</div>
									<figure className='img-wrapper'>
										<img
											src={item.imageUrl}
											alt={item.name}
											className='img-cover'
										/>
									</figure>
									<div className='meta-wrapper'>
										<Button type='link' href={`/detail/${item._id}`} className='streched-link d-block text-white'>
											<h4>{item.name}</h4>
										</Button>
										<span>
											{item.city} {item.country}
										</span>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	);
}
