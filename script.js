console.log("script");
document.querySelector('.cross').style.display='none';
document.querySelector('.threebtn').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
{
    document.querySelector('.tbtn').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else
{
    document.querySelector('.tbtn').style.display='none'
    setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'

    },400);
   
}
})
