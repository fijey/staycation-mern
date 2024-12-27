import React from 'react'
import Button from 'elements/Button'

export default function Activities({ data }) {
    if (data.length === 0) return null
    return (
        <section className="container">
            <h4 className='mb-3 font-weight-medium'>
                Activities
            </h4>
            <div className='container-grid'>
                {data.map((item, index2) => (
                    <div 
                        className='item column-3 row-1' 
                        key={`activity-${index2}`}
                        data-aos="fade" 
                        data-aos-delay={index2 * 400} 
                        data-aos-once='false'
                    >
                        <div className='card'>
                            {item.isPopular && (
                                <div className='tag'>
                                    Popular <span className='font-weight-light'>Choice</span>
                                </div>
                            )}
                            <figure className='img-wrapper' style={{ height: 180 }}>
                                <img 
                                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} 
                                    alt={item.name} 
                                    className='img-cover'
                                />
                            </figure>
                            <div className='meta-wrapper'>
                                <Button 
                                    type='link' 
                                    href={`/properties/${item._id}`} 
                                    className='stretched-link d-block text-gray-500'
                                >
                                    <h4 className='mb-2 font-weight-medium text-dark'>
                                        {item.name}
                                    </h4>
                                </Button>
                                <span className='text-gray-500'>
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
