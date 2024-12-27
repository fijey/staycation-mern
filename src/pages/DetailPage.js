import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import React, { Component } from 'react'
import itemDetails from 'json/itemDetails.json'
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Footer from 'parts/Footer';
import { connect } from 'react-redux';
import { checkoutBooking } from 'store/actions/checkout';

class DetailPage extends Component {
    componentDidMount() {
        window.title = 'Staycation | Detail';
        window.scrollTo(0, 0);
    }
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "/" },
            { pageTitle: "Home Detail", pageHref: "" }
        ]
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails}></PageDetailTitle>
                <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>

                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails}></PageDetailDescription>
                        </div>
                        <div className="col-5">
                            <BookingForm
                                itemDetails={itemDetails}
                                startBooking={this.props.checkoutBooking}
                            />
                        </div>
                    </div>
                </section>

                <Categories data={itemDetails.categories}></Categories>
                <Footer></Footer>
            </>
        )
    }
}

export default connect(null, { checkoutBooking })(DetailPage)
