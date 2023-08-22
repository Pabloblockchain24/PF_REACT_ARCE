import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXkoEGKABBSig9-azlwD3pg7CnYUPTjhs",
  authDomain: "mitienda-ee424.firebaseapp.com",
  projectId: "mitienda-ee424",
  storageBucket: "mitienda-ee424.appspot.com",
  messagingSenderId: "744201127088",
  appId: "1:744201127088:web:093a6f95493052c03aa775"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
