// Select Elements
const mainContainer = document.querySelector('.main-container')
const sectionContainer = document.querySelector('.section-container');
const youMayKnowList = document.querySelector('.you-may-know');
const followingList = document.querySelector('.following');

const userContainer = document.querySelector('.user-container');
const userInfo = document.querySelector('.user-info');
const followBtnContainer = document.querySelector('.follow-btn-container');
const btn = document.querySelectorAll('.btn');

// Event Listener
mainContainer.addEventListener('click', following);
mainContainer.addEventListener('mouseover', mouseOver);
mainContainer.addEventListener('mouseout', mouseOut);


// Click Dynamic
function following(e){
    if(e.target.className === 'btn follow-btn'){
        e.target.setAttribute('class', 'btn following-btn');
        e.target.textContent = 'Following';

        followingList.appendChild(e.target.parentElement.parentElement);
    } else if(e.target.className === 'btn following-btn'){
        e.target.removeAttribute('class');
        e.target.setAttribute('class', 'btn follow-btn');
        e.target.textContent = 'Follow';

        alert('Are you sure you want to unfollow?')

        youMayKnowList.appendChild(e.target.parentElement.parentElement);
    }
};

// Hover Dynamic 
function mouseOver(e){
            if(e.target.className === 'btn following-btn'){
                e.target.textContent = 'Unfollow';
            } 
    }

function mouseOut(e){
    if(e.target.className === 'btn following-btn'){
        e.target.textContent = 'Following';
    } 
}