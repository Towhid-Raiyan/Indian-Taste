import React from 'react';
import errorpage from '../../assets/404.png'
import { Link, useRouteError } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();
    const status = useRouteError();
    return (

        <section className="">
            <div className="d-flex justify-content-center align-items-center">
                <div className="">
                    <h2 className="fs-1 fw-bolder my-5 py-5">
                        <img src={errorpage} alt="" />
                    </h2>
                    <div className='my-3 pb-5 d-flex justify-content-center align-items-center fw-bold fs-3 '>
                        <Link
                            to="/"
                            className=" text-decoration-none  text-primary"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;