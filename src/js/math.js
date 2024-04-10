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
    console.log(result2)
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

export function parRegression1(yAxis) {
    let parRegressionData = []
    for (let i = 0; i < yAxis.length; i++){
        let regressionPoints = [i + 1, yAxis[i]]
        parRegressionData.push(regressionPoints)
    }
    const result2 = regression.polynomial(parRegressionData, { order: 4 });
    const factorA = result2.equation[0];
    const factorB = result2.equation[1];
    const factorC = result2.equation[2];
    const factorD = result2.equation[3];
    const factorE = result2.equation[4];
    console.log(`y=${factorA}x^2+${factorB}x+${factorC}`)
    let parFunctionPattern=`y=${factorA}x^2+${factorB}x+${factorC}`
    let parRegYAxis = []
    for (let i = 0; i < yAxis.length; i++){
        parRegYAxis.push(factorA * i**4 + factorB*i**3+factorC*i**2+factorD*i+factorE)
    }
    newDataChart.data.datasets.push({
        label: 'quadratic22 regression',
        data: parRegYAxis,
        borderWidth: 1,
        pointRadius: 0,
        borderColor: 'rgba(255, 255, 100, 1)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        
    });
    newDataChart.update();

    return {parRegYAxis, parFunctionPattern}
}




 
