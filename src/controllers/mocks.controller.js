import MockingService from "../services/mocking.service.js";

const getMockingPets = async (req, res) => {
  const { num } = req.params;

  const pets = await MockingService.generateMockingPets(num);
  res.send({ status: "Success", payload: pets });
};
const getMockingUsers = async (req, res) => {
  const users = await MockingService.generateMockingUsers(100);
  res.send({ status: "Success", payload: users });
};

const generateData = async (req, res) => {
  const { pNum, uNum } = req.body;
  const pets = await MockingService.generateMockingPets(pNum);
  const users = await MockingService.generateMockingUsers(uNum);

  res.send({ status: "Success", payload: (pets, users) });
};

export default {
  getMockingPets,
  getMockingUsers,
  generateData,
};
