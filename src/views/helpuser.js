export const HelpUser = () => {
    return (
        <>
            <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
                <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
                    <div className="container fs-5">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="mb-4 display-5 text-center">Preguntas Frecuentes</h2>
                                <p className="text-secondary text-center lead fs-4">Bienvenido a nuestra página de preguntas frecuentes, tu recurso integral para obtener respuestas a las preguntas comúnmente formuladas.</p>
                                <p className="mb-5 text-center">Ya seas un nuevo cliente interesado en aprender más sobre lo que ofrecemos o un usuario buscando temas específicos, esta página tiene información clara y concisa sobre nuestros productos y servicios.</p>
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
                                        <h3 className="m-0">Tu Cuenta</h3>
                                    </div>
                                </div>
                                <div className="col-11 col-xl-10">
                                    <div className="accordion accordion-flush" id="faqAccount">
                                        <div className="accordion-item bg-transparent border-top border-bottom py-3">
                                            <h2 className="accordion-header" id="faqAccountHeading1">
                                                <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse1" aria-expanded="false" aria-controls="faqAccountCollapse1">
                                                    ¿Qué es una cuenta?
                                                </button>
                                            </h2>
                                            <div id="faqAccountCollapse1" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading1">
                                                <div className="accordion-body">
                                                    <p>Una cuenta es un registro personal que te permite acceder y gestionar varios servicios, generalmente requiriendo autenticación mediante un nombre de usuario y contraseña.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-transparent border-bottom py-3">
                                            <h2 className="accordion-header" id="faqAccountHeading2">
                                                <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse2" aria-expanded="false" aria-controls="faqAccountCollapse2">
                                                    ¿Cómo creo una cuenta?
                                                </button>
                                            </h2>
                                            <div id="faqAccountCollapse2" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading2">
                                                <div className="accordion-body">
                                                    <p>Para crear una cuenta, visita el sitio web y contactate con el area de ventas. Sigue las instrucciones para ingresar tu información y crear un nombre de usuario y contraseña.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-transparent border-bottom py-3">
                                            <h2 className="accordion-header" id="faqAccountHeading3">
                                                <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse3" aria-expanded="false" aria-controls="faqAccountCollapse3">
                                                    ¿Cómo aseguro mi cuenta?
                                                </button>
                                            </h2>
                                            <div id="faqAccountCollapse3" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading3">
                                                <div className="accordion-body">
                                                    <p>Para asegurar tu cuenta, utiliza una contraseña sólida y única, habilita la autenticación de dos factores si está disponible y ten precaución al compartir tu información de inicio de sesión. Actualiza regularmente tu contraseña y evita usar información fácilmente adivinable como fechas de cumpleaños o nombres.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-transparent border-bottom py-3">
                                            <h2 className="accordion-header" id="faqAccountHeading4">
                                                <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse4" aria-expanded="false" aria-controls="faqAccountCollapse4">
                                                    ¿Qué hago si olvidé mi contraseña?
                                                </button>
                                            </h2>
                                            <div id="faqAccountCollapse4" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading4">
                                                <div className="accordion-body">
                                                    <p>Si olvidaste tu contraseña, comunicate con el administrador de las cuentas o con el encargado de recursos humanos de tu empresa.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-transparent border-bottom py-3">
                                            <h2 className="accordion-header" id="faqAccountHeading5">
                                                <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target="#faqAccountCollapse5" aria-expanded="false" aria-controls="faqAccountCollapse5">
                                                    ¿Qué hago si mi cuenta ha sido comprometida o hackeada?
                                                </button>
                                            </h2>
                                            <div id="faqAccountCollapse5" className="accordion-collapse collapse" aria-labelledby="faqAccountHeading5">
                                                <div className="accordion-body">
                                                    <p>Si sospechas que tu cuenta ha sido comprometida, cambia tu contraseña de inmediato. Ponte en contacto con el proveedor de servicios para obtener más ayuda y considera habilitar la autenticación de dos factores para una mayor seguridad.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
};