import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from './components/row_item';
import Label from './components/label';
import Keyboard from './components/keyboard';
import Score from './components/score';
import Lost from './components/lost.js'
import Won from './components/won';
import {words} from "./data/words.ts";
function App() {
  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function optWord()
  {
    let index=Math.floor(Math.random()*10000)%words.length;
    return words[index].toUpperCase().split("");
  }
  const [temp_str,setTemp_str]=useState(optWord());
  const [row_counter,setRow_counter]=useState(1);
  const [colum_counter,setColumn_counter]=useState(0);
  const [str1,setStr1]=useState("     ");
  const [str2,setStr2]=useState("     ");
  const [str3,setStr3]=useState("     ");
  const [str4,setStr4]=useState("     ");
  const [str5,setStr5]=useState("     ");
  const [str6,setStr6]=useState("     ");
  const [scr,setScr]=useState(0);
  const [keyp,setKeyp]=useState("");
  console.log(temp_str);
  let keypressed="";
  document.onkeydown=(e)=>{
    keypressed=e.key;
    setKeyp(e.key);
    let x=document.getElementById(keypressed);
    x.style.backgroundColor="gray";
    setTimeout(() => {
      x.style.backgroundColor="transparent";
    }, 150);

    //Code for data filling:
    if(keypressed=="Backspace")
    {
      switch(row_counter)
      {
        case 1:
          setStr1((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;
        case 2:
          setStr2((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;
        case 3:
          setStr3((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;
        case 4:
          setStr4((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;
        case 5:
          setStr5((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;
        case 6:
          setStr6((value)=>{
            return setCharAt(value,colum_counter-1,' ');
          });
          setColumn_counter(colum_counter-1);
          break;  
      }
    }
    else if(keypressed!="Enter")
    {
      switch(row_counter)
      {
        case 1:
          setStr1((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;
        case 2:
          setStr2((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;
        case 3:
          setStr3((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;
        case 4:
          setStr4((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;
        case 5:
          setStr5((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;
        case 6:
          setStr6((value)=>{
            return setCharAt(value,colum_counter,keypressed.toUpperCase());
          });
          setColumn_counter(colum_counter+1);
          break;  
      }


    }
    else
    {
    let select=document.querySelector(`#_${row_counter}`).childNodes;
    for(let i=0;i<select.length;i++)
    {
      if(select[i].innerHTML==" ")
      return;
    }
    setColumn_counter(0);
    for(let i=0;i<select.length;i++)
    {
      if(temp_str.includes(select[i].innerHTML))
      {
        if(select[i].innerHTML!=temp_str[i])
        {
          select[i].style.backgroundColor="#979733";
        }
        else
        {
        select[i].style.backgroundColor="#007c00";

        }
      
      }
      else
      {
        select[i].style.backgroundColor="gray";
      }
    }
    let wincheck=true;
    for(let i=0;i<select.length;i++)
    { 
          
            if(select[i].style.backgroundColor!="rgb(0, 124, 0)")
            wincheck=false;
    }
    if(wincheck)
    {
      //Code for winning the game:
      let won=document.getElementById("won");
      won.style.display="flex";
      setScr(scr+10);
      setTemp_str(optWord());
      setTimeout(() => {
      setRow_counter(1);
      setStr1("     ");
      setStr2("     ");
      setStr3("     ");
      setStr4("     ");
      setStr5("     ");
      setStr6("     ");

      let row_items=document.getElementsByClassName("row_item");
      for(let i=0;i<row_items.length;i++)
      {
        row_items[i].style.backgroundColor="";
      }
      won.style.display="none"; 

      }, 1000);
      

    }
    else if(!wincheck && row_counter==6)
    {
      //Code for losing the game.
  
      let lost=document.getElementById("lost");
      lost.style.display="flex";
      setScr(0);
      setTimeout(() => {
      setTemp_str(optWord());
      setRow_counter(1);
      setStr1("     ");
      setStr2("     ");
      setStr3("     ");
      setStr4("     ");
      setStr5("     ");
      setStr6("     ");

      let row_items=document.getElementsByClassName("row_item");
      for(let i=0;i<row_items.length;i++)
      {
        row_items[i].style.backgroundColor="";
      }
      lost.style.display="none";

      }, 1000);

    }
    else
      setRow_counter(row_counter+1);
    }
  }  
  useEffect(()=>{
    if(colum_counter==6)
    {
      setColumn_counter(5);
    }
    if(colum_counter<0 && keyp=="Backspace")
    {
      setColumn_counter(0);
    }
    
  },[colum_counter])

  return (
      <>
      <div className="contain_out">
      <div className="contain">
            <div className="rows">
              <Label/>
              <Row rowno="_1" string={str1}/>
              <Row rowno="_2" string={str2}/>
              <Row rowno="_3" string={str3}/>
              <Row rowno="_4" string={str4}/>
              <Row rowno="_5" string={str5}/>
              <Row rowno="_6" string={str6}/>
              <Score score={scr}/>
              <Lost word={temp_str}/>
              <Won/>
            </div>

      </div>
      <Keyboard/>
      </div>
      </>
  );
}

export default App;
