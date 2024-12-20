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

export default class CheckoutPage extends Component {
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

  render() {
    const { data } = this.state;
	const checkout = {
		duration: 3
	  }
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "please fill up the blank fields below",
        content: (
          <BookingInformation
          data={data}
          checkout={checkout}
          itemDetails={itemDetails}
          onChange={this.onChange} />
        )
      },
      payment : {
        title: 'Payment',
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            itemDetails={itemDetails}
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
                            <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
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
