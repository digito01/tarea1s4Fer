//alert('Fernando se merece un 97%');
import Fotos from './fotos';
import './index.css';

const fotos = new Fotos();

async function main() {
    console.log(await fotos.getFotos());
    
}

function isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }

  console.log(isValidJSON('test'))

main();