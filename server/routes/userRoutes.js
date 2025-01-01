import express from 'express';
import path from 'path';
import { acceptRequest, friendRequest, getFriendRequest, getUser, profileViews, suggestedFriends, updateUser, verifyEmail } from '../controllers/userController.js';
import userAuth from '../middleware/authMiddleware.js';

const router = express.Router();
const __dirname = path.resolve(path.dirname(""));

router.get("/verify/:userId/:token", verifyEmail);

// User routes
router.post("/get-user/:id?", userAuth, getUser);
router.put("/update-user", userAuth, updateUser);

// Friend request
router.post("/friend-request", userAuth, friendRequest);
router.post("/get-friend-request", userAuth, getFriendRequest);

// Accept / deny friend request
router.post("/accept-request", userAuth, acceptRequest);

// View profile
router.post("/profile-view", userAuth, profileViews);

//Suggested friends
router.post("/suggested-friends", userAuth, suggestedFriends);


router.get("/verified", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/build", "index.html"));
});




export default router;
