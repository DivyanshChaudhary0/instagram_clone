
const users = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

let main = document.querySelector("main");

function show_data() {
  let clutter = "";
  users.forEach(function (elem,idx) {
    clutter += `<div class="card">
            <div class="card-header">
                <div class="left">
                    <div class="image">
                        <img src="${elem.userprofile}" alt="">
                    </div>
                    <div class="content">
                        <h3>${elem.username}</h3>
                        <p>${elem.userlocation}</p>
                    </div>
                </div>
                <div class="right">
                    <button>Follow</button>
                    <i class="ri-more-2-fill"></i>
                </div>
            </div>

            <div class="image">
                <img id=${idx} src="${elem.userPost}" alt="">
                <i class="ri-heart-3-fill"></i>
            </div>

            <div class="card-bottom">

                <div class="icon-container">
                    <div class="left">
                        <div class="like icon">
                            <i class="ri-heart-3-fill"></i>
                            <p>${elem.likeCount}</p>
                        </div>
                        <div class="comment icon">
                            <i class="ri-chat-ai-line"></i>
                            <p>${elem.commentCount}</p>
                        </div>
                        <div class="share icon">
                            <i class="ri-share-forward-fill"></i>
                            <p>${elem.shareCount}</p>
                        </div>
                    </div>
                    <div class="right">
                        <img src="./bookmark.png" alt="">
                    </div>
                </div>

                <div class="caption">
                    <p>${elem.caption}...</p>
                    <p>View all comments</p>
                </div>

                <div class="time">
                    <p>${elem.timeAgoUploaded} Days ago</p>
                </div>
            </div>
        </div>`;
  });

  main.innerHTML = clutter;
}
show_data();

const images = document.querySelectorAll(".card .image");
const cards = document.querySelectorAll(".card");
const like_icon = document.querySelectorAll(".like i");
const heart_popUp = document.querySelectorAll(".image i");

cards.forEach(function(card){
    card.addEventListener("dblclick",function(e){
        if(e.target.tagName === "IMG"){
          heart_popUp[e.target.id].style.opacity = "1";
          heart_popUp[e.target.id].style.transform = `translate(-50%,-50%) scale(0.9)`;
          setTimeout(function(){
            heart_popUp[e.target.id].style.opacity = "0";
          },2000)
          like_icon[e.target.id].style.color = "red";
          // users[e.target.id].likeCount += 1;
          // show_data()
        }
    })
})

// +++++++++++++++ icon red-black feature +++++++++++++++++++++++ 

like_icon.forEach(function(i){
    i.addEventListener("click",function(e){
        if(i.style.color === "black"){
            i.style.color = "red";
        }
        else{
            i.style.color = "black";
        }
    })
})

// +++++++++++++++ Follow unfollow feature +++++++++++++++++++++++++++

const follow_btn = document.querySelectorAll(".right button");
follow_btn.forEach(function(button){
  button.addEventListener("click",function(){
    if(button.textContent == "Follow"){
      button.textContent = "Following"
    }
    else{
      button.textContent = "Follow"
    }
  })
})


// images.forEach(function(imgDiv){
//     imgDiv.addEventListener("click",function(){
//         console.log("Hello boys");
//     })
// })