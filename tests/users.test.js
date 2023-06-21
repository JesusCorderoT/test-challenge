// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want


describe('getUser', () => {
    it('Regresa al usuario con ID 2', () => {
      const user = getUser(2);
      expect(user).toBeInstanceOf(Object);
      expect(user.id).toBe(2);
      expect(user.username).toBe('spiderman');
      expect(user.email).toBe('parkerdapete@gmail.com');
      expect(user.password).toBe('2D$aLzX9(_2');
    });
  });
  
// READ documentation