'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function CheckoutOferta() {
    useEffect(() => {
        // Opcional: cualquier lógica adicional que desees ejecutar en el cliente
    }, []);

    return (
        <div className="page-container">
            <style jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #f8f9fa;
                    font-family: Syne, sans-serif;
                }

                .content-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50vh;
                    text-align: center;
                }

                .card {
                    max-width: 600px;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: transparent;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .mockup-container {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    text-align: left;
                    max-width: 100%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    padding: 10px;
                }

                @media (max-width: 767px) {
                    .mockup-container {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
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
                        font-size: 10px;
                        line-height: 1.4;
                    }
                }

                .offer-container {
                    width: 100vw;
                    margin: 20px calc(-50vw + 50%);
                    padding: 20px;
                    border: 2px dashed #28a745;
                    border-radius: 10px;
                    text-align: center;
                    box-sizing: border-box;
                }

                @media (max-width: 768px) {
                    .offer-container {
                        width: calc(100% + 45px);
                        margin: 10px -25px;
                        padding: 15px;
                        border-radius: 5px;
                    }
                }

                @media (min-width: 768px) {
                    .offer-container {
                        width: 100%;
                        margin: 20px auto;
                    }
                }

                .cta-button {
                    display: inline-block;
                    background-color: #ff5c00;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-family: Syne, sans-serif;
                    font-size: 16px;
                    text-decoration: none;
                    font-weight: bold;
                    color: #fff;
                    transition: background-color 0.3s ease;
                }

                .cta-button:hover {
                    background-color: #e64f00;
                }

                footer {
                    margin-top: 40px;
                    text-align: center;
                }

                footer p {
                    font-size: 10px;
                    color: #666;
                }
            `}</style>

            {/* Encabezado */}
            <p className="subheading">La clase exprés revela</p>
            <h1 className="main-title">
        <span style={{ color: 'black' }}>
          Por qué tu estrategia de ventas no funciona y
        </span>
                <span style={{ color: '#6a1b9a' }}>
          cómo una marca bien construida
        </span>
                <span style={{ color: 'black' }}>
          puede cambiar el juego hoy mismo
        </span>
            </h1>
            <p className="description">
                (Después de esta clase exprés podrás vender con cualquier estrategia)
            </p>

            {/* Video integrado */}
            <div id="video-container" style={{ margin: '0 auto', width: '100%' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                        frameBorder="0"
                        allowFullScreen
                        src="https://scripts.converteai.net/acf84797-84aa-4103-9939-caab0771ae92/players/67662160572299dbc2d821d5/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        referrerPolicy="origin"
                    ></iframe>
                </div>
            </div>

            {/* Oferta */}
            <div id="session-container" style={{ display: 'none' }}>
                <h1 style={{ marginTop: '20px', textAlign: 'center' }}>
                    ADQUIERE mi Libro Digital para Construir una Marca que Venda con Cualquier Estrategia de Ventas
                </h1>

                {/* Mockups */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <picture>
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-desktop-0.webp"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-mobile-0.webp"
                            media="(max-width: 767px)"
                        />
                        <img
                            src="/wp-content/uploads/2024/12/mockup-desktop-0.webp"
                            alt="EL ARTE DE CREAR UNA MARCA Mockup"
                            width="1292"
                            height="682"
                            style={{ width: '100%', maxWidth: '646px', height: 'auto', margin: '20px 0' }}
                        />
                    </picture>
                </div>

                <div className="mockup-container">
                    <picture>
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-desktop-1.webp"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-mobile-1.webp"
                            media="(max-width: 767px)"
                        />
                        <img
                            src="/wp-content/uploads/2024/12/mockup-desktop-1.webp"
                            alt="Mockup Libro"
                            style={{ maxWidth: '150px', marginBottom: '10px' }}
                        />
                    </picture>
                    <div style={{ textAlign: 'left', color: '#6a1b9a' }}>
                        <strong>
                            Libro Digital: El Arte de Crear una Marca -{' '}
                            <span style={{ color: '#28a745' }}>Valorado en: $29.99 USD</span>
                        </strong>
                        <p style={{ color: 'black' }}>
                            Aprende el método probado en 10 pasos para construir una marca sólida,
                            auténtica y rentable desde cero, en tiempo récord. (Ideal para
                            emprendedores que buscan destacar en cualquier industria SIN COMETER
                            ERRORES).
                        </p>
                    </div>
                </div>

                <div className="mockup-container">
                    <picture>
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-desktop-2.webp"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-mobile-2.webp"
                            media="(max-width: 767px)"
                        />
                        <img
                            src="/wp-content/uploads/2024/12/mockup-desktop-2.webp"
                            alt="Mockup Cuaderno"
                            style={{ maxWidth: '150px', marginBottom: '10px' }}
                        />
                    </picture>
                    <div style={{ textAlign: 'left', color: '#6a1b9a' }}>
                        <strong>
                            Cuaderno de Ejercicios: Aterriza tu Marca -{' '}
                            <span style={{ color: '#28a745' }}>Valorado en: $19.99 USD</span>
                        </strong>
                        <p style={{ color: 'black' }}>
                            El sistema práctico que te ayudará a transformar cada concepto del
                            libro en acciones claras para estructurar tu marca desde el propósito
                            hasta la estrategia. (Perfecto para quienes necesitan claridad y
                            resultados tangibles al avanzar).
                        </p>
                    </div>
                </div>

                <div className="mockup-container">
                    <picture>
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-desktop-3.webp"
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet="/wp-content/uploads/2024/12/mockup-mobile-3.webp"
                            media="(max-width: 767px)"
                        />
                        <img
                            src="/wp-content/uploads/2024/12/mockup-desktop-3.webp"
                            alt="Mockup Comunidad"
                            style={{ maxWidth: '150px', marginBottom: '10px' }}
                        />
                    </picture>
                    <div style={{ textAlign: 'left', color: '#6a1b9a' }}>
                        <strong>
                            Acceso de por vida a la Comunidad Partum -{' '}
                            <span style={{ color: '#28a745' }}>Invaluable</span>
                        </strong>
                        <p style={{ color: 'black' }}>
                            Te conectarás con emprendedores como tú en un espacio exclusivo,
                            donde recibirás apoyo, inspiración y recursos gratuitos para avanzar
                            con tu marca. (Nunca más estarás solo en el camino hacia tus metas).
                        </p>
                    </div>
                </div>

                <div className="offer-container">
                    <h2
                        style={{
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            fontSize: '16px',
                            color: '#6a1b9a',
                        }}
                    >
                        Lo que recibirás al comprar:
                    </h2>
                    <ul className="listado">
                        <li>
              <span>
                ✅ <strong>Libro Digital</strong>
              </span>
                            <span>
                (Valorado en <b style={{ color: '#28a745' }}>$29.99 USD</b>)
              </span>
                        </li>
                        <li>
              <span>
                ✅ <strong>Cuaderno de ejercicios</strong>
              </span>
                            <span>
                (Valorado en <b style={{ color: '#28a745' }}>$19.99 USD</b>)
              </span>
                        </li>
                        <li>
              <span>
                ✅ <strong>Comunidad Partum</strong>
              </span>
                            <span>
                (<b style={{ color: '#28a745' }}>Invaluable</b>)
              </span>
                        </li>
                    </ul>
                    <p
                        style={{
                            margin: '20px 0',
                            fontSize: '18px',
                            textAlign: 'center',
                        }}
                    >
            <span style={{ color: '#8a8a8a' }}>
              Precio regular:{' '}
                <del style={{ color: '#FF0000' }}>
                <b>$49.98 USD</b>
              </del>
            </span>
                        <br />
                        <span
                            style={{
                                color: '#28a745',
                                fontSize: '19px',
                                fontWeight: 'bold',
                            }}
                        >
              SÓLO POR 1 HORA: <br /> $9.99 USD
            </span>
                    </p>
                    <Link href="/boton-checkout-oferta" className="cta-button">
                        Quiero comprar el Libro digital!
                    </Link>
                </div>
            </div>

            <footer>
                <p>
                    © 2024 LOGOS PARTUM. All Rights Reserved.
                    <br />
                    Descargo de Responsabilidad: Este producto no garantiza la obtención de
                    resultados. Las referencias al desempeño de una determinada estrategia no
                    debe ser interpretada como una garantía de resultados. Esta página no es
                    parte de la página de Meta o de Meta, Inc.
                </p>
            </footer>
        </div>
    );
}
