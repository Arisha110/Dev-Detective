// async function profiles(){
//    let name="love";
//    const response= await fetch(`https://api.github.com/users/${name}`);
//    const data =await  response.json();
//    console.log(data);
// }

const searchInput=document.getElementById("search-input");
const searchButton=document.querySelector("[search-btn]");


// function init(){
//    user="arishaahmed";

// }
function init(){
   let first="arisha110";
   getProfile(first);
}
init();
searchButton.addEventListener("click", (e)=>{
   e.preventDefault();
   let user=searchInput.value;
   if(user==""){
      return;
   }
   else{
      getProfile(user);
   }
});

async function getProfile(user){
    try{
    const response= await fetch(
      `https://api.github.com/users/${user}`
      );
    const data =await  response.json();
    
    renderUserInfo(data);
    }
    catch(err){

    }
   
}


function renderUserInfo(userdata){
   const profileImg=document.querySelector("[profile-img]");
   const Name=document.querySelector("[person-name]");
   const joiningDate=document.querySelector("[joined-on]");
   const gitusername=document.querySelector("[username]");
   const description=document.querySelector("[description]");
   const reposCount=document.querySelector("[repos-count]");
   const followers=document.querySelector("[follower-count]");
   const following=document.querySelector("[following-count]");

   profileImg.src=userdata?.avatar_url;
   // Name.innerText=userdata?.name;
   // gitusername=userdata?.login;
   joiningDate.innerText=`Joined at ${userdata?.created_at}`;
   reposCount.innerText=userdata?.public_repos;
   followers.innerText=userdata?.followers;
   following.innerText=userdata?.following;
   description.innerText=userdata?.bio;
   gitusername.innerText=userdata?.login;
   Name.innerText=userdata?.name;
}
