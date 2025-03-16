import { ethers } from "ethers";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace this!
const ABI = [
  {
    "inputs": [
      { "internalType": "int256", "name": "_number", "type": "int256" },
      { "internalType": "string", "name": "_text", "type": "string" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "number",
    "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "text",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "int256", "name": "_newNumber", "type": "int256" },
      { "internalType": "string", "name": "_newText", "type": "string" }
    ],
    "name": "updateData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const getContract = (providerOrSigner) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
};
