
    //O spred/espalhar 
    //Serve para espalhar para cada elemento(chave e conteúdo) do array
    let front = ['react', 'vue', 'angular'];
    let back = ['python', 'ruby', 'nodejs'];

    // let fullStack = [];
    // fullStack = fullStack.concat(front);
    // fullStack.push('RxJS');
    // fullStack = fullStack.concat(back);

    let espalharSpread = [...front,...back];
    let fullStack = [...front, 'RxJS', ...back];

    //O RxJS vai ter adicionado no final do front sem usar o push() e o concat().

    console.log(espalharSpread);
    console.log(fullStack);

    console.log([...'will']);

    //vai Criar um array ['w','i','l,'l'].
    console.log(...front);

    //Tem que ser usado dentro de uma função ou criar um array usando [..from].

    //teste com função
function sum(x, y, z) {
  return x + y + z;
}

    const numbers = [1, 2, 3];

    console.log([...numbers]);
    console.log(sum(...numbers));
    //teste com objeto
class Pessoa{
     _nome 
     _idade 
     _peso
     constructor(nome,idade,peso){
         this._nome=nome
         this._idade=idade 
         this._peso=peso 
     }
     }; 
     let pessoa1=new Pessoa('Edson ',25,68);
     let pessoa2=new Pessoa('Rodrigo',45,70);
     console.log({...pessoa1})
     console.log({...pessoa2})