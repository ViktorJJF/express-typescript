import mongoose from "mongoose";
import { mongodb } from "./keys";

mongoose.connect(mongodb.URI, { useNewUrlParser: true }).then(el);
