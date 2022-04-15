import {series} from "./data.js"
import {Serie} from "./Serie.js"

let seriesTabla: HTMLElement = document.getElementById("series")!;

infoSeries(series);
promedioTemporadas(series);


function infoSeries(listaSeries : Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    for(let actual of listaSeries)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =
        `<td>${actual.id}</td>
        <td>${actual.nombre}</td>
        <td>${actual.canal}</td>  
        <td>${actual.temporadas}</td>`;
        tBodyElement.appendChild(trElement);      
    }
    seriesTabla.appendChild(tBodyElement);
}

function promedioTemporadas(listaSeries: Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    let totalTemporadas: number = 0;
    let tamanio: number = 0;

    for(let actual of listaSeries)
    {
        let numTemporadas: number = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;        
    }

    let promedioTemporadas: number = totalTemporadas/tamanio;
    let textoProm: string = "Numero Promedio Temporadas: " + promedioTemporadas;

    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML =
    `<td>${textoProm}</td>`;
    tBodyElement.appendChild(trElement);  
    seriesTabla.appendChild(tBodyElement);
} 
