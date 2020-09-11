import * as admin from "firebase-admin";

import config from "@config/index";

// Initializing for Identify User
const defaultConfig = {
  credential: admin.credential.applicationDefault(),
  projectId: config.firebase.id,
};

admin.initializeApp(defaultConfig);

export default admin;
