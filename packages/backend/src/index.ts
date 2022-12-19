import * as dotenv from "dotenv";
dotenv.config();
import app from './server';


// creates and starts a server for our API on a defined port
app.listen(5100, () => {
  console.log(`User app listening at http://localhost:${5100}`);
});