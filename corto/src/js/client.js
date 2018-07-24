const state = {
  secuencia: []

};



function generar(numero){
  state.secuencia = [1,1]
  for(let i = 2; i < numero; i+=1){
    state.secuencia[i]= state.secuencia[i-1] + state.secuencia[i-2];
  }
}


const render = lState => {

  if(root.hasChildNodes()){
    root.innerHTML=null;
  }

  const divinput = document.createElement('div');
  divinput.className = "div-input";
  
  const graficas = document.createElement('div');
  graficas.className = "caja-graficas";

  const cajainput = document.createElement('input');
  cajainput.className = "caja-input";

  const btnGenerar = document.createElement('button');
  btnGenerar.className = "boton-generar";
  btnGenerar.innerHTML = "Generar";

  btnGenerar.onclick = () => {
    let a = cajainput.value;
    if(a == 1){
      state.secuencia = [1];
    }else{
      generar(a);
    }
    
    for(let j = 0; j<state.secuencia.length;j+=1){
      const barrita = document.createElement('div');
      barrita.className = "barritas-div";
      barrita.style.height = state.secuencia[j] + "px";
      graficas.appendChild(barrita);
    }
  }

  


  
  divinput.appendChild(cajainput);
  divinput.appendChild(btnGenerar);
  root.appendChild(divinput);
  root.appendChild(graficas);

  

  
  
}


render(state);