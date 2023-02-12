
const { expect } = require("chai");
const { BN, constants, ether, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const FindAddressWith2BNB = artifacts.require('./FindAddressWith2BNB.sol');

contract("FindAddressWith2BNB", function () {
  beforeEach(async function () {
    this.findAddressWith2BNB = await FindAddressWith2BNB.new();
  });

  it("should return the correct addresses with a balance of 2 BNB tokens", async function () {
    const addresses = [
      "0x1111111111111111111111111111111111111111",
      "0x2222222222222222222222222222222222222222",
      "0x3333333333333333333333333333333333333333",
    ];
    const expectedAddresses = [
      "0x2222222222222222222222222222222222222222",
      "0x3333333333333333333333333333333333333333",
    ];

    const resultAddresses = await this.findAddressWith2BNB.getAddressesWith2BNB(addresses);
    expect(resultAddresses).to.deep.equal(expectedAddresses);
  });
});
