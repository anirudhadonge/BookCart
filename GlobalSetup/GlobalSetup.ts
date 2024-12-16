import * as dotenv from 'dotenv'

/**
 * This ia global setup function which set the environment file.
 */
export default function SetEnvironment(){
         dotenv.config({
             path:"./.env",
             override:true
         });
}
