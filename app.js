const arrows = document.querySelectorAll(".arrow");

const movieList = document.querySelectorAll(".movie-list");
/*
arrows.forEach((arrow,i)=> {
    arrow.addEventListener("click",()=>{
        console.log("you clicked to: " +i)
    })
})
/* Note- Works to display Arrow Function
*/

/*
arrows.forEach((arrow,i)=> {
    arrow.addEventListener("click",()=>{
        movieList[i].style.backGroundColor = "red"
    })
})
/* NOTE- Not Working. I think I am missing a ; at the end of the statment for Red, The video does not indicate it needed one. 
*/

/*
arrows.forEach((arrow,i)=> {
    arrow.addEventListener("click",()=>{
        movieList[i].style.transform = "translateX(-100px)";
    });
    console.log(movieList[i].computedStyleMap().get("transform")[0].x.value)
});
/* Note- Works to show Movie List Funtion
*/

/*
arrows.forEach((arrow,i)=> {
    arrow.addEventListener("click",()=>{
        movieList[i].style.transform = 'translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value -300}px)';
    });
});
/* NOTE- Moving Slide Bar Fuction from right to left 300px. This code doesn't work. 
After the first ' VSC doesn't allow the comand line to show outside of the second ' . 

Copied and moved on with lesson to come back. 
Finished Code Per Video below: Still broken. :(
*/
/*
arrows.forEach((arrow,i)=> {
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0)
        movieList[i].style.transform = 'translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value -300}px)';
    } else {
        movieList[i].style.transform = "translateX(0)";
        clickCounter=0
    }
    });
    console.log(movieList[i].querySelectorAll("img").length)
});
Videos 11 and 12
*/

const ball = document.querySelector(".toggleball");
const items = document.querySelectorAll("html,.toggle,.Side-menue-item,.sidebar,.profile-text-container,.navebar-container,.movie-list-title,.container");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})
