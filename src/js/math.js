import { newDataChart } from "./graph";

export function linearRegression(yAxis) {
    let regressionData = []
    for (let i = 0; i < yAxis.length; i++){
        let regressionPoints = [i + 1, yAxis[i]]
        regressionData.push(regressionPoints)
    }
    const result = regression.linear(regressionData);
    const factorA = result.equation[0];
    const factorB = result.equation[1];
    let functionPattern=`y=${factorA}x+${factorB}`
    let regYAxis = []
    for (let i = 0; i < yAxis.length; i++){
        regYAxis.push(factorA * i + factorB)
    }
    newDataChart.data.datasets.push({
        label: 'linear regression',
        data: regYAxis,
        borderWidth: 2,
        pointRadius: 0,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 1)',
    });
    newDataChart.update();

    return {regYAxis, functionPattern}
}
