var button=document.getElementById('mybutton')
button.onclick =()=>{
    console.log('started click event')
    var arr=[]
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/1',
        success:(data)=>{
            console.log('ajax1 started')
            arr.push(data.title)
            console.log('ajax1 ended')

        },
        async:false
    })

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/2',
        success:(data)=>{
            onsole.log('ajax2 started')
            arr.push(data.title)
            console.log('ajax2 ended')        },
        async:false
    })}
    document.getElementById('mytext').value=arr.join('\n')
    console.log('ended click event')

    console.log('ended click event')


    