import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA3bxwbQbEPsqgxs6_85PWgtN1saX1wzrY",
    authDomain: "up2data-aefb3.firebaseapp.com",
    databaseURL: "https://up2data-aefb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "up2data-aefb3",
    storageBucket: "up2data-aefb3.appspot.com",
    messagingSenderId: "1046196695207",
    appId: "1:1046196695207:web:5792d14c23855db6d0eb82",
    measurementId: "G-CM46XE0972"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export async function authStatus(obj = { check: false }) {
    const clientID = localStorage.getItem("clientID")
    const secretKey = localStorage.getItem("secretKey")
    return new Promise(function (resolve) {
        const database = ref(db, `clients/${clientID}`);
        onValue(database, (snapshot) => {
            const client = snapshot.val();
            if (client && client.secretKey.key == secretKey) {
                if(!obj.check){
                    localStorage.setItem("userName", client.fullName);
                    localStorage.setItem("userEmail", client.email);
                    localStorage.setItem("userCompany", client.company);
                    localStorage.setItem("userWebsite", client.website);
                    localStorage.setItem("userContacts", JSON.stringify(client.contacts));
                }
                resolve(true);
            } else {
                resolve(false);
            };
        });
    });
};

export async function update_database() {
    return new Promise(function (resolve) {
        const clientID = localStorage.getItem("clientID");
        const fullName = localStorage.getItem("userName");
        const email = localStorage.getItem("userEmail");
        const company = localStorage.getItem("userCompany");
        const website = localStorage.getItem("userWebsite");
        const contacts = JSON.parse(localStorage.getItem("clientContacts"));
        const checkBox = localStorage.getItem("checkBox");
        const sessionCookie = localStorage.getItem("sessionCookie");


        const client_db = ref(db, `clients/${clientID}`);
        console.log(contacts);
        onValue(client_db, async (snapshot) => {
            let client = snapshot.val();
            if (fullName) {
                client.fullName = fullName;
            };
            if (email) {
                console.log('----------');
                client.email = email;
            };
            if (company) {
                client.company = company;
            };
            if (website) {
                client.website = website;
            };
            if (contacts) {
                client.contacts = contacts;
                localStorage.removeItem("clientContacts")
            };
            if (checkBox) {
                client.checkBox = checkBox;
            };
            if (sessionCookie) {
                client.sessionCookie = sessionCookie;
            };


            client.status.onboarding = true;

            await set(client_db, client);
        });

        const email_client = ref(db, `email_client/onboarding`);
        onValue(email_client, async (snapshot) => {
            let obj = snapshot.val();
            obj[clientID] = { status: false, send: false, email:email, clientID:clientID }
            await set(email_client, obj);
        });

        const cookie = ref(db, `cookie`);
        onValue(cookie, async (snapshot) => {
            let obj = snapshot.val();
        
            obj[sessionCookie] = { cookie: sessionCookie, owner: clientID, timestamp: Date.now() }

            await set(cookie, obj);
        });
        resolve(true)

    });
};
