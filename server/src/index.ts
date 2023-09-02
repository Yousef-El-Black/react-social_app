import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { PORT } from "./config";
import connectDB from "./utils/connectDB.util";
import apiRoutes from "./routes";
import cors from "cors";
import multer from "multer";
import path from "path";

const app: Application = express();

const port = PORT || 5000;

// Connect to Database
connectDB();

// Middlewares
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(morgan("common"));
app.use(cors());

// Upload Route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}` + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

app.post("/api/upload", upload.single("file"), function (req: any, res) {
  res.status(200).json({ message: "Uploaded!", filename: req.file.filename });
});

// Images Route
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Api Route
app.use("/api", apiRoutes);

// Main Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Homepage" + __dirname);
});

// Listen to the Server
app.listen(port, () => {
  console.log(
    `Server is Running on Port: ${port} \n this's link: http://localhost:${port}/`
  );
});
