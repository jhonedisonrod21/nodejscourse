let deadpool ={
    nombre : "wade",
    apellido: "wilson",
    poder: "regenersaaaaacion",
    getnombre: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(deadpool.getnombre());