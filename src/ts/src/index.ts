/* eslint-disable */
// @ts-nocheck
import { Fluence } from "@fluencelabs/js-client";
import { krasnodar as nodes } from "@fluencelabs/fluence-network-environment";

const peerIds = nodes.map(({ peerId }) => peerId);
const connectTo = nodes[1].multiaddr;
if (typeof connectTo !== "string") {
  throw new Error("connectTo is not a string");
}

const main = async () => {
  console.log('booting...')
  await Fluence.connect(`/ip4/127.0.0.1/tcp/7771/wss/p2p/12D3KooWBM3SdXWqGaawQDGQ6JprtwswEg3FWGvGhmgmMez1vRbR`);

  setTimeout(async () => {

  Fluence.onConnectionStateChange((state) => {
      console.log(state)
  });

//   const helloWorldResult = await helloWorld("Fluence");
//   const helloWorldRemoteResult = await helloWorldRemote("Fluence");
//   const getInfoResult = await getInfo();
//   console.log(helloWorldResult);
}, 5000)
};

main().catch((error) => {
  console.error(error);
});