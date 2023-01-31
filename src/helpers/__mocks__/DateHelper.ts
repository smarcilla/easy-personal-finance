export default jest.fn().mockImplementation(() => {
  return {
    parseDate: jest.fn().mockReturnValue(new Date('2022-04-30T22:00:00.000Z')),
  };
});
