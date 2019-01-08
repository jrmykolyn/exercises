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

    describe('isPlaying', () => {
      it('should be a boolean', () => {
        expect(typeof (new Player()).isPlaying === 'boolean').toBe(true);
      });

      it('should be true', () => {
        expect((new Player()).isPlaying).toBe(true);
      });
    });
  });

  describe('Instance methods', () => {
    describe('draw()', () => {
      it('it should add a number the Player\'s hand', () => {});
    });

    describe('call()', () => {
      it('...', () => {});
    });

    describe('bet()', () => {});

    describe('raise()', () => {});

    describe('fold()', () => {});
  });
});
