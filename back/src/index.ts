import "reflect-metadata"
import { PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
.then(() => {
    console.log("Database connected");
    
    server.listen(PORT,() => {
        console.log("server listing on", PORT);

})
})
 
.catch((error) => console.log(error))

    




