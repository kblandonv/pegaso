import { utils, write } from "xlsx";
import Chart from 'chart.js/auto';
import { color } from "chart.js/helpers";

let usedChart = null;

const usedColors = new Set()

export function ArrayToExcel(array, fileName = "Horario") {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const workSheet = utils.aoa_to_sheet(array);
    const workBook = {
        Sheets: { data: workSheet, cols: [] },
        SheetNames: ["data"],
    };
    const excelBuffer = write(workBook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: fileType });
    const blobUrl = URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName + fileExtension;
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );
};

export function getDataHorario(horario) {
	const dia = horario.dia.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const inicio = parseInt(horario.inicio.split(":")[0]);
	const fin = parseInt(horario.fin.split(":")[0]);
	return {dia, inicio, fin};
}

export function getColor() {
    // Retorna un color entre 1 y 12
    const color = `color-${Math.floor(Math.random() * 11) + 1}`;
    if (usedColors.has(color) && usedColors.size < 11) {
        return getColor();
    } else {
        usedColors.add(color);
        return color;
    }
}

export function createGraph(canvas, asignatura) {
    if (!asignatura) return;

    if (usedChart) {
        usedChart.destroy();
    }

    const total = asignatura.total;
    const labels = Object.keys(total);
    const values = Object.values(total);

    const data = {
        labels: labels,
        datasets: [{
            label: "Cupos",
            backgroundColor: "#B346FF",
            borderColor: "rgb(85, 60, 144, 0.5)",
            color: "#ffffff",
            data: values,
        }]
    };

    const config = {
        type: "line",
        data: data,
        options: {
            animation: false,
            indexAxis: "x",
            scales: {
                y: {
                    min: 0,
                }
            }
        },
        
    };

    usedChart = new Chart(
        canvas,
        config
    );
}