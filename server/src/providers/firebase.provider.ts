import * as admin from "firebase-admin";

import config from "@config/index";
import Logger from "@loaders/logger.loader";

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

export async function DelUser(uid: string) {
  return await admin
    .auth()
    .deleteUser(uid.split("Bearer ")[1])
    .then((res) => {
      Logger.info("response: ", res); 
      return res;
    })
    .catch(function (error) {
      Logger.info("Error deleting user:", error);
    });
}

export async function createFBToken(id: any, email: any, name: any) {
  const userId = `kakao:${id}`;
  await updateOrCreateUser(userId, email, name);
  return await admin.auth().createCustomToken(userId, { provider: "KAKAO" });
}

export async function updateOrCreateUser(
  userId: string,
  email: any,
  name: any
) {
  const updateParams = {
    provider: "KAKAO",
    displayName: name,
  };

  if (name) {
    updateParams["displayName"] = name;
  } else {
    updateParams["displayName"] = email;
  }

  try {
    return await admin.auth().updateUser(userId, updateParams);
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      updateParams["uid"] = userId;
      if (email) {
        updateParams["email"] = email;
      }
      return await admin.auth().createUser(updateParams);
    }
    throw error;
  }
}
