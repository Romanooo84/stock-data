import { newDataChart } from "./graph";

export function linearRegression(yAxis) {
    let regressionData = []
    for (let i = 0; i < yAxis.length; i++){
        let regressionPoints = [i + 1, yAxis[i]]
        regressionData.push(regressionPoints)
    }
    console.log(regressionData)
    const result = regression.linear(regressionData);
    const factorA = result.equation[0];
    const factorB = result.equation[1];
    console.log(`y=${factorA}x+${factorB}`)
    let functionPattern=`y=${factorA}x+${factorB}`
    let regYAxis = []
    for (let i = 0; i < yAxis.length; i++){
        regYAxis.push(factorA * i + factorB)
    }
    newDataChart.data.datasets.push({
        label: 'linear regression',
        data: regYAxis,
        borderWidth: 1,
        pointRadius: 0,
        borderColor: 'rgba(265, 20, 135, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    });
    newDataChart.update();

    return {regYAxis, functionPattern}
}

export function parRegression(yAxis) {
    let parRegressionData = []
    for (let i = 0; i < yAxis.length; i++){
        let regressionPoints = [i + 1, yAxis[i]]
        parRegressionData.push(regressionPoints)
    }
    const result2 = regression.polynomial(parRegressionData, { order: 2 });
    const factorA = result2.equation[0];
    const factorB = result2.equation[1];
    const factorC = result2.equation[2];
    console.log(`y=${factorA}x^2+${factorB}x+${factorC}`)
    let parFunctionPattern=`y=${factorA}x^2+${factorB}x+${factorC}`
    let parRegYAxis = []
    for (let i = 0; i < yAxis.length; i++){
        parRegYAxis.push(factorA * i**2 + factorB*i+factorC)
    }
    newDataChart.data.datasets.push({
        label: 'quadratic regression',
        data: parRegYAxis,
        borderWidth: 1,
        pointRadius: 0,
        borderColor: 'rgba(20, 265, 150, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        
    });
    newDataChart.update();

    return {parRegYAxis, parFunctionPattern}
}

export function upperPoints(regYAxis, yAxis) {
    const selectedPoints = []
    for (let i = 0; i < yAxis.length; i++) {
        if (yAxis[i] - regYAxis[i] > 0) {
            selectedPoints.push([(i),yAxis[i]])
        }
    }
    const result = regression.linear(selectedPoints)
    console.log(result)
    const factorA = result.equation[0];
    const factorB = result.equation[1];
    console.log(`y=${factorA}x+${factorB}`)
    let topYAxis = []
    for (let i = 0; i < yAxis.length; i++) {
        topYAxis.push(factorA * i + factorB)
    }
    newDataChart.data.datasets.push({
        label: 'top line',
        data: topYAxis,
        borderWidth: 1,
        pointRadius: 0,
        borderColor: 'rgba(20, 265, 150, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    });
    newDataChart.update();
}


export function bottomPoints(regYAxis, yAxis) {
    const selectedPoints = []
    for (let i = 0; i < yAxis.length; i++) {
        if (regYAxis[i] - yAxis[i] > 0) {
            selectedPoints.push([(i),yAxis[i]])
        }
    }
    const result = regression.linear(selectedPoints)
    console.log(result)
    const factorA = result.equation[0];
    const factorB = result.equation[1];
    console.log(`y=${factorA}x+${factorB}`)
    let topYAxis = []
    for (let i = 0; i < yAxis.length; i++) {
        topYAxis.push(factorA * i + factorB)
    }
    newDataChart.data.datasets.push({
        label: 'bottom line',
        data: topYAxis,
        borderWidth: 1,
        pointRadius: 0,
        borderColor: 'rgba(200, 100, 20, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    });
    newDataChart.update();
}

 
