
export const HelpUser = () => {

    return (
        <>
            <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">Frequently Asked Questions</h2>
                            <p className="text-secondary text-center lead fs-4">Welcome to our FAQ page, your one-stop resource for answers to commonly asked questions.</p>
                            <p className="mb-5 text-center">Whether you're a new customer looking to learn more about what we offer or a long-time user seeking clarification on specific topics, this page has clear and concise information about our products and services.</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-11 col-xl-10">
                                <div className="d-flex align-items-end mb-5">
                                    <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                                    <h3 className="m-0">Your Account</h3>
                                </div>
                            </div>
                            <div className="col-11 col-xl-10">
                                <div className="accordion accordion-flush" id="faqAccount">
                                    <div className="accordion-item bg-transparent border-top border-bottom py-3">
                                        <h2 className="accordion-header" id="faqAccountHeading1">
                                            <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
                                                What is an account?
                                            </button>
                                        </h2>
                                        <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
                                            <div className="accordion-body">
                                                <p>An account is a personal or organizational record that allows you to access and manage various services, often requiring authentication through a username and password.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent border-bottom py-3">
                                        <h2 className="accordion-header" id="faqAccountHeading2">
                                            <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse2" aria-expanded="false" aria-controls="faqAccountCollapse2">
                                                How do I create an account?
                                            </button>
                                        </h2>
                                        <div id="faqAccountCollapse2" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading2">
                                            <div className="accordion-body">
                                                <p>To create an account, visit the website or application and look for a "Sign Up" or "Create Account" button. Follow the instructions to enter your information and create a username and password.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent border-bottom py-3">
                                        <h2 className="accordion-header" id="faqAccountHeading3">
                                            <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse3" aria-expanded="false" aria-controls="faqAccountCollapse3">
                                                How do I secure my account?
                                            </button>
                                        </h2>
                                        <div id="faqAccountCollapse3" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading3">
                                            <div className="accordion-body">
                                                <p>To secure your account, use a robust and unique password, enable two-factor authentication if available, and be cautious about sharing your login information. Regularly update your password and avoid using easily guessable information like birthdays or names.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent border-bottom py-3">
                                        <h2 className="accordion-header" id="faqAccountHeading4">
                                            <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse4" aria-expanded="false" aria-controls="faqAccountCollapse4">
                                                What should I do if I forget my password?
                                            </button>
                                        </h2>
                                        <div id="faqAccountCollapse4" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading4">
                                            <div className="accordion-body">
                                                <p>If you forget your password, most websites and services offer a "Forgot Password" or "Reset Password" option. Follow the steps to reset your password, often involving an email or SMS verification.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent border-bottom py-3">
                                        <h2 className="accordion-header" id="faqAccountHeading5">
                                            <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse5" aria-expanded="false" aria-controls="faqAccountCollapse5">
                                                What should I do if my account is compromised or hacked?
                                            </button>
                                        </h2>
                                        <div id="faqAccountCollapse5" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading5">
                                            <div className="accordion-body">
                                                <p>If you suspect your account has been compromised, change your password immediately. Contact the service provider for further assistance, and consider enabling two-factor authentication for added security.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


