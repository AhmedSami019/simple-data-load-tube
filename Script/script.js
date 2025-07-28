// this function about load the category menu
const loadData = ()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayData(data.categories))
    
}

// this function about load video
const loadVideo = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => console.log(data.videos))
}


// this function about display the category menu
const displayData = (data)=>{
    // get the container
    const categoryContainer = document.getElementById("category-container")
    // loop operation on the array 
    data.map(cat => {
        // create element
        const categoryBtn = document.createElement("div")
        categoryBtn.innerHTML = `
              <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
              `
              // append the element into the categoryContainer
              categoryContainer.append(categoryBtn)
            })
}

// this function about display the video
const displayVideo = ()=>{
    // get the container
    // loop operation into the array
        // create element
        // append the element into the container
}

loadData()
loadVideo()