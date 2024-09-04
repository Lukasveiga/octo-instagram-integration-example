import { InstagramRepository, UserInstagramInfo } from "./instagram-repository";
import "dotenv/config";

export class MockInstagramRepository implements InstagramRepository {

    async getUserInfo(userId: string): Promise<UserInstagramInfo> {
        const userInfo: UserInstagramInfo = {
            userId: process.env.USER_ID as string,
            igUserId: process.env.IG_USER_ID as string
        }
        return userInfo;
    }
    async saveUserInfo(account: UserInstagramInfo): Promise<void> {
        console.log("Mock saveUserInfo");
    }
}