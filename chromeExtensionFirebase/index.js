import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"
import { getDatabase,
          ref, 
          push,
         remove,
        onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://lead-tracker-app-70424-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const leadsInDB = ref(database, "leads")


const inputEl = document.getElementById("input-box")
const saveBtn = document.getElementById("save-btn")
const delBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

function render(leads) {
    let listItems = "" 
    for (let i=0; i < leads.length; i++) {
         listItems += `
                    <li>
                        <a target='_blank' href='${leads[i]}'>
                            ${leads[i]}
                        </a>
                    </li>
                `
    }    
    ulEl.innerHTML = listItems
}

onValue(leadsInDB, function(snapshot) {
    if (snapshot.exists()) {
        let leads = Object.values(snapshot.val())
        render(leads)
    } else {
        ulEl.innerHTML = "No leads yet"
    }
})


delBtn.addEventListener("dblclick", function() { 
    // if snapshot exists, fetch and delete values from the snapshot and then render it
    onValue(leadsInDB, function(snapshot) {
        if (snapshot.exists()) {
        let leads = Object.values(snapshot.val())
        leads = []
        render(leads)
    }
}
    )

}
)

saveBtn.addEventListener("click", function() {
        push(leadsInDB,inputEl.value)
    }
)