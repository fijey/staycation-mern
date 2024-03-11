/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router } from 'react-router-dom';


test("should  not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
}) 

test("should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector('span')).toBeInTheDocument()
}) 

test("should render <a> tag if is External", () => {
    const { container, getByText } = render(<Button type='link' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
}) 

test("should render <Link> tag", () => {
    const { container } = render(<Router><Button type='link'></Button></Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
}) 
