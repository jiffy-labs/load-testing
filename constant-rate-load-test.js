import http from 'k6/http';

// Script to run a const rate/timeUnits tps 

export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '600s', // total duration
      preAllocatedVUs: 100, // to allocate runtime resources     preAll

      rate: 100, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

const ADDRESS_LIST = [
    "0xec96b3107b4709a345080a8e7a5767a32f1517b9",
    "0x64e2f57777f8f9ca633a8958828f06dc17ab70df",
    "0x945ff96b09b17aa4252ea10cd202685696554e9b",
    "0x2394dfaf99270a3a6f7ba2122448932fa18c07fa",
    "0x945ff96b09b17aa4252ea10cd202685696554e9b",
    "0x9d9c9b3531ca645eb3edede6bfa99c5127ed4ed9",
    "0x253eeb65380760aef78be62fe191ead9c221badb",
    "0x1b49c73b73a4a35c68fa6be2bb7e7a6aa548d735",
    "0xfdab8d7b82e016fb3082a03ae42a11b92b065660",
    "0x6ca962df0524ff5df49740806fc5a899bdfbbabe",
];

export default function () {
    const BASE_URL = "http://dev.jiffyscan.xyz";
    const address = ADDRESS_LIST[parseInt(Math.random()*100%10)]
    // console.log(address)
    // http.get(`${BASE_URL}/api/v0/getAddressActivity?address=${address}`);
    http.get(`${BASE_URL}/api/v0/getAddressActivityTest?address=${address}`);
}