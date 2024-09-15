// Calculator program

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";  
}

function Calculate(){
    
    catch(error){
        display.value = "Error";
    }    
}

