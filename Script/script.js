// function to remove active class from btn
const removeActiveClass = () => {
  const activeBtns = document.getElementsByClassName("active");
  for (const btn of activeBtns) {
    btn.classList.remove("active");
  }
};

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
    .then((data) => {
      removeActiveClass()
      document.getElementById("btn-all").classList.add("active");
      displayVideo(data.videos);
    });
};

// this function about to load video base on category
const loadCategoryVideo = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickedBtn = document.getElementById(`btn-${id}`);
      clickedBtn.classList.add("active");
      displayVideo(data.category);
    });
};

// this function use to load details of video
const loadVideoDetails = (video_id)=>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayVideoDetails(data.video))
}

// this function for display video details 
const displayVideoDetails = (video)=>{

  const {thumbnail, title, description} = video

  document.getElementById('videoDetails').showModal()
  const detailsContainer = document.getElementById('details-container')
  detailsContainer.innerHTML = `
  <div class="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="${thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title font-semibold text-xl">${title}</h2>
    <p>${description}</p>
  </div>
</div>
  `
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
              <button id="btn-${cat.category_id}" onclick="loadCategoryVideo(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
              `;
    // append the element into the categoryContainer
    categoryContainer.append(categoryBtn);
  });
};

// this function about display the video
const displayVideo = (videos) => {
  // get the container
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div class="col-span-full text-center flex flex-col mt-10 md:mt-20 gap-5 items-center justify-center">
      <img src="assets/Icon.png" alt="">
      <h2 class="text-4xl font-semibold">Oppos!! there is no content</h2>
     </div>
    `;
  }
  // loop operation into the array
  videos.map((video) => {
    const {
      category_id,
      description,
      others,
      title,
      video_id,
      thumbnail,
      authors,
    } = video;

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
              ${authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=FNbnqlDTjR45&format=gif" alt="">` : ``}
              
              </p>
            <p class="text-gray-600 text-sm mt-2">
              ${others.views}
            </p>
          </div>
        </div>
        <button onclick=loadVideoDetails('${video_id}') class="btn btn-block">show details</button>
      </div>
        `;
    // append the element into the container
    videoContainer.append(videoCard);
  });
};

loadData();
