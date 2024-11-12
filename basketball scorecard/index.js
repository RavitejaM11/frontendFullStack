let homeScoreOne = document.getElementById("score-btn-1")
let homeStoreResult = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreByOne() {
    homeScore += 1
    homeStoreResult.textContent = homeScore
    
}

function increaseHomeScoreByTwo() {
    homeScore += 2
    homeStoreResult.textContent = homeScore
    
}

function increaseHomeScoreByThree() {
    homeScore += 3
    homeStoreResult.textContent = homeScore
    
}

let guestScorebtn = document.getElementById("score-btn-guest-1")
let guestStoreResult = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreByOne() {
    guestScore += 1
    guestStoreResult.textContent = guestScore

}

function increaseGuestScoreByTwo() {
    guestScore += 2
    guestStoreResult.textContent = guestScore

}

function increaseGuestScoreByThree() {
    guestScore += 3
    guestStoreResult.textContent = guestScore

}