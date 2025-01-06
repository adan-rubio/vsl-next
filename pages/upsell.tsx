import { useRef, useEffect } from "react";
import Image from "next/image";

const MyComponent = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.classList.add("loaded");
        }
    }, []);

    return (
        <Image
            src="https://fast.wistia.com/embed/medias/xtfkf1q9c0/swatch"
            width={1280}
            height={720}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
            }}
            alt="Vista previa del video Wistia para la plantilla interactiva"
            ref={imageRef}
        />
    );
};

export default function SalesPage() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
        script.async = true;
        script.onload = () => {
            if (window.checkoutElements) {
                window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
            }
        };
        document.body.appendChild(script);

        const wistiaScript = document.createElement("script");
        wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
        wistiaScript.async = true;
        document.body.appendChild(wistiaScript);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            if (document.body.contains(wistiaScript)) {
                document.body.removeChild(wistiaScript);
            }
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
                }

                .page-container {
                    padding: 20px;
                }

                .main-title {
                    text-align: center;
                    margin: 20px auto;
                    font-size: 1.5rem;
                    line-height: 1.4;
                }

                .main-title span:first-child {
                    color: #6a1b9a;
                }

                .main-title span:last-child {
                    color: black;
                }

                .wistia_responsive_padding {
                    padding: 62.5% 0 0 0;
                    position: relative;
                }

                .wistia_responsive_wrapper {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                .wistia_swatch img {
                    opacity: 0;
                    transition: opacity 200ms ease-in-out;
                }

                .wistia_swatch img.loaded {
                    opacity: 1;
                }

                .description {
                    margin: 20px 0;
                    font-size: 1rem;
                    line-height: 1.6;
                    text-align: center;
                }

                .description strong {
                    color: #6a1b9a;
                }

                footer {
                    margin-top: 40px;
                    text-align: center;
                }

                footer p {
                    font-size: 12px;
                    color: #666;
                    text-align: center;
                }
            `}</style>

            <h1 className="main-title">
                <span>La forma más sencilla de aplicar</span>
                <br />
                <span>
                    lo aprendido en el Libro y construir tu marca con solo 30 minutos al día durante 4 semanas
                </span>
            </h1>

            <div className="wistia_responsive_padding">
                <div className="wistia_responsive_wrapper">
                    <div
                        className="wistia_embed wistia_async_xtfkf1q9c0 seo=true videoFoam=true"
                        style={{ height: "100%", position: "relative", width: "100%" }}
                    >
                        <div className="wistia_swatch">
                            <MyComponent />
                        </div>
                    </div>
                </div>
            </div>

            <div id="hotmart-sales-funnel"></div>

            <p className="description">
                <strong>Dedica solo 30 minutos al día para avanzar de forma constante y ver resultados reales en tu marca.</strong>
                <br />
                <br />
                Con esta plantilla interactiva en <strong>Notion</strong>, tendrás tareas claras y organizadas para implementar todo lo aprendido en el libro <em>El Arte de Crear una Marca.</em>
                <br />
                <br />
                <strong>Durante 4 semanas</strong>, avanzarás de forma constante en cada etapa del proceso, desde definir tu propósito hasta construir una estrategia sólida en redes sociales.
                <br />
                <br />
                Además, podrás sincronizarla con tu calendario personal para mantenerte enfocado, organizado y sin perder tiempo. ¡Es la herramienta ideal para emprendedores ocupados como tú!
            </p>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <span style={{ color: "#6a1b9a" }}>Logos Partum</span>
            </div>

            <footer>
                <p>
                    © 2024 LOGOS PARTUM. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}