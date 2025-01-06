import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("sistema_pagina_db");

        if (req.method === "POST") {
            // Obtener la IP del usuario
            const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress || "";
            const direccion_ip = ip.split(",")[0].trim(); // Tomar la primera IP en caso de múltiples

            const currentTime = new Date();

            // Verifica si la IP ya existe en la base de datos
            const existingEntry = await db.collection("tab_ip_contador").findOne({ direccion_ip });

            let firstVisitTime = currentTime;

            if (!existingEntry) {
                // Insertar nueva IP si no existe
                await db.collection("tab_ip_contador").insertOne({
                    direccion_ip,
                    dateTime: currentTime,
                });
            } else {
                firstVisitTime = new Date(existingEntry.dateTime);
            }

            // Calcular el tiempo restante (en minutos)
            const elapsed = Math.floor((currentTime - firstVisitTime) / 60000); // Convertir ms a minutos
            const remainingTime = 60 - elapsed;

            if (remainingTime <= 0) {
                return res.status(200).json({
                    message: "Tiempo agotado, redirigir a /checkout-precio-normal",
                    redirect: true,
                });
            }

            return res.status(200).json({
                message: "Tiempo restante",
                remainingTime,
                redirect: false,
            });
        } else {
            return res.status(405).json({ error: "Método no permitido" });
        }
    } catch (error) {
        console.error("Error en el handler de /api/contador:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}