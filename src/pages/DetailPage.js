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
import { fetchPage } from 'store/actions/page';
import Activities from 'parts/Activities';

class DetailPage extends Component {
    componentDidMount() {
        window.title = 'Staycation | Detail';
        window.scrollTo(0, 0);

        if (!this.props.page[this.props.match.params.id])
            this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id);
    }
    render() {
        const { page, match} = this.props;
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "/" },
            { pageTitle: "Home Detail", pageHref: "" }
        ]

        if (!page[match.params.id]) return null;
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id].item}></PageDetailTitle>
                <FeaturedImage data={page[match.params.id]}></FeaturedImage>

                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={page[match.params.id].item}></PageDetailDescription>
                        </div>
                        <div className="col-5">
                            <BookingForm
                                itemDetails={page[match.params.id].item}
                                startBooking={this.props.checkoutBooking}
                            />
                        </div>
                    </div>
                </section>

                <Activities data={page[match.params.id].item.activityId} />
                <Footer></Footer>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPage)
