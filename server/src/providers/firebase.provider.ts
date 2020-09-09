import * as admin from "firebase-admin";

import config from "@config/index";

// Initializing for Identify User
const defaultConfig = {
  credential: admin.credential.applicationDefault(),
  projectId: config.firebase.id,
};

admin.initializeApp(defaultConfig);

export default admin;

// // idToken comes from client
// export const verify = (idToken: string) => {
//   const token = idToken.split("Bearer ")[1];

//   admin
//     .auth()
//     .verifyIdToken(token)
//     .then((decodedToken) => {
//       const uid = decodedToken.uid;
//       if (uid) {
//         console.log("**********", uid);
//         return uid;
//         // admin
//         //   .auth()
//         //   .getUser(uid)
//         //   .then((userRecord) => {
//         //     console.log("Successfully fetched user data:", userRecord);
//         //   });
//       } else {
//         console.error("Login Error");
//       }
//     })
//     .catch((error) => console.log("error", error));
// };
