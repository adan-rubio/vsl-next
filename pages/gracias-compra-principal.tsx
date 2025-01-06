import { useEffect } from "react";
import Image from "next/image";

export default function ThankYouPage() {
    useEffect(() => {
        // Aplicar estilos globales al cuerpo
        document.body.style.backgroundColor = "#f8f9fa";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.fontFamily = "Syne, sans-serif";
        document.body.style.color = "#333";

        return () => {
            // Restaurar estilos originales
            document.body.style.backgroundColor = "";
            document.body.style.margin = "";
            document.body.style.padding = "";
            document.body.style.fontFamily = "";
            document.body.style.color = "";
        };
    }, []);

    return (
        <div className="page-container">
            <style jsx>{`
                :root {
                    --primary-color: #6a1b9a;
                    --text-color: #333;
                    --highlight-color: #ff5c00;
                    --hover-highlight-color: #e64f00;
                }

                .page-container {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    color: var(--primary-color);
                    margin-bottom: 20px;
                }

                p {
                    line-height: 1.6;
                    margin: 20px 0;
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
                
                .highlight {
                    color: var(--primary-color);
                    font-weight: bold;
                }

                .product-access {
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 30px 0;
                    text-align: left;
                }

                .product-access h2 {
                    color: var(--primary-color);
                    margin-bottom: 10px;
                }

                .product-access ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }

                .product-access li {
                    margin: 10px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .product-access img {
                    width: 150px;
                    height: auto;
                    vertical-align: middle;
                    border-radius: 5px;
                }

                .hotmart-button {
                    display: inline-block;
                    background-color: var(--highlight-color);
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-family: Syne, sans-serif;
                    font-size: 16px;
                    text-decoration: none;
                    text-align: center;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                    color: #fff;
                }

                .hotmart-button:hover {
                    background-color: var(--hover-highlight-color);
                }

                footer {
                    margin-top: 40px;
                    text-align: center;
                }

                footer p {
                    font-size: 12px;
                    color: #666;
                }
            `}</style>

            <h1>¡Gracias por tu compra!</h1>
            <p>
                ¡Felicidades! Has dado el primer paso para construir una marca sólida y
                auténtica. Tu acceso al <em>Libro Digital &quot;El Arte de Crear una Marca&quot;</em> y el{" "}
                <em>Cuaderno de Ejercicios</em> ya está disponible.
            </p>
            <p>
                A partir de este momento, tienes en tus manos una guía práctica y comprobada,
                lista para ayudarte a definir tu propósito, diferenciarte de la competencia
                y establecer una estrategia que te permita vender 24/7.
            </p>
            <p>
                Aunque decidiste no aprovechar la plantilla de{" "}
                <span className="highlight">30 minutos al día</span>, aún cuentas con todas las
                herramientas esenciales para avanzar en tu camino. ¡No olvides que tu éxito
                depende de la acción constante!
            </p>

            {/* Mockup 1 */}
            <div className="mockup-container">
                <Image
                    src="/images/mockup-1.webp"
                    alt="Mockup 1"
                    width={310}
                    height={310}
                    layout="responsive"
                    style={{
                        maxWidth: "200px",
                        height: "auto",
                        margin: "20px 0",
                    }}
                />
                <div style={{ textAlign: "left", color: "#6a1b9a" }}>
                    <strong>
                        Libro Digital: El Arte de Crear una Marca{" "}
                    </strong>
                    <p style={{ color: "#8a8a8a" }}>
                        Aprende el método probado en 10 pasos para construir una marca sólida,
                        auténtica y rentable desde cero, en tiempo récord. (Ideal para
                        emprendedores que buscan destacar en cualquier industria SIN COMETER
                        ERRORES).
                    </p>
                </div>
            </div>

            {/* Mockup 2 */}
            <div className="mockup-container">
                <Image
                    src="/images/mockup-2.webp"
                    alt="Mockup 2"
                    width={310}
                    height={310}
                    layout="responsive"
                    style={{
                        maxWidth: "200px",
                        height: "auto",
                        margin: "20px 0",
                    }}
                />
                <div style={{ textAlign: "left", color: "#6a1b9a" }}>
                    <strong>
                        Cuaderno de Ejercicios: Aterriza tu Marca{" "}
                    </strong>
                    <p style={{ color: "#8a8a8a" }}>
                        El sistema práctico que te ayudará a transformar cada concepto del libro
                        en acciones claras para estructurar tu marca desde el propósito hasta la
                        estrategia. (Perfecto para quienes necesitan claridad y resultados
                        tangibles al avanzar).
                    </p>
                </div>
            </div>

            {/* Mockup 3 */}
            <div className="mockup-container">
                <Image
                    src="/images/mockup-3.webp"
                    alt="Mockup 3"
                    width={310}
                    height={310}
                    layout="responsive"
                    style={{
                        maxWidth: "200px",
                        height: "auto",
                        margin: "20px 0",
                    }}
                />
                <div style={{ textAlign: "left", color: "#6a1b9a" }}>
                    <strong>
                        Comunidad Partum{" "}
                    </strong>
                    <p style={{ color: "#8a8a8a" }}>
                        Te conectarás con emprendedores como tú en un espacio exclusivo, donde
                        recibirás apoyo, inspiración y recursos gratuitos para avanzar con tu
                        marca. (Nunca más estarás solo en el camino hacia tus metas).
                    </p>
                </div>
            </div>

            <p>
                Revisa tu correo electrónico. Te hemos enviado un email con todos los enlaces
                para que siempre puedas acceder fácilmente a tus recursos. Si no encuentras el
                correo, revisa tu bandeja de spam o promociones.
            </p>
            <p>
                Ahora es el momento de aplicar lo que has aprendido, mantener el enfoque y
                construir la marca que te acompañará en tu camino hacia el éxito.
            </p>
            <p>
                <span className="highlight">¡Manos a la Obra!</span>
            </p>

            <footer>
                <p>© 2024 LOGOS PARTUM. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
