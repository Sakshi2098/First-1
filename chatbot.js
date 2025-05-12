let prompt=document.querySelector("#prompt")
let chatContainer=document.querySelector(".chat-container")

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCaa8noQgdNqYzsdbp1eubH1KNRnXcs8wY" 

let user={
    data:null,
}


async function generateresponse(aiChatBox) {

    let RequestOption={
        method:"POST",
        headers:{'Content-Type' :  'application/json'},
        bodt:JSON.stringfy({

         "contents": [{
             "parts":[{"text": user.data}

             ]
            }]
        })

    }
    
    try{
       let response= await fetch(Api_Url,RequestOption)
       let data= await response.json()
      let apiResponse
    }
    catch(error){
        console.log(error);
    }
    


     

    let response=fetch(Api_Url,response)
    
}





function createChatBox(html, classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}


function handlechatResponse(message){
    user.data=message


    let html=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl0ysscI4q3OX1RU9o7N6MKpQ4GJdczAmlA&s" width="50"alt="" id="user-image">
             <div class="user-chat-area">
                  ${user.data}
             </div>`
             prompt.value=""

setTimeout(()=>{
       let html=` <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2I6zDdQlJYqWYbBol7EUltwyFcb5yK6HJgQ&s" alt="" id="ai-image" width="50">
              <div class="ai-chat-area">
                  
              </div>`
              let aiChatBox=createChatBox(html,"ai-chat-box")
              chatContainer.appendChild(aiChatBox)
              generateResponse(aiChatBox)
},600)




             let userChatBox=createChatBox(html,"user-chat-box")
             chatContainer.appendChild(userChatBox)


}

prompt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        
            handlechatResponse(prompt.value)
        }
        

    
    


})