import redis from "../../lib/redis";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("sistema_pagina_db");

        if (req.method === "GET") {
            const cacheKey = "calendar_cache";

            // Verificar si la respuesta ya está en Redis
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return res.status(200).json(JSON.parse(cachedData));
            }

            // Si no está en Redis, consultar MongoDB
            const reuniones = await db
                .collection("tab_noti_calendar")
                .find({})
                .sort({ dateTime: -1 })
                .limit(10)
                .toArray();

            // Guardar la respuesta en Redis con TTL de 12 horas
            await redis.set(cacheKey, JSON.stringify(reuniones), "EX", 12 * 60 * 60);

            return res.status(200).json(reuniones);
        } else {
            return res.status(405).json({ error: "Método no permitido" });
        }
    } catch (error) {
        console.error("Error en el handler de /api/calendar:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}