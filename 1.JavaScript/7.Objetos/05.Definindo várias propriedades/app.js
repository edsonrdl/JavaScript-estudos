var pessoa={};
Object.defineProperties(pessoa,{
   _nome:{
    value:"Rodrigo",
    enumerable:true,
    configurable:false,
    writable:true

   } ,
   _sexo:{
    value:"M",
    enumerable:true,
    configurable:true,
    wiretable:true

   } ,
   _idade:{
    value:"16",
    enumerable:true,
    configurable:true,
    wiretable:true

   } 
   ,
   nome:{
    get: function(){
return this._nome;
    },
    set: function(value){
         this._nome=value;
    }
   },
   sexo:{
    get: function(){
return this._sexo;
    },
    set: function(value){
         this._sexo=value;
    }
   }
});
pessoa.nome="Maria";
pessoa.sexo="F"
console.log(pessoa.sexo);