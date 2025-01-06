import { useEffect } from "react";

export default function Checkout() {
    useEffect(() => {
        setTimeout(() => {
            const sessionContainer = document.getElementById("session-container");
            if (sessionContainer) {
                sessionContainer.style.display = "block";
            }
        }, 5000);
    }, []);

    return (
        <div>
            <style jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #f8f9fa;
                    font-family: Syne, sans-serif;
                    width: 100%;
                    overflow-x: hidden; /* Evita el desplazamiento horizontal */
                }

                .content-container {
                    text-align: center;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0;
                    box-sizing: border-box;
                }

                /* Título */
                .title-section h1 {
                    color: #000000;
                    font-size: 1.5em;
                    margin-bottom: 10px;
                    line-height: 1.2;
                }

                .title-section .highlight-text {
                    color: #6a1b9a; /* Color morado */
                }

                @media (max-width: 767px) {
                    .title-section h1 {
                        font-size: 1em; /* Ajusta el tamaño del texto en versión móvil */
                    }
                    .title-section .highlight-text {
                        font-size: 0.8em; /* Ajusta el tamaño del texto en versión móvil */
                    }
                }

                /* Mockup */
                .mockup-image {
                    margin: 20px 0;
                }

                .mockup-image img {
                    width: 100%;
                    max-width: 646px;
                    height: auto;
                    border-radius: 10px;
                }

                /* Cuadro verde */
                .offer-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 30px;
                    border: 3px solid #28a745;
                    border-radius: 15px;
                    background-color: #f8f9fa;
                    text-align: center;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    box-sizing: border-box;
                }

                ul.listado {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0;
                    font-size: 16px;
                    line-height: 1.8;
                }

                ul.listado li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 5px;
                    border-bottom: 1px dotted #ccc;
                    padding-bottom: 5px;
                }

                @media (max-width: 767px) {
                    ul.listado {
                        font-size: 12px; /* Ajusta el tamaño del texto en versión móvil */
                    }
                    ul.listado li:nth-child(2) {
                        font-size: 10px; /* Ajusta el tamaño del texto del segundo ítem en versión móvil */
                    }
                }

                footer {
                    text-align: center;
                }

                footer p {
                    font-size: 10px;
                    color: #666;
                }

                /* Ajuste dinámico de Hotmart */
                .checkout-area {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .checkout-area iframe {
                    width: 100%;
                    height: 1470px;
                    border: none;
                    overflow: hidden;
                }

                @media (max-width: 767px) {
                    .checkout-area iframe {
                        height: 1592px;
                        width: calc(100% + 20px);
                        margin: 10px -10px;
                    }
                }
            `}</style>

            <div className="content-container">
                {/* Título */}
                <div className="title-section">
                    <h1>
                        <span className="default-text">Obtén el Libro Digital</span>
                        <br />
                        <span className="highlight-text">EL ARTE DE CREAR UNA MARCA</span>
                        <br />
                        <span className="default-text">
                          solo por <span style={{color: "#28a745"}}>$29.99 USD!</span>
                        </span>
                    </h1>
                </div>

                {/* Mockup 0 */}
                <div className="mockup-image">
                    <picture>
                        <source srcSet="/images/mockup-0.webp" media="(min-width: 768px)" />
                        <source srcSet="/images/mockup-mobile-0.webp" media="(max-width: 767px)" />
                        <img src="/images/mockup-0.webp" alt="Mockup Ebook" />
                    </picture>
                </div>

                {/* Cuadro Verde */}
                <div className="offer-container">
                    <h2 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "16px", color: "#6a1b9a" }}>
                        Lo que recibirás al comprar:
                    </h2>
                    <ul className="listado">
                        <li>
                            <span>✅ <strong>Libro Digital</strong></span>
                            <span>(Valorado en <b style={{ color: "#28a745" }}>$29.99 USD</b>)</span>
                        </li>
                        <li>
                            <span>✅ <strong>Cuaderno de ejercicios</strong></span>
                            <span>(Valorado en <b style={{ color: "#28a745" }}>$19.99 USD</b>)</span>
                        </li>
                        <li>
                            <span>✅ <strong>Comunidad Partum</strong></span>
                            <span>(<b style={{ color: "#28a745" }}>Invaluable</b>)</span>
                        </li>
                    </ul>
                    <p style={{ margin: "20px 0", fontSize: "18px", textAlign: "center" }}>
                        <span style={{ color: "#8a8a8a" }}>
                            Precio regular: <del style={{ color: "#FF0000" }}><b>$49.98 USD</b></del>
                        </span>
                        <br />
                        <span style={{ color: "#28a745", fontSize: "20px", fontWeight: "bold" }}>
                            SÓLO POR 1 HORA: <br /> $29.99 USD
                        </span>
                    </p>
                </div>

                {/* Checkout Hotmart Embebido */}
                <div className="checkout-area">
                    <iframe
                        src="https://pay.hotmart.com/I96976409A?checkoutMode=2&off=jw0omol0A"
                        title="Checkout"
                    ></iframe>
                </div>

                {/* Footer */}
                <footer>
                    <div>
                        <span>Logos Partum</span>
                    </div>
                    <p>
                        © 2024 LOGOS PARTUM. All Rights Reserved.<br />
                        Descargo de Responsabilidad: Este producto no garantiza la obtención de resultados. Las referencias al desempeño de una determinada estrategia no deben ser interpretadas como una garantía de resultados. Esta página no es parte de la página de Meta o de Meta, Inc.
                    </p>
                </footer>
            </div>
        </div>
    );
}