/** CREATING OBJECTS WITH FACTORIES  
 * From Javascript-Mancy By Jamie G. Garcia
*/

interface monsterType {
  type: string;
  hp: number;
  toString: () => string;
  position: { x: number; y: number };
  movesTo: (x: number, y: number) => void;
}

function monster(type: string, hp: number = 10): monsterType {
  return {
    type,
    hp,
    toString() {
      return this.type;
    },
    position: { x: 0, y: 0 },
    movesTo(x, y) {
      console.log(`${this} moves to (${x}, ${y})`);
      this.x = x;
      this.y = y;
    },
  };
}

const tinySpider = monster('tiny spider', 1);
tinySpider.movesTo(1, 1);

const giantSpider = monster('giant spider', 200);
giantSpider.movesTo(10, 10);