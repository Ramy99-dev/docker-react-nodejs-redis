import { createClient } from "redis";

let  client = null;
(async () => {
   client = createClient();
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();
  
  
  })();
  export default client ;

  