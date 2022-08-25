import React, {useState}from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const [resultNumber,setnumber]= useState(0)
    const [oldNumber,setOld]= useState(0)
    const [operator,setOperator]= useState()


/* funçao para substituir o zero pelo numero */
    function numberInput(e){
        var input = e.target.value
        if(resultNumber === 0){
            setnumber(input)
        }else{
            setnumber(resultNumber+input)
        }  
}

/* função para o botao AC */
    function allClear(e) {
        setnumber(0)
    }

/*     funçao para o botão de porcentagem */
    function percentage (){
        setnumber(resultNumber/ 100)
    }

/* função para o botão de positivo e negativo */
    function getSign(){
        if( resultNumber > 0){
            setnumber(-resultNumber)
        }else{
            setnumber(Math.abs(resultNumber))
        }
    }

    function operatorHandler(e){
        let inputOperator=e.target.value
        setOperator(inputOperator)
        setOld(resultNumber)
        setnumber(0)
    }

/* funcao para os botoes de operaçoes basicas */
/* usar parseFloat para que o JS identifique os sinais como numeros e não em string */
    function calculate (){
        if(operator === "/"){
        setnumber(parseFloat(oldNumber)/parseFloat(resultNumber));
    } else if (operator === "X") {
        setnumber(parseFloat(oldNumber)*parseFloat(resultNumber));
    } else if (operator === "-"){
        setnumber(parseFloat(oldNumber)-parseFloat(resultNumber));
    } else if (operator ==="+"){
        setnumber(parseFloat(oldNumber)+ parseFloat(resultNumber));
    }
}  

return (
    <div>
        <header className="Header">Calculadora</header>
    <Box m={5}/>
<Container maxWidth="xs">
    <div className="backStyle">
    <Box m={7}/>
    <h1 className="Results">{resultNumber}</h1>
    <button className="Red" onClick={allClear}>AC</button>
    <button className="Black"onClick={getSign}>+/-</button>
    <button className="Black"onClick={percentage}>%</button>
    <button className="Black"onClick={operatorHandler}value="/">/</button>
    <button className="Gray"onClick={numberInput}value={7}>7</button>
    <button className="Gray"onClick={numberInput}value={8}>8</button>
    <button className="Gray"onClick={numberInput}value={9}>9</button>
    <button className="Black"onClick={operatorHandler}value="X">X</button>
    <button className="Gray"onClick={numberInput}value={4}>4</button>
    <button className="Gray"onClick={numberInput}value={5}>5</button>
    <button className="Gray"onClick={numberInput}value={6}>6</button>
    <button className="Black"onClick={operatorHandler}value="-">-</button>  
    <button className="Gray"onClick={numberInput}value={1}>1</button>
    <button className="Gray"onClick={numberInput}value={2}>2</button>
    <button className="Gray"onClick={numberInput}value={3}>3</button>
    <button className="Black"onClick={operatorHandler}value="+">+</button>
    <button className="Gray" style={{visibility:"hidden"}}>ll</button>
    <button className="Gray"onClick={numberInput}value={0}>0</button>
    <button className="Gray"onClick={numberInput}value={'.'}>,</button>  
    <button className="Green"onClick={calculate}>=</button>  
    </div>
</Container>
</div>
)
}
