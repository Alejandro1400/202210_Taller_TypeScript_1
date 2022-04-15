import { series } from "./data.js";
var seriesTabla = document.getElementById("series");
infoSeries(series);
promedioTemporadas(series);
function infoSeries(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var actual = listaSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>".concat(actual.id, "</td>\n        <td>").concat(actual.nombre, "</td>\n        <td>").concat(actual.canal, "</td>  \n        <td>").concat(actual.temporadas, "</td>");
        tBodyElement.appendChild(trElement);
    }
    seriesTabla.appendChild(tBodyElement);
}
function promedioTemporadas(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    var totalTemporadas = 0;
    var tamanio = 0;
    for (var _i = 0, listaSeries_2 = listaSeries; _i < listaSeries_2.length; _i++) {
        var actual = listaSeries_2[_i];
        var numTemporadas = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;
    }
    var promedioTemporadas = totalTemporadas / tamanio;
    var textoProm = "Numero Promedio Temporadas: " + promedioTemporadas;
    var trElement = document.createElement("tr");
    trElement.innerHTML =
        "<td>".concat(textoProm, "</td>");
    tBodyElement.appendChild(trElement);
    seriesTabla.appendChild(tBodyElement);
}
