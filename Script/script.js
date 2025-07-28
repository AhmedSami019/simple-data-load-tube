// this function about load the category menu
const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.categories));
};

// this function about load video
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos));
};

// this function about to load video base on category
const loadCategoryVideo = (id)=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.category))
}

// this function about display the category menu
const displayData = (data) => {
  // get the container
  const categoryContainer = document.getElementById("category-container");
  // loop operation on the array
  data.map((cat) => {
    // create element
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
              <button onclick="loadCategoryVideo(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
              `;
    // append the element into the categoryContainer
    categoryContainer.append(categoryBtn);
  });
};

// this function about display the video
const displayVideo = (videos) => {
  // get the container
  const videoContainer = document.getElementById("video-container");
  // loop operation into the array
  videos.map((video) => {
    console.log(video);
    const {
      category_id,
      description,
      others,
      title,
      video_id,
      thumbnail,
      authors,
    } = video;
console.log(title);
    // create element
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
        <figure class="relative">
          <img class="w-full h-50"
            src=${thumbnail}
            alt="Shoes"
          />
          <span class="bg-gray-200 absolute bottom-2 right-2 px-1 text-sm rounded-md">
            3hr 43min ago
          </span>
        </figure>
        <div class="card-body px-4 flex flex-row gap-5 ">
          <div class="avatar">
            <div
              class="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2"
            >
              <img
                src=${authors[0].profile_picture}
              />
            </div>
          </div>
          <div>
            <h2 class="card-title text-base">${title}</h2>
            <p class="text-gray-600 text-sm flex items-center gap-3">
              ${authors[0].profile_name}
              
              <img class="w-5" src="https://img.icons8.com/?size=96&id=FNbnqlDTjR45&format=gif" alt="">
              </p>
            <p class="text-gray-600 text-sm mt-2">
              ${others.views}
            </p>
          </div>

        </div>
      </div>
        `;
    // append the element into the container
    videoContainer.append(videoCard);
  });
};

loadData();

