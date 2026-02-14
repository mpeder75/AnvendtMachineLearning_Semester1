console.log("Hello world!");

const tf = require("@tensorflow/tfjs");

async function main() {
  console.log("TensorFlow.js version information!");
  console.log(tf.version);

  await tf.ready();
  console.log(`TensorFlow.js backend: ${tf.getBackend()}`);
  
}

main();
