class SimuladorTostada {
    constructor() {
        this.totalTiradas = 0;
        this.tostadaArriba = 0;
        this.tostadaAbajo = 0;
        this.resultadosTiradas = [];
    }

    simularTiradaYTostada() {
        const resultadoTirada = Math.random(); // número aleatorio de 0 a 1

        if (resultadoTirada < 0.5) {
            this.tostadaAbajo++;
        } else {
            this.tostadaArriba++;
        }

        this.totalTiradas++;

        // Agregar el resultado de la tirada al array
        this.resultadosTiradas.push(resultadoTirada < 0.5 ? 'Abajo' : 'Arriba');

        this.actualizarHTML();
    }

    startSimulation() {
        const intervalId = setInterval(() => {
            this.simularTiradaYTostada();

            if (this.totalTiradas === 50) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    actualizarHTML() {
        const totalTiradasElement = document.getElementById('TotalTiradas');
        const tostadaArribaCountElement = document.getElementById('TostadaArribaCount');
        const tostadaAbajoCountElement = document.getElementById('TostadaAbajoCount');
        const resultadosDiv = document.getElementById('resultados');

        totalTiradasElement.textContent = this.totalTiradas;
        tostadaArribaCountElement.textContent = this.tostadaArriba;
        tostadaAbajoCountElement.textContent = this.tostadaAbajo;

        // Borra los resultados previos de la tirada de tostada
        resultadosDiv.innerHTML = '';

        // Muestra los resultados de las tiradas en el div de resultados
        this.resultadosTiradas.forEach((resultado, index) => {
            const p = document.createElement('p');
            p.textContent = `Tirada ${index + 1}: ${resultado}`;
            resultadosDiv.appendChild(p);
        });
    }
}

const simulador = new SimuladorTostada();
document.getElementById('startButton').addEventListener('click', () => {
    simulador.startSimulation();
});
