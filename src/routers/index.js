import { Router } from "express";

import opportunity from "../controllers/opportunity.js";

const app = Router();

app.get("/opportunities", opportunity.get)


export default app;