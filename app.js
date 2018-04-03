// set browser
const express = require('express');
let app = express();
const PORT = 5000;

module.exports = function(callback) {
    var ABI = [
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "viewHTAContract",
          "outputs": [
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "string"
            },
            {
              "name": "",
              "type": "bool"
            },
            {
              "name": "",
              "type": "bool"
            },
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "viewAproval",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "pPayFlag",
              "type": "bool"
            },
            {
              "name": "pFees",
              "type": "uint256"
            }
          ],
          "name": "setPayFlag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "pApprovalFlag",
              "type": "bool"
            }
          ],
          "name": "setApprovalFlag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
//------------------------------------------------------------------------------------------------------------
    // set Ganache
    var providerLocation = 'http://localhost:8545';
    const Web3 = require('web3');
    let web3 = new Web3();
    var contractAddress = "0xf204a4ef082f5c04bb89f7d5e6568b796096735a";  // 0x345ca3e014aaf5dca488057592ee47305d9b3e10  0xf204a4ef082f5c04bb89f7d5e6568b796096735a
    web3.setProvider(new Web3.providers.HttpProvider(providerLocation));
    var myContract = new web3.eth.Contract(ABI, contractAddress);

    console.log("1.............." + contractAddress);

    // async view call (promise)
    myContract.methods.viewHTAContract().call().then(function(v) {
      var strName = JSON.stringify(v);
      console.log("HTAContract: " + strName);   
    });

    // async set call (promise)
    myContract.methods.setApprovalFlag(false).send({from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'}, function (err, res) {
        if (err) {
            console.log('oh no...'+err.message);
        } else {
            console.log('hurray...' + res);
            // added to check if the set call works by reteving the changed value in v
            myContract.methods.viewHTAContract().call().then(function(v) {
                var strName = JSON.stringify(v);
                console.log("HTAContract2: " + strName);   
            });
        }
    });

}

/*
app.listen(PORT, function () {
    console.log('Server is started on port:', PORT);
});
*/
