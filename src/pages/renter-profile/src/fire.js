import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAcmNGIGBlkvNv2IDjRVMaCbGRqqJ-I4bs",
  authDomain: "renter-profile2.firebaseapp.com",
  databaseURL: "https://renter-profile2.firebaseio.com",
  projectId: "renter-profile2",
  storageBucket: "renter-profile2.appspot.com",
  messagingSenderId: "785235410446",
  appId: "1:785235410446:web:9d2feeec5e0da09ab2c65f",
  measurementId: "G-F39XCD07RN"
};

var fire = firebase.initializeApp(config);
export default fire;
