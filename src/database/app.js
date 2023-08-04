import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, off } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA_nZ7OUO6YcfzqQ6ckJ6R9dmBT9yJfN8U",
    authDomain: "up2data-v2.firebaseapp.com",
    databaseURL: "https://up2data-v2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "up2data-v2",
    storageBucket: "up2data-v2.appspot.com",
    messagingSenderId: "14946440071",
    appId: "1:14946440071:web:25ba0469487c76d293f922",
    measurementId: "G-GT24X74TBH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function client_profil() {
    const clientID = localStorage.getItem("clientID");
    const profile = await getData(`client/cli-${clientID}/company`);
    localStorage.setItem('profil', JSON.stringify(profile))
};

export async function getList(listType) {
    const clientID = localStorage.getItem("clientID");
    const list = await getData(`client/cli-${clientID}/list/${listType}`)
    return list

    // const profile = (JSON.parse(localStorage.getItem("profil"))).list[type];

    // if (id) {
    //     return profile[id];
    // }
    // return profile;
}

async function getData(refLink) {
    return new Promise(function (resolve) {
        const database = ref(db, refLink);
        onValue(database, (snapshot) => {
            const data = snapshot.val();
            resolve(data)
        });
    });
}

export async function secretKey_validation() {
    const clientID = localStorage.getItem("clientID");
    const secretKey = localStorage.getItem("secretKey");
    const secret = await getData(`client/cli-${clientID}/secret`)
    if (secret.status) {
        return true;
    };
    return false;

};



export async function authStatus(obj = { check: false }) {
    const clientID = localStorage.getItem("clientID")
    const secretKey = localStorage.getItem("secretKey")
    return new Promise(function (resolve) {
        const database = ref(db, `client/cli-${clientID}`);
        onValue(database, (snapshot) => {
            const client = snapshot.val();
            if (client && client.secret.key == secretKey) {
                if (!obj.check) {
                    localStorage.setItem("client", client.id);
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
            obj[clientID] = { status: false, send: false, email: email, clientID: clientID }
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
