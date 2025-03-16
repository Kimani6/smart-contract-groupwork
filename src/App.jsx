import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getContract } from "./contract";

function App() {
  const [account, setAccount] = useState(null);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newText, setNewText] = useState("");

  useEffect(() => {
    connectWallet();
    fetchData();
  }, []);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    }
  }

  async function fetchData() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = getContract(provider);
      setNumber(await contract.number());
      setText(await contract.text());
    }
  }

  async function updateData() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getContract(signer);
      const tx = await contract.updateData(newNumber, newText);
      await tx.wait();
      fetchData();
    }
  }

  return (
    <div className="App">
      <h1>Smart Contract Frontend</h1>
      <p>Connected Account: {account}</p>
      <h2>Stored Data:</h2>
      <p>Number: {number.toString()}</p>
      <p>Text: {text}</p>

      <input
        type="number"
        placeholder="New Number"
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Text"
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default App;
