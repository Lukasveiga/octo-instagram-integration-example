import { MockInstagramRepository } from "./instagram/repository/mock-instagram-repository";
import { InstagramService } from "./instagram/service/instagram-service";
import "dotenv/config";

const instagramRepository = new MockInstagramRepository();
const instagramService = new InstagramService(instagramRepository);

(async ()=> {
    const access_token = process.env.ACCESS_TOKEN as string;
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7InLqguW0fqxHWhzZpdOfXoZd3yO2opGHHg&s"

    await instagramService.publishPost({
        userId: "user-id", 
        imageUrl: imageUrl, // must be in a public server
        accessToken: access_token,
        caption: "cat-hatt",
    })
})()

