import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import React, { Component } from 'react'
import itemDetails from 'json/itemDetails.json'
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import { Fade } from 'react-reveal';

export default class DetailPage extends Component {
    componentDidMount() {
        window.title = 'Staycation | Detail';
        window.scrollTo(0, 0);
    }
  render() {
    const breadcrumb = [
        {pageTitle: "Home", pageHref:"/"},
        {pageTitle: "Home Detail", pageHref: ""}
    ]
    return (
        <>
            <Header {...this.props}></Header>
            <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails}></PageDetailTitle>
            <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>

            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                    <Fade bottom>
                        <PageDetailDescription data={itemDetails}></PageDetailDescription>
                    </Fade>
                    </div>
                    <div className="col-5">
                    <Fade bottom>
                        {/* <BookingForm
                        itemDetails={page[match.params.id]}
                        startBooking={this.props.checkoutBooking}
                        /> */}
                    </Fade>
                    </div>
                </div>
            </section>
        </>
    )
  }
}
