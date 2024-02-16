import React, { useState, useEffect } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";
import Web3 from "web3";
import "./Swap.css";
import SwapTokenContract from "../../../contract/SwapTokenContract.json";
import DLTAToken from "../../../contract/DLTAToken.json"; 

const Swap = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [swapContract, setSwapContract] = useState(null);
  const [dltTokenContract, setDltTokenContract] = useState(null);

  useEffect(() => {

    const initializeWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {

          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3);
        } catch (error) {
          console.error("User denied account access");
        }
      }

      else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      }

      else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
    };

    initializeWeb3();
  }, []);


  useEffect(() => {
    // Function to initialize the smart contracts
    const initializeContracts = async () => {
      if (web3) {
        // Get the network ID
        const networkId = await web3.eth.net.getId();

        // Initialize the SwapTokenContract instance
        const swapContractABI = SwapTokenContract.abi;
        const swapContractAddress = SwapTokenContract.networks[networkId].address;
        const swapContractInstance = new web3.eth.Contract(swapContractABI, swapContractAddress);
        setSwapContract(swapContractInstance);

        // Initialize the Token2Contract instance
        const dltATokenABI = DLTAToken.abi;
        const dltATokenABIAddress = DLTAToken.networks[networkId].address;
        const dltATokenInstance = new web3.eth.Contract(dltATokenABI, dltATokenABIAddress);
        setDltTokenContract(dltATokenInstance);
      }
    };

    initializeContracts();
  }, [web3]);

  useEffect(() => {

    const fetchAccountDetails = async () => {
      if (web3) {

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);


          const balance = await web3.eth.getBalance(accounts[0]);

          const balanceInEther = web3.utils.fromWei(balance, "ether");
          setBalance(balanceInEther);
        }
      }
    };

    fetchAccountDetails();
  }, [web3]);

  const handleSwap = async () => {
    if (web3 && swapContract && dltTokenContract) {
      try {
        // await swapContract.methods.swapExactInputSingle(100).send({ from: account });

        await dltTokenContract.methods.transfer(TO_ADDRESS, AMOUNT).send({ from: account });

        console.log("Swap or transfer successful");
      } catch (error) {
        console.error("Error swapping or transferring tokens:", error);
      }
    }
  };

  return (
    <>
      <section className="--flex-center --dir-column">
        <h1>Swap Token</h1>

        <div>
          {account && (
            <p>
              Connected Account: <strong>{account}</strong>
            </p>
          )}
          <p>
            Balance: <strong>{balance} ETH</strong>
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSwap(); }}>
          <div>
            <label>You Pay</label>
            <input type="text"  />
            <p>DLTAToken</p>
          </div>
          <div>
            <span>
              <LiaExchangeAltSolid size={30} />
            </span>
          </div>
          <div>
            <label>You Receive</label>
            <input type="text" />
            <select>
              <option value="&nbsp">&nbsp;</option>
              <option value="USDT">USDT</option>
              <option value="USDC">USDC</option>
            </select>
          </div>

          <button type="submit" className="--btn-block --btn">Initialize Swap</button>
        </form>
      </section>
    </>
  );
};

export default Swap;
