import BookingInformation from 'parts/Checkout/BookingInformation';
import Header from 'parts/Header'
import React, { Component } from 'react'
import itemDetails from 'json/itemDetails.json'
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';
import Stepper from 'elements/Stepper';
import Numbering from 'elements/Stepper/Numbering';
import Meta from 'elements/Stepper/Meta';
import MainContent from 'elements/Stepper/MainContent';
import Controller from 'elements/Stepper/Controller';
import Button from 'elements/Button';
import { connect } from 'react-redux';
import { submitBooking } from 'store/actions/checkout';

class CheckoutPage extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: ""
    }
  }
  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      }
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep) => {
    const {data} = this.state;
    const {checkout} = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("emaisl", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    })
  }

  render() {
    const { data } = this.state;
	  const { checkout, page } = this.props;

    if(!checkout) return <div className='container'>
          <div className='row align-items-center justify-content-center text-center' style={{height: "100vh"}}>
            <div className='col-4'>
              Pilih kamar dulu
              <div>
                <Button className='btn mt-5' type='link' isLight href={`/`}>
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
 
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "please fill up the blank fields below",
        content: (
          <BookingInformation
          data={data}
          checkout={checkout}
          itemDetails={page[this.props.checkout._id].item}
          onChange={this.onChange} />
        )
      },
      payment : {
        title: 'Payment',
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            itemDetails={page[this.props.checkout._id].item}
            checkout={checkout}
            onChange={this.onChange}  
          />
        )
      },
      completed: {
        title: "Yeay! Completed",
        description: null,
        content: (<Completed/>)
      }
    }

    return (
      <>
        <Header isCentered/>
        <Stepper steps={steps}>
          {
            (prevStep, nextStep, currentStep, steps) => {
              return (
                <>
                  <Numbering
                    data={steps}
                    current={currentStep}
                    style={{marginBottom: 50}}
                  />
                  <Meta data={steps} current={currentStep} />
                  <MainContent data={steps} current={currentStep}/>
                  {
                    currentStep === "bookingInformation" && (
                      <Controller>
                        {
                          data.firstName !== "" &&
                          data.lastName !== "" &&
                          data.email !== "" &&
                          data.phone !== "" && (
                            <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                              Continue to Book
                            </Button>
                          )
                        }
                        <Button className="btn mb-3" type="button" isBlock isLight href={`/detail/${itemDetails.id}`}>
                          Cancel
                        </Button>
                      </Controller>
                    )
                  }
                  {
                    currentStep === "payment" && (
                      <Controller>
                        {
                          data.proofPayment !== "" &&
                          data.bankName !== "" &&
                          data.bankHolder !== "" && (
                            <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={()=> this._Submit(nextStep)}>
                              Continue to Book
                            </Button>
                          )
                        }
                        <Button className="btn mb-3" type="button" isBlock isLight onClick={prevStep}>
                          Cancel
                        </Button>
                      </Controller>
                    )
                  }
                  {
                    currentStep === "completed" && (
                      <Controller>
                        <Button className="btn mb-3" type="link" isBlock isPrimary hasShadow href="">
                          Back to Home
                        </Button>
                      </Controller>
                    )
                  }
                </>
              )
            }
          }
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page
})

export default connect(mapStateToProps, {submitBooking})(CheckoutPage)