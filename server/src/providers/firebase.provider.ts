import * as admin from "firebase-admin";

import config from "@config/index";

// Initializing for Identify User
const defaultConfig = {
  credential: admin.credential.applicationDefault(),
  projectId: config.firebase.id,
};

admin.initializeApp(defaultConfig);

export async function Auth(token: string) {
  return await admin
    .auth()
    .verifyIdToken(token.split("Bearer ")[1])
    .then((decodedToken) => {
      return decodedToken.uid;
    });
}
