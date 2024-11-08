import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes, } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCt5PWrAjcWFtV1nIiPf3w1FR-qfJyyf5k",
  authDomain: "final-b121f.firebaseapp.com",
  projectId: "final-b121f",
  storageBucket: "final-b121f.appspot.com",
  messagingSenderId: "256691411883",
  appId: "1:256691411883:web:f43a626f951d2f6d26d0ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function signUp(userInfo) {
  const { email, password, age, name } = userInfo
  await createUserWithEmailAndPassword(auth, email, password)
  return addDoc(collection(db, "Users"), { email, name, age });
}
function Login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
async function addProduct(product) {
  const { title, description, price, image, rating } = product
  const storageRef = ref(storage, 'products/' + image.name);
  await uploadBytes(storageRef, image)
  const imageUrl = await getDownloadURL(storageRef)
  return addDoc(collection(db, "products"), { title, description, rating, price, image: imageUrl });
}
async function productImage() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      products.push(data);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

export const fireSingleProduct = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const docSnap = await getDoc(productRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

function logout(email, password) {
  signOut(auth, email, password)
}


export { signUp, Login, addProduct, onAuthStateChanged, auth, productImage, logout }