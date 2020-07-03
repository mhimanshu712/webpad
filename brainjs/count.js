const trainD = [
	[1,2,3,4,5]
]

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainD);

console.log(net.run([1,2,3,4]))


const trainingData = [
    [{h:1},{i:1},{m:1},{a:1},{n:1},{s:1},{h:1},{u:1}]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([{h:1},{i:1},{m:1},{a:1}]));