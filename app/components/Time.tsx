"use client"
import React, { useState, useEffect } from 'react';

const Time: React.FC = () => {
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState<number>(0);

    const fechaInicio: number = new Date('2023-12-16T00:00:00Z').getTime() / 1000;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const tiempoActual: number = Math.floor(new Date().getTime() / 1000);
            const tiempoTranscurrido: number = tiempoActual - fechaInicio;
            setTiempoTranscurrido(tiempoTranscurrido);
        }, 1000);

        const tiempoActual: number = Math.floor(new Date().getTime() / 1000);
        const tiempoTranscurrido: number = tiempoActual - fechaInicio;
        setTiempoTranscurrido(tiempoTranscurrido);

        return () => clearInterval(intervalId);
    }, [fechaInicio]);

    const calcularTiempoFormateado = (): string => {
        const segundosTranscurridos: number = tiempoTranscurrido;
        const dias: number = Math.floor(segundosTranscurridos / (3600 * 24));
        const horas: number = Math.floor((segundosTranscurridos % (3600 * 24)) / 3600);
        const minutos: number = Math.floor((segundosTranscurridos % 3600) / 60);
        const segundos: number = Math.floor(segundosTranscurridos % 60);

        return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    };

    return (
        <div className="dark:text-white">
            <h3 className="text-base lg:text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                Tiempo sin fumar: {calcularTiempoFormateado()}
            </h3>
        </div>
    );
};

export default Time;