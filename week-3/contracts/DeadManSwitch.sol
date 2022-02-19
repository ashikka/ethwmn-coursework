// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.5.3;

/**
 * @title Owner
 * @dev Set & change owner
 */
contract DeadManSwitch {

    address private owner;
    address payable private beneficiary;
    uint private lastAlive;
    
    
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
  
    constructor() public {
        owner = msg.sender;
        lastAlive = block.number;
    }

    function still_alive() external isOwner {
        lastAlive = block.number;
    }

    function set_beneficiary(address payable bfc) external isOwner {
        beneficiary = bfc;
    }

    function withdraw_all() external returns (bool) {
        if (block.number - lastAlive > 10) {
            beneficiary.transfer(address(this).balance);
            return true;
        } else {
            return false;
        }
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}