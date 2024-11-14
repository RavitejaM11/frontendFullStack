let myLeads = []
const inputEl = document.getElementById("input-box")
const saveBtn = document.getElementById("save-btn")
const delBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

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

delBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveBtn.addEventListener("click", function() {
    if (inputEl.value) {
        myLeads.push(inputEl.value)        
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    }
})