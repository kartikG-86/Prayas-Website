const presidentsLi = document.querySelector(".presidents-li");
const advisorsLi = document.querySelector(".advisors-li");
const coreTeamLi = document.querySelector(".core-team-li");
const devTeamLi = document.querySelector(".dev-team-li");
const presidents = document.querySelector(".presidents");
const advisors = document.querySelector(".advisors");
const coreTeam = document.querySelector(".core-team");
const devTeam = document.querySelector(".dev-team");

const removeAll = function() {
    advisors.classList.add('display-none');
    presidents.classList.add('display-none');
    coreTeam.classList.add('display-none');
    devTeam.classList.add('display-none');
    advisorsLi.classList.remove('active');
    presidentsLi.classList.remove('active');
    devTeamLi.classList.remove('active');
    coreTeamLi.classList.remove('active');
}
presidentsLi.addEventListener('click', function(e) {
    removeAll();
    presidents.classList.remove('display-none');
    presidentsLi.classList.add('active');
})
advisorsLi.addEventListener('click', function(e) {
    removeAll();
    advisors.classList.remove('display-none');
    advisorsLi.classList.add('active');
})
coreTeamLi.addEventListener('click', function(e) {
    removeAll();
    coreTeam.classList.remove('display-none');
    coreTeamLi.classList.add('active');
})
devTeamLi.addEventListener('click', function(e) {
    removeAll();
    devTeam.classList.remove('display-none');
    devTeamLi.classList.add('active');
})