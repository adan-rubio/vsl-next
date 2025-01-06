import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#1D1D1B";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.fontFamily = "Syne, sans-serif";

        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.margin = "";
            document.body.style.padding = "";
            document.body.style.fontFamily = "";
        };
    }, []);

    useEffect(() => {
        const sessionTimeout = setTimeout(() => {
            const sessionContainer = document.getElementById("session-container");
            if (sessionContainer) {
                sessionContainer.style.display = "block";
            }
        }, 5000);

        const fetchSalesData = () => {
            fetch("/api/ventas")
                .then((response) => response.json())
                .then((data) => {
                    if (Array.isArray(data) && data.length > 0) {
                        let currentIndex = 0;
                        const mostrarNotificacion = (venta: { nombre: string; dateTime: string; ciudad: string; pais: string }) => {
                            const contenedor = document.getElementById("venta-popup");
                            if (contenedor) {
                                const tiempoTranscurrido = calcularTiempoTranscurrido(new Date(venta.dateTime));
                                contenedor.style.display = "flex";
                                contenedor.innerHTML = `
                                    <img src="/images/Logo_Hotmart_Notificacion_Venta.webp"
                                    alt="Notificación de ventas"
                                    style="width: 64px; height: 64px; border-radius: 50%; margin-right: 15px; margin-left: -3px;" />
                                    <div style="display: flex; flex-direction: column;">
                                        <div id="venta-nombre" style="font-weight: bold; font-size: 15px; color: #333; line-height: 1.1;">
                                            ${venta.nombre} de ${venta.ciudad}, ${venta.pais}.
                                        </div>
                                        <div id="venta-producto" style="font-size: 13px; color: #666; line-height: 1.1;">
                                            Compró el libro digital
                                        </div>
                                        <div id="venta-tiempo" style="font-size: 12px; color: #999; line-height: 1.1;">
                                            hace ${tiempoTranscurrido}
                                        </div>
                                    </div>
                                `;
                                setTimeout(() => {
                                    contenedor.style.display = "none";
                                    currentIndex++;
                                    if (currentIndex < data.length) {
                                        setTimeout(() => mostrarNotificacion(data[currentIndex]), 25000);
                                    }
                                }, 7000);
                            }
                        };
                        mostrarNotificacion(data[currentIndex]);
                    }
                })
                .catch((error) => console.error("Error fetching sales data:", error));
        };

        const calcularTiempoTranscurrido = (fecha: Date) => {
            const ahora = new Date();
            const diferencia = ahora.getTime() - fecha.getTime();
            if (diferencia < 0) return "hace unos momentos";
            const minutos = Math.floor(diferencia / (1000 * 60));
            if (minutos < 60) {
                return `${minutos} minutos`;
            }
            const horas = Math.floor(minutos / 60);
            if (horas < 24) {
                return `${horas} horas`;
            }
            const dias = Math.floor(horas / 24);
            if (dias < 7) {
                return `${dias} días`;
            }
            const semanas = Math.floor(dias / 7);
            return `${semanas} semanas`;
        };

        const salesDataInterval = setInterval(fetchSalesData, 60000);
        setTimeout(fetchSalesData, 5000);

        return () => {
            clearTimeout(sessionTimeout);
            clearInterval(salesDataInterval);
        };
    }, []);

    return (
        <div>
            <style jsx>{`
                .content-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50vh;
                    text-align: center;
                }

                .mockup-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: transparent;
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

                .offer-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 30px;
                    border: 3px solid #28a745;
                    border-radius: 15px;
                    background-color: transparent;
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
                    color: #D3D3D3;
                }

                @media (max-width: 767px) {
                    ul.listado {
                        font-size: 10px;
                        line-height: 1.4;
                    }
                }

                footer {
                    margin-top: 40px;
                    text-align: center;
                }

                footer p {
                    font-size: 10px;
                    color: #666;
                }

                @media (max-width: 767px) {
                    #venta-popup {
                        width: auto;
                        max-width: 100%;
                        height: 60px !important;
                        line-height: 1.1 !important;
                        flex-direction: row;
                        align-items: center;
                    }
                    #venta-popup img {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px !important;
                    }
                    #venta-nombre {
                        font-size: 12px !important;
                    }
                    #venta-producto {
                        font-size: 10px !important;
                    }
                    #venta-tiempo {
                        font-size: 8px !important;
                    }
                }

                #venta-popup {
                    padding: 0 2px;
                }
            `}</style>

            <Script
                src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
                data-id="67662160572299dbc2d821d5"
                strategy="lazyOnload"
            ></Script>

            <div className="page-container">
                <p className="subheading" style={{ color: "#D3D3D3" }}>En 7 minutos te contaré…</p>
                <h1 className="main-title">
                    <span style={{ color: "#9f81f1" }}>
                        ¿Por qué las ventas de tu negocio NO despegan?
                    </span>{" "}
                    <span style={{ color: "#D3D3D3" }}>
                        No se trata de probar más estrategias, sino de construir una base sólida que
                        haga que todo funcione.
                    </span>
                </h1>
                <p className="description" style={{ color: "#D3D3D3" }}>
                    (Después de esta clase exprés podrás vender con cualquier estrategia de ventas)
                </p>

                {/* Contenedor del video */}
                <div
                    id="ifr_676a5be077e38a5bb12ba465_wrapper"
                    style={{ margin: "0 auto", width: "100%" }}
                >
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <iframe
                            frameBorder="0"
                            allowFullScreen
                            src="https://scripts.converteai.net/acf84797-84aa-4103-9939-caab0771ae92/players/676a5be077e38a5bb12ba465/embed.html"
                            id="ifr_676a5be077e38a5bb12ba465"
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            }}
                            referrerPolicy="origin"
                        ></iframe>
                    </div>
                </div>

                {/* Sesión de oferta completa (aparece tras 5s) */}
                <div id="session-container" style={{ display: "none" }}>
                    <div id="sales-session" style={{ textAlign: "center", margin: "20px" }}>
                        <Link
                            href="/checkout-oferta"
                            style={{
                                display: "inline-block",
                                backgroundColor: "#28a745",
                                color: "white",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                textDecoration: "none",
                                fontWeight: "bold",
                                textAlign: "center",
                                maxWidth: "300px",
                            }}
                        >
                            Quiero comprar el Libro digital!
                        </Link>
                    </div>

                    <h1 style={{ marginTop: "20px", textAlign: "center", color: "#D3D3D3" }}>
                        ADQUIERE mi Libro Digital para Construir una Marca que Venda <span style={{ color: "#9f81f1" }}>con
                        Cualquier Estrategia de Ventas</span>
                    </h1>

                    {/* Mockup principal */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Image
                            src="/images/mockup-0.webp"
                            alt="Mockup principal"
                            width={1922}
                            height={682}
                            layout="responsive"
                            style={{ maxWidth: "646px", margin: "20px 0" }}
                        />
                    </div>

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
                        <div style={{ textAlign: "left", color: "#9f81f1" }}>
                            <strong>
                                Libro Digital: El Arte de Crear una Marca -{" "}
                                <span style={{ color: "#28a745" }}>Valorado en: $29.99 USD</span>
                            </strong>
                            <p style={{ color: "#D3D3D3" }}>
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
                        <div style={{ textAlign: "left", color: "#9f81f1" }}>
                            <strong>
                                Cuaderno de Ejercicios: Aterriza tu Marca -{" "}
                                <span style={{ color: "#28a745" }}>Valorado en: $19.99 USD</span>
                            </strong>
                            <p style={{ color: "#D3D3D3" }}>
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
                        <div style={{ textAlign: "left", color: "#9f81f1" }}>
                            <strong>
                                Acceso de por vida a la Comunidad Partum -{" "}
                                <span style={{ color: "#28a745" }}>Invaluable</span>
                            </strong>
                            <p style={{ color: "#D3D3D3" }}>
                                Te conectarás con emprendedores como tú en un espacio exclusivo, donde
                                recibirás apoyo, inspiración y recursos gratuitos para avanzar con tu
                                marca. (Nunca más estarás solo en el camino hacia tus metas).
                            </p>
                        </div>
                    </div>

                    {/* Cuadro verde */}
                    <div className="offer-container">
                        <h2
                            style={{
                                fontWeight: "bold",
                                marginBottom: "20px",
                                fontSize: "16px",
                                color: "#9f81f1",
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
                                    (Valorado en <b style={{ color: "#28a745" }}>$29.99 USD</b>)
                                </span>
                            </li>
                            <li>
                                <span>
                                    ✅ <strong>Cuaderno de ejercicios</strong>
                                </span>
                                <span>
                                    (Valorado en <b style={{ color: "#28a745" }}>$19.99 USD</b>)
                                </span>
                            </li>
                            <li>
                                <span>
                                    ✅ <strong>Comunidad Partum</strong>
                                </span>
                                <span>
                                    (<b style={{ color: "#28a745" }}>Invaluable</b>)
                                </span>
                            </li>
                        </ul>
                        <p
                            style={{
                                margin: "20px 0",
                                fontSize: "18px",
                                textAlign: "center",
                            }}
                        >
                            <span style={{ color: "#8a8a8a" }}>
                                Precio regular:{" "}
                                <del style={{ color: "#FF0000" }}>
                                    <b>$49.98 USD</b>
                                </del>
                            </span>
                            <br />
                            <span
                                style={{
                                    color: "#28a745",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                }}
                            >
                                SÓLO POR 1 HORA: <br /> $9.99 USD
                            </span>
                        </p>
                        <Link
                            href="/checkout-oferta"
                            style={{
                                backgroundColor: "#28a745",
                                color: "white",
                                padding: "6px 10px",
                                borderRadius: "5px",
                                textDecoration: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Quiero comprar el Libro digital!
                        </Link>
                    </div>
                </div>

                {/* Notificaciones de Ventas */}
                <div
                    id="venta-popup"
                    style={{
                        textAlign: "left",
                        position: "fixed",
                        bottom: "10px",
                        left: "10px",
                        background: "#fff",
                        color: "#333",
                        borderRadius: "50px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        zIndex: 9999,
                        paddingRight: "12px",
                        width: "auto",
                        maxWidth: "102%",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            id="venta-nombre"
                            style={{
                                fontWeight: "bold",
                                fontSize: "15px",
                                color: "#333",
                                lineHeight: 1.1,
                            }}
                        ></div>
                        <div
                            id="venta-producto"
                            style={{
                                fontSize: "13px",
                                color: "#666",
                                lineHeight: 1.1,
                            }}
                        ></div>
                        <div
                            id="venta-tiempo"
                            style={{
                                fontSize: "12px",
                                color: "#999",
                                lineHeight: 1.1,
                            }}
                        ></div>
                    </div>
                </div>

                <footer>
                    <div>
                        <span style={{ color: "#9f81f1" }}>Logos Partum</span>
                    </div>
                    <p>
                        © 2024 LOGOS PARTUM. All Rights Reserved. Descargo de
                        Responsabilidad: Este producto no garantiza la obtención de
                        resultados. Las referencias al desempeño de una determinada
                        estrategia no deben ser interpretadas como una garantía de
                        resultados. Esta página no es parte de la página de Meta o de Meta,
                        Inc.
                    </p>
                </footer>
            </div>
        </div>
    );
}