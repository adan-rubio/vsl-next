
import { useEffect, useCallback } from "react";
import Script from "next/script";

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

    const calcularTiempoTranscurrido = (fecha: Date) => {
        const ahora = new Date();
        const diferencia = ahora.getTime() - fecha.getTime();
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

    const fetchSalesData = useCallback(() => {
        fetch("/api/calendar")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    let currentIndex = 0;
                    const mostrarNotificacion = (booking: { nombre: string; dateTime: string }) => {
                        const contenedor = document.getElementById("booking-popup");
                        if (contenedor) {
                            const tiempoTranscurrido = calcularTiempoTranscurrido(
                                new Date(booking.dateTime)
                            );
                            contenedor.style.display = "flex";
                            contenedor.innerHTML = `
                <Image
                  src="/images/Logo_calendar_Notificacion_booking.webp"
                  alt="Notificación de booking"
                  width={64}
                  height={64} 
                  style="width: 64px; height: 64px; border-radius: 50%; margin-right: 15px;"
                />
                <div style="display: flex; flex-direction: column;">
                  <div
                    id="booking-nombre"
                    style="font-weight: bold; font-size: 15px; color: #D3D3D3; line-height: 1.1;"
                  >
                    ${booking.nombre}
                  </div>
                  <div
                    id="booking-producto"
                    style="font-size: 13px; color: #D3D3D3; line-height: 1.1;"
                  >
                    Agendó una llamada
                  </div>
                  <div
                    id="booking-tiempo"
                    style="font-size: 12px; color: #ffffff; line-height: 1.1;"
                  >
                    hace ${tiempoTranscurrido}
                  </div>
                </div>
              `;
                            setTimeout(() => {
                                contenedor.style.display = "none";
                                currentIndex++;
                                if (currentIndex < data.length) {
                                    setTimeout(() => mostrarNotificacion(data[currentIndex]), 30000);
                                }
                            }, 7000);
                        }
                    };
                    mostrarNotificacion(data[currentIndex]);
                }
            })
            .catch((error) => console.error("Error fetching sales data:", error));
    }, []);

    useEffect(() => {
        setTimeout(fetchSalesData, 5000);
        setInterval(fetchSalesData, 60000);
    }, [fetchSalesData]);

    return (
        <div>
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
                .offer-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 30px;
                    border: 3px solid #f8f9fa;
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
                    #booking-popup {
                        width: auto;
                        max-width: 100%;
                        height: 60px !important;
                        line-height: 1.1 !important;
                        flex-direction: row;
                        align-items: center;
                    }
                    #booking-popup img {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px !important;
                    }
                    #booking-nombre {
                        font-size: 12px !important;
                    }
                    #booking-producto {
                        font-size: 10px !important;
                    }
                    #booking-tiempo {
                        font-size: 8px !important;
                    }
                }
                #booking-popup {
                    padding: 0 2px;
                }
            `}</style>

            <div className="page-container">
                <p className="subheading">Metabrand Mentoring...</p>
                <h1 className="main-title">
          <span style={{ color: "#8a8a8a" }}>
            Aplica para nuestra mentoría exclusiva y descubre si
          </span>
                    <span style={{ color: "#f8f9fa" }}> Metabrand </span>
                    <span style={{ color: "#8a8a8a" }}>
            es la solución que necesitas.
          </span>
                </h1>
                <p className="description">
                    (Aplicaras para evaluar tu caso y ver si es posible trabajar)
                </p>

                <div className="offer-container">
                    <h2
                        style={{
                            fontWeight: "bold",
                            marginBottom: "20px",
                            fontSize: "16px",
                            color: "#f8f9fa",
                        }}
                    >
                        Agenda una llamada aqui.
                    </h2>
                    <div
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        id="my-cal-inline"
                    ></div>
                    <Script id="cal-inline-script" type="text/javascript">
                        {`(function (C, A, L) {
                          let p = function (a, ar) { a.q.push(ar); };
                          let d = C.document;
                          C.Cal = C.Cal || function () {
                            let cal = C.Cal; let ar = arguments;
                            if (!cal.loaded) {
                              cal.ns = {};
                              cal.q = cal.q || [];
                              d.head.appendChild(d.createElement("script")).src = A;
                              cal.loaded = true;
                            }
                            if (ar[0] === L) {
                              const api = function () { p(api, arguments); };
                              const namespace = ar[1];
                              api.q = api.q || [];
                              if(typeof namespace === "string"){
                                cal.ns[namespace] = cal.ns[namespace] || api;
                                p(cal.ns[namespace], ar);
                                p(cal, ["initNamespace", namespace]);
                              } else p(cal, ar);
                              return;
                            }
                            p(cal, ar);
                          };
                        })(window, "https://app.cal.com/embed/embed.js", "init");
            
                        Cal("init", "mentoring-metabrand", {origin:"https://cal.com"});
            
                        Cal.ns["mentoring-metabrand"]("inline", {
                          elementOrSelector:"#my-cal-inline",
                          config: {"layout":"month_view"},
                          calLink: "logos-partum/mentoring-metabrand",
                        });
            
                        Cal.ns["mentoring-metabrand"]("ui", {
                          "cssVarsPerTheme":{
                            "light":{"cal-brand":"#6667ab"},
                            "dark":{"cal-brand":"#6667ab"}
                          },
                          "hideEventTypeDetails":true,
                          "layout":"month_view"
                        });
                      `}
                    </Script>
                </div>
            </div>

            <div
                id="booking-popup"
                style={{
                    textAlign: "left",
                    display: "none",
                    position: "fixed",
                    bottom: "10px",
                    left: "10px",
                    background: "#1D1D1B",
                    color: "#D3D3D3",
                    borderRadius: "50px",
                    boxShadow: "0 2px 10px rgba(255, 255, 255, 0.2)",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    zIndex: 9999,
                    paddingRight: "12px",
                    width: "auto",
                    maxWidth: "102%",
                    height: "50px",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        id="booking-nombre"
                        style={{
                            fontWeight: "bold",
                            fontSize: "15px",
                            color: "#D3D3D3",
                            lineHeight: 1.1,
                        }}
                    ></div>
                    <div
                        id="booking-producto"
                        style={{
                            fontSize: "13px",
                            color: "#D3D3D3",
                            lineHeight: 1.1,
                        }}
                    ></div>
                    <div
                        id="booking-tiempo"
                        style={{
                            fontSize: "12px",
                            color: "#FFFFFF",
                            lineHeight: 1.1,
                        }}
                    ></div>
                </div>
            </div>

            <footer>
                <div>
                    <span style={{ color: "#D3D3D3" }}>Logos Partum</span>
                </div>
                <p>
                    © 2024 LOGOS PARTUM. All Rights Reserved. Descargo de
                    Responsabilidad: Este producto no garantiza la obtención de
                    resultados. Las referencias al desempeño de una determinada estrategia
                    no deben ser interpretadas como una garantía de resultados. Esta
                    página no es parte de la página de Meta o de Meta, Inc.
                </p>
            </footer>
        </div>
    );
}
