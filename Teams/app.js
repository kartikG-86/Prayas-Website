//const presidentsLi = document.querySelector(".presidents-li");
const advisorsLi = document.querySelector(".advisors-li");
const coreTeamLi = document.querySelector(".core-team-li");
const devTeamLi = document.querySelector(".dev-team-li");
//const presidents = document.querySelector(".presidents");
const advisors = document.querySelector(".advisors");
const coreTeam = document.querySelector(".core-team");
const devTeam = document.querySelector(".dev-team");

const removeAll = function() {
    advisors.classList.add('d-none');
    //presidents.classList.add('d-none');
    coreTeam.classList.add('d-none');
    devTeam.classList.add('d-none');
    advisorsLi.classList.remove('teams-active');
    //presidentsLi.classList.remove('teams-active');
    devTeamLi.classList.remove('teams-active');
    coreTeamLi.classList.remove('teams-active');
}
// presidentsLi.addEventListener('click', function(e) {
//     removeAll();
//     presidents.classList.remove('d-none');
//     presidentsLi.classList.add('teams-active');
// })
advisorsLi.addEventListener('click', function(e) {
    removeAll();
    advisors.classList.remove('d-none');
    advisorsLi.classList.add('teams-active');
})
coreTeamLi.addEventListener('click', function(e) {
    removeAll();
    coreTeam.classList.remove('d-none');
    coreTeamLi.classList.add('teams-active');
})
devTeamLi.addEventListener('click', function(e) {
    removeAll();
    devTeam.classList.remove('d-none');
    devTeamLi.classList.add('teams-active');
})