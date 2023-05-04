import React from 'react';
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
                        <FaExclamationCircle />
                        <span className="sr-only">Error</span>
                        {status || 404}
                    </h2>
                    <p className="">
                        {error?.message}
                    </p>
                    <div className='my-5 py-5 d-flex justify-content-center align-items-center fw-bold fs-3 '>
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