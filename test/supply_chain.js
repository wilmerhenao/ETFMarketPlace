var SupplyChain = artifacts.require('./SupplyChain.sol');

contract('SupplyChain', async accounts => {
it("should create a Participant", async () => {
let instance = await SupplyChain.deployed();
let participantId = await instance.addParticipant("A","passA","0xA8052f084cF8fB3fFFa2af630ac12FAA12C5158a","Manufacturer");
let participant = await instance.participants(0);
assert.equal(participant[0], "A");
assert.equal(participant[2], "Manufacturer");
participantId = await instance.addParticipant("B","passB","0x73Cb5f884fBf3B9d2c5aAE9FCf4447B8c9B3253b","Supplier");
participant = await instance.participants(1);
assert.equal(participant[0], "B");
assert.equal(participant[2], "Supplier");
participantId = await instance.addParticipant("C","passC","0x17c86d9aecdb225e4bC11e576Fa046A9bb9Ad2cF","Consumer");
participant = await instance.participants(2);
assert.equal(participant[0], "C");
assert.equal(participant[2], "Consumer");
});

it("should return Participant details", async () => {
let instance = await SupplyChain.deployed();
let participantDetails = await instance.getParticipant(0);
assert.equal(participantDetails[0], "A");
instance = await SupplyChain.deployed();
participantDetails = await instance.getParticipant(1);
assert.equal(participantDetails[0], "B");
instance = await SupplyChain.deployed();
participantDetails = await instance.getParticipant(2);
assert.equal(participantDetails[0], "C");
})
});