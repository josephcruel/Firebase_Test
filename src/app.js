import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"


const db = getFirestore()
const dbRef = collection(db, "contacts")

//TODO - Add View

const leftCol = document.getElementById("left-col")
const backBtn = document.getElementById("back-btn")
const rightCol =document.getElementById("right-col")

backBtn.addEventListener('click', (e) => {
    leftCol.style.display = "block"
    rightCol.style.display = "none"
})

const toggleLeftAndRightViewOnMobile = () => {
    if(document.body.clientWidth <= 600) {
        leftCol.style.display = "none"
        rightCol.style.display = "block"
    }
}

//SECTION - Data


let contacts = []
const getContacts = async () => {
    try {
        /*onSnapshot() method. An initial call using the callback you provide creates a document snapshot 
         immediately with the current contents of the single document. Then, each time the contents change, 
         another call updates the document snapshot. */
        await onSnapshot(dbRef, (docsSnap) => {
            contacts = []

            docsSnap.forEach((doc) => {
                const contact = doc.data()
                contact.id = doc.id
                contacts.push(contact)

                showContact(contacts)
            }) 
        })
    } catch(err) {
        console.log(`Get Contacts ${err}`)
    }
}

getContacts()

//SECTION - display contacts as list item

const contactList = document.getElementById("contact-list")

const showContacts = (contact) => {
    contact.forEach((contact) => {
        const li = `
        <li class="contact-list-item" id="${contact.id}">
        <div class="media">
        <div class="letter">
        ${contact.firstname.charAt(0)} ${contact.lastname.charAt(0)}
        </div>
        </div>
        </li>
        `
    })
}