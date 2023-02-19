import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export default mongoose.connect(
  "mongodb+srv://suraj:suraj_123@cluster0.xkpv7hf.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("connected to database successfully,");
});

mongoose.connection.on("error", (err) => {
  console.log("Error while connection to database:" + err);
});

mongoose.connection.on("disconnected", (err) => {
  console.log("Mongodb connection disconnected");
});
