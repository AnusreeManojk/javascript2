// Allow only
// characters A-Z
// NUmbers 0-9
// Underscore_
// starts only with charachter
function textOnChange(arg){
    const label=document.getElementById('validation-label')
    const error=validate(arg.value)
    if (error){
        label.innerText=error;
    }else{
        label.innerText='';
    }
}

function validate(value){
    const regex=/^[a-z][a-z0-9_]*/i
    const result=regex.test(value)
    if(result){
        return ''
    }else{
        return 'Invalid String'
    }
   
}
// 
  const regex1=/[^kmj]/i;
  const string='Hello'
  const result1=regex1.test(string)
  console.log(result1)

  const a=/l{2}o$/i
const result2=a.test(string)
console.log(result2)

const regex2=/\d/i;
const string1='Hello'

// substring extraction
// for date
function textOnChange(arg){
    const label=document.getElementById('validation-label')
    const error=validate(arg.value)
    if (error){
        label.innerText=error;
    }else{
        label.innerText='';
    }
}

function validate(value){
    const regex=/^([012]?\d|3[01])-\d{1,2}-\d{4}$/i
    const result=value.match(regex)
    if(result){
        return ''
    }else{
        return 'Invalid String'
    }
}

