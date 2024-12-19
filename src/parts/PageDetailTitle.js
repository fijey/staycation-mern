import Breadcrumb from 'elements/Breadcrumb'
import React from 'react'

export default function PageDetailTitle({data, breadcrumb}) {
  return (
    <section className='container spacing-sm'>
            <div className='row align-items-center'>
                <div className='col'>
                    <Breadcrumb data={breadcrumb}/>
                </div>
                <div className='col-auto text-center'>
                    <h1 className='h1'>{data.name}</h1>
                    <span className='text-grey-400'>
                        {data.city}, {data.country}
                    </span>
                </div>
                <div className='col'></div>
            </div>
    </section>
  )
}
