export function linearRegression(yAxis) {
    let regressionData = []
    for (let i = 0; i < yAxis.length; i++){
        let xy = [i + 1, yAxis[i]]
        console.log(xy)
        regressionData.push(xy)
    }
}
