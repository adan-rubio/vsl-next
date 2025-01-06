import { useEffect } from "react";
import Image from "next/image";

export default function ThankYouPage() {
    useEffect(() => {
        // Cargar scripts de Wistia
        const wistiaScript1 = document.createElement("script");
        wistiaScript1.src =
            "https://fast.wistia.com/embed/medias/i5r5qoyoor.jsonp";
        wistiaScript1.async = true;
        document.body.appendChild(wistiaScript1);

        const wistiaScript2 = document.createElement("script");
        wistiaScript2.src = "https://fast.wistia.com/assets/external/E-v1.js";
        wistiaScript2.async = true;
        document.body.appendChild(wistiaScript2);

        // Limpiar scripts al desmontar el componente
        return () => {
            document.body.removeChild(wistiaScript1);
            document.body.removeChild(wistiaScript2);
        };
    }, []);

    return (
        <div className="page-container">
            <style jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #f8f9fa;
                    font-family: Syne, sans-serif;
                    color: #333;
                }

                .page-container {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 2em;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1em;
                    line-height: 1.5;
                }

                .highlight {
                    font-weight: bold;
                    color: #6a1b9a;
                }

                .product-access {
                    margin-top: 40px;
                }

                .product-access h2 {
                    font-size: 1.5em;
                    margin-bottom: 20px;
                }

                .product-access ul {
                    list-style: none;
                    padding: 0;
                }

                .product-access li {
                    margin-bottom: 10px;
                }

                .mockup-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: left;
                    gap: 20px;
                    box-sizing: border-box;
                }

                .mockup-container img {
                    width: 100%;
                    max-width: 200px;
                    height: auto;
                    border-radius: 5px;
                }

                .mockup-container div {
                    flex: 1;
                }

                @media (max-width: 767px) {
                    .mockup-container {
                        flex-direction: column;
                        text-align: center;
                        padding: 15px;
                    }
                    .mockup-container img {
                        max-width: 100%;
                        margin-bottom: 10px;
                    }
                    .mockup-container div {
                        text-align: center;
                    }
                }
            `}</style>

            <h1>¡Gracias por tu compra!</h1>

            {/* Video de Wistia */}
            <div className="wistia_responsive_padding">
                <div className="wistia_responsive_wrapper">
                    <div className="wistia_embed wistia_async_i5r5qoyoor videoFoam=true">
                        &nbsp;
                    </div>
                </div>
            </div>

            <p>
                ¡Gracias por tu compra! No solo has adquirido el <em>Cuaderno de Ejercicios</em>, sino que también adquiriste la{" "}
                <span className="highlight">Plantilla de 30 minutos al día</span> para aplicar
                todo lo aprendido sin perder tiempo.
            </p>
            <p>
                Con esta plantilla interactiva, podrás avanzar de forma constante durante
                4 semanas, sincronizarla con tu calendario personal y ver resultados
                tangibles en tu marca mientras gestionas tu tiempo de manera eficiente.
            </p>

            <div className="product-access">
                <h2>Te enviaremos los recursos a tu correo:</h2>

                {/* Mockup 1 */}
                <div className="mockup-container">
                    <Image
                        src="/images/mockup-1.webp"
                        alt="Libro Digital: El Arte de Crear una Marca"
                        width={310}
                        height={310}
                    />
                    <div>
                        <strong>Libro Digital: El Arte de Crear una Marca</strong>
                        <p>
                            Aprende el método probado en 10 pasos para construir una marca sólida,
                            auténtica y rentable desde cero, en tiempo récord.
                        </p>
                    </div>
                </div>

                {/* Mockup 2 */}
                <div className="mockup-container">
                    <Image
                        src="/images/mockup-2.webp"
                        alt="Cuaderno de Ejercicios: Aterriza tu Marca"
                        width={310}
                        height={310}
                    />
                    <div>
                        <strong>Cuaderno de Ejercicios: Aterriza tu Marca</strong>
                        <p>
                            El sistema práctico que te ayudará a transformar cada concepto del libro
                            en acciones claras para estructurar tu marca desde el propósito hasta la
                            estrategia.
                        </p>
                    </div>
                </div>

                {/* Mockup 4 */}
                <div className="mockup-container">
                    <Image
                        src="/images/mockup-4.webp"
                        alt="Rutina de 30 Minutos para Crear tu Marca"
                        width={310}
                        height={310}
                    />
                    <div>
                        <strong>Rutina de 30 Minutos para Crear tu Marca</strong>
                        <p>
                            Plantilla interactiva en Notion para avanzar diariamente y obtener resultados claros en 4 semanas.
                        </p>
                    </div>
                </div>

                {/* Mockup 3 */}
                <div className="mockup-container">
                    <Image
                        src="/images/mockup-3.webp"
                        alt="Comunidad Partum"
                        width={310}
                        height={310}
                    />
                    <div>
                        <strong>Comunidad Partum</strong>
                        <p>
                            Únete a un espacio exclusivo con emprendedores como tú, donde recibirás apoyo, inspiración y recursos gratuitos.
                        </p>
                    </div>
                </div>
            </div>

            <p>
                Revisa tu correo electrónico. Te hemos enviado un email con todos los
                enlaces para que siempre tengas a mano tus recursos. Si no encuentras el
                mensaje, revisa tu bandeja de spam o promociones.
            </p>
            <p>
                Ahora es el momento de tomar acción. Implementa lo aprendido, utiliza la
                plantilla para mantener el ritmo y construye esa marca que te generará
                ventas de forma constante.
            </p>
            <p>
                <span className="highlight">¡Manos a la obra!</span>
            </p>

            <footer>
                <p>© 2024 LOGOS PARTUM. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
