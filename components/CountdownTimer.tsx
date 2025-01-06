// components/CountdownTimer.tsx
import { useState, useEffect } from "react";
import axios from "axios";

const CountdownTimer = () => {
    const [remainingTime, setRemainingTime] = useState(3600); // 60 minutos en segundos
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const fetchRemainingTime = async () => {
            try {
                const response = await axios.post("/api/contador");
                if (response.data?.remainingTime) {
                    setRemainingTime(response.data.remainingTime * 60); // Convertir minutos a segundos
                }
                if (response.data?.redirect) {
                    setRedirect(true);
                }
            } catch (error) {
                console.error("Error fetching remaining time:", error);
            }
        };

        fetchRemainingTime();

        const interval = setInterval(() => {
            setRemainingTime((prevTime) => Math.max(prevTime - 1, 0)); // Prevenir valores negativos
        }, 1000);

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, []);

    useEffect(() => {
        if (redirect) {
            window.location.href = "/checkout-precio-normal";
        }
    }, [redirect]);

    const formatTime = (timeInSeconds: number): string => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="countdown-timer">
            La Oferta CADUCARÁ en: {formatTime(remainingTime)}
            <style jsx>{`
                .countdown-timer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: #b22222;
                    border-bottom: 1px solid #ccc;
                    text-align: center;
                    padding: 10px;
                    z-index: 1000;
                    color: #fff;
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default CountdownTimer;