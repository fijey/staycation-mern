import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import React, { Component } from 'react'
import itemDetails from 'json/itemDetails.json'

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
        </>
    )
  }
}
