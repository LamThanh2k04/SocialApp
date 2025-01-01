import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { commentPost, createPost, deletePost, getComments, getPost, getPosts, getUserPost, likePost, likePostComment, replyPostComment } from "../controllers/postController.js";

const router = express.Router();

// Create post
router.post("/create-post", userAuth, createPost);

// Get posts
router.post("/", userAuth, getPosts);
router.post("/:id", userAuth, getPost);

router.post("/get-user-post/:id", userAuth, getUserPost);

// Get comments
router.get("/comments/:postId", getComments);

//Like and comment on posts
router.post("/like/:id", userAuth, likePost);
router.post("/like-comment/:id/:rid?", userAuth, likePostComment);
router.post("/comment/:id", userAuth, commentPost);
router.post("/reply-comment/:id", userAuth, replyPostComment);

//Delete post
router.delete("/:id", userAuth, deletePost);

export default router;