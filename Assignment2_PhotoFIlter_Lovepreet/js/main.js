// Enter your JavaScript for the solution here...
window.addEventListener("load", function(e){
   
    let input = document.getElementById('filter').value
    input = input.toLowerCase();
    let pics = document.getElementsByClassName("tags")

    for(i=0; i < pics.length; i++){
        if(!pics[i].innerHTML.toLowerCase().includes(input)){
            pics[i].style.display = "none";
        }
        else{
            pics[i].style.display = "value"
        }
    }
    console.log(pics)

})