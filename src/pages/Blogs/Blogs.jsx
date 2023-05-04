import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <h1 className='fs-1 fw-bolder text-center my-5'>Blogs</h1>
                <div className='border border-warning p-3 rounded m-3'>
                    <h4>1. Tell us the differences between uncontrolled and controlled components.</h4>
                    <p className='fw-semibold '>
                        A controlled component is a component whose state is managed by the parent component. In other words, the parent component has full control over the values of the props and state of the child component. The child component can only update its state when the parent component passes new props to it. Controlled components are typically used for form elements, such as input fields and select boxes.
                        On the other hand, an uncontrolled component is a component that manages its own state internally, without any input from the parent component. In other words, the parent component has no control over the values of the props and state of the child component. The child component can update its state at any time, without the parent component being aware of the changes. Uncontrolled components are typically used for form elements, such as input fields and select boxes.
                    </p>
                </div>
                <div className='border border-warning p-3 rounded m-3'>
                    <h4>2. How to validate React props using PropTypes?</h4>
                    <p className='fw-semibold '>
                    PropTypes is a built-in typechecking feature in React that allows us to validate the props passed to a component. To use PropTypes, we import it from the 'prop-types' package and define the expected type for each prop. 
                    </p>
                </div>
                <div className='border border-warning p-3 rounded m-3'>
                    <h4>3. Tell us the difference between nodejs and express js ?</h4>
                    <p className='fw-semibold '>
                    Node.js and Express.js are both JavaScript technologies that are often used for server-side web development.Node.js is a runtime environment that allows us to run JavaScript code outside of the browser. It provides the core features and APIs of the JavaScript language, such as the ability to create and manipulate objects, control flow, and perform I/O operations. Express.js, on the other hand, is a web framework that is built on top of Node.js. It provides additional features and abstractions that make it easier to build web applications, such as middleware for handling HTTP requests and responses, routing, and templating.
                    </p>
                </div>
                <div className='border border-warning p-3 rounded m-3'>
                    <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                    <p className='fw-semibold '>
                        A custom hook in React is a JavaScript function that uses one or more built-in hooks and allows us to reuse stateful logic across multiple components. Custom hooks are a way to abstract away repetitive or complex logic into reusable functions, making our code more modular and easier to maintain.

                        Creating a custom hook is useful when we have a piece of stateful logic that we need to reuse across multiple components. For example, let's say we have a component that needs to fetch data from an API and display it. We can create a custom hook to handle the API call and data fetching logic, so we can reuse it across multiple components that need to fetch data from the same API.
                    </p>
                </div>
            </Container>

        </div>
    );
};

export default Blogs;