// rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) { // normalize
    return {
        open: step.open / 138,
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138
    };
}

function scaleUp(step) { // denormalize
    return {
        open: step.open * 138,
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138
    };
}

const scaledData = rawData.map(scaleDown);

const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15, 20),
];

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
});

net.train(trainingData, {
    learningRate: 0.005,
    errorThresh: 0.02,
    log: (stats) => console.log(stats)
});


console.log(net.forecast([
    trainingData[0][0],
    trainingData[0][1],
], 3).map(scaleUp));