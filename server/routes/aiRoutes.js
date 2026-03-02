import express from 'express'
import {auth} from "../middlewares/auth.js";
import { generateArticle, generateBlogTitle, generateImage,removeImageBackground,removeImageObject,resumeReview } from '../controllers/aiController.js';
import { upload } from '../middlewares/multer.js';
import { requirePremium } from '../middlewares/premium.js';


const aiRouter = express.Router();

aiRouter.post('/generate-article',auth,generateArticle);
aiRouter.post('/generate-blog-title',auth,generateBlogTitle);
aiRouter.post('/generate-image',auth,generateImage);
aiRouter.post('/remove-image-background',auth,requirePremium,upload.single('image'),auth,removeImageBackground);
aiRouter.post('/remove-image-object',auth,requirePremium,upload.single('image'),auth,removeImageObject);
aiRouter.post('/resume-review',auth,upload.single('resume'),auth,resumeReview);





export default aiRouter;
