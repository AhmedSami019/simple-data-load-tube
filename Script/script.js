const loadData = ()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayData(data.categories))
    
}

const displayData = (data)=>{
    // get the container
    const categoryContainer = document.getElementById("category-container")
    // loop operation on the array 
    data.map(cat => {
        // create element
        const categoryBtn = document.createElement("div")
        categoryBtn.innerHTML = `
              <button class="btn btn-sm">${cat.category}</button>
              `
              // append the element into the categoryContainer
              categoryContainer.append(categoryBtn)
            })

    
}

loadData()