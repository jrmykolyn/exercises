const Player = require('../src/player');

describe('Player', () => {
  describe('General', () => {
    it('should be constructable', () => {
      expect(new Player()).toBeInstanceOf(Player);
    });  
  });

  describe('Instance properties', () => {
    describe('chips', () => {
      it('should be a number', () => {
        expect(typeof (new Player()).chips === 'number').toBe(true);
      });

      it('should be greater than 0', () => {
        expect((new Player()).chips > 0).toBe(true);
      });
    });

    describe('hand', () => {
      it('should be an array', () => {
        expect(Array.isArray((new Player()).hand)).toBe(true)
      });

      it('should have a length of 0', () => {
        expect((new Player()).hand.length).toBe(0);
      });
    });
  });

  describe('Instance methods', () => {

  });
});
