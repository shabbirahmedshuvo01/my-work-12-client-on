import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl'>1:- How will you improve the performance of a React Application?</h2>
                <p className='mt-5 mx-12'>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.</p>
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-2xl'>2:- What are the different ways to manage a state in a React application?</h2>
                <p className='mt-5 mx-12'>A state is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI elements in the frontend.</p>
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-2xl'>3:- How does prototypical inheritance work?</h2>
                <p className='mt-5 mx-12'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the (Prototype) of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-2xl'>4:- Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                <p className='mt-5 mx-12'>If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.</p>
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-2xl'>5:- You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='mt-5 mx-12'>Useing filter in product array.the product have some information and but need any product to show ui or codes.so we can use and filter via name and find and set ta value or in ui</p>
            </div>
            <div className='text-center mt-5'>
                <h2 className='text-2xl'>6:- What is a unit test? Why should write unit tests?</h2>
                <p className='mt-5 mx-12'>To isolate issues that may arise, each test case should be tested independently. Substitutes such as method stubs, mock objects,[4] fakes, and test harnesses can be used to assist testing a module in isolation.

                    During development, a software developer may code criteria, or results that are known to be good, into the test to verify the unit's correctness. During test case execution, frameworks log tests that fail any criterion and report them in a summary. For this, the most commonly used approach is test - function - expected value.</p>
            </div>
        </div>
    );
};

export default Blogs;