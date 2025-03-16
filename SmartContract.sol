// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    string public message;
    int256 public number;

    constructor(string memory _message, int256 _number) {
        message = _message;
        number = _number;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function setNumber(int256 _number) public {
        number = _number;
    }
}
