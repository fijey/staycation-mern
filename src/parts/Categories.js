import React from 'react';
import Button from 'elements/Button';


export default function Categories({ data }) {
    return data.map((category, index1) => {
        return category.itemId.length > 0 && (
            <section className='container' key={index1}>
                    <h4 className='mb-3 font-weight-medium'>
                        {category.name}
                    </h4>
                    <div className='container-grid'>
                        {
                                category.itemId.map((item, index2) => {
                                    return (
                                            <div className='item column-3 row-1' key={`category-${index1}-item${index2}`}
                                            data-aos="fade" data-aos-delay={index2 * 400} data-aos-once='false'>
                                                <div className='card'>
                                                    {
                                                        item.isPopular &&
                                                        <div className='tag'>
                                                            Popular <span className='font-weight-light'>Choice</span>
                                                        </div>
                                                    }
                                                    <figure className='img-wrapper' style={{ height: 180 }}>
                                                        <img src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`} alt={item.name} className='img-cover'>
                                                        </img>
                                                    </figure>
                                                    <div className='meta-wrapper'>
                                                        <Button type='link' href={`/detail/${item._id}`} className='streched-link d-block text-gray-500'>
                                                            <h4 className='mb-2 font-weight-medium text-dark'>
                                                                {item.title}
                                                            </h4>
                                                        </Button>
                                                        <span className='text-gray-500'>
                                                            {item.city}, {item.country}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                        }
                </div>
            </section >
        )
})
}
