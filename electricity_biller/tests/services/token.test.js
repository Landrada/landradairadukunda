 const {Token} = require('./../../models/token.model');
const mongoose = require('mongoose');

let { 
    checkDays, checkToken, createToken
  } = require('./../../services/token.service')

describe("Test token",()=>{
    let db;
    mockToken =  {tokenVal: '753621', date : new Date , expiryDate: new Date+6, active: true};
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://elecat:5Jq3aW1odbhtMeYk@electricity_Cat/test?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        });
        db = mongoose.connection;
        // mongoose.connection.dropCollection('users');
      });
      afterAll(async () => {
        await db.close();
      });

      it('should create token', async () => {
        await createToken(mockToken.tokenVal,mockToken.date,mockToken.expiryDate, mockToken.active);
        const insertedtkn = await Token.findOne({tokenVal: mockUser.tokenVal});
        expect(insertedtkn.tokenVal).toEqual(mockToken.tokenVal);
      });
  
      it('should check token existence ',async()=>{
        const mockedTkn = '753621';
          const response = await checkToken(mockedTkn)
          expect(response).toEqual(mockedTkn)
      })
      it('Should return false for wrong token', async () => {
        const wrongtoken = '765762';
        const response = await checkToken(wrongtoken);
        expect(response).toBe(false);
      })
      it('should return days for correct credentials', async() => {
        const response = await checkDays(mockToken.tokenVal);
        expect(response).toBe(false);
      })
    
})
