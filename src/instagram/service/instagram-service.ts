import { InstagramRepository } from "../repository/instagram-repository";
import axios from "axios";

export class InstagramService {
    private readonly BASE_GRAPH_URL = 'http://graph.facebook.com/v20.0'
    private readonly MEDIA_ENDPOINT = 'https://graph.facebook.com/v20.0/{ig-user-id}/media';
    private readonly MEDIA_PUBLISH_ENDPOINT = 'https://graph.facebook.com/v20.0/{ig-user-id}/media_publish';

    constructor(private readonly instagramRepository: InstagramRepository){}

    async saveBusinessAccount(accessToken: string): Promise<void> {
        try {
            const userInfo = await axios.post(
                this.BASE_GRAPH_URL + "/me?fields=id",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

            const userId = userInfo.data.id;

            const businessAccountInfo = await axios.post(
                this.BASE_GRAPH_URL + `/${userId}?fields=instagram_business_account`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

            const businessAccountId = businessAccountInfo.data.instagram_business_account.id;

            await this.instagramRepository.saveUserInfo({id: businessAccountId})
        } catch (error) {
            throw new Error(`Failed to save business account id}`);
        }
    }

    async publishPost(params: PublishPostParams): Promise<string> {
        try {
            const userInfo = await this.instagramRepository.getUserInfo(params.userId);
            const igUserId = userInfo.igUserId;

            const container = await axios.post(
                this.MEDIA_ENDPOINT.replace('{ig-user-id}', igUserId),
                {},
                {
                    params: {
                        image_url: params.imageUrl,
                        caption: params.caption
                    },
                    headers: {
                        Authorization: `Bearer ${params.accessToken}`
                    }
                }
            );

            const containerId = container.data.id;

            const publishContainer = await axios.post(
                this.MEDIA_PUBLISH_ENDPOINT.replace('{ig-user-id}', igUserId),
                {},
                {
                    params: {
                        creation_id: containerId
                    },
                    headers: {
                        Authorization: `Bearer ${params.accessToken}`
                    }
                }
            );

            return publishContainer.data.id;
        } catch (error) {
            throw new Error(`Failed to publish post for user ${params.userId}: ${(error as Error).message}`);
        }
    }
}

export interface PublishPostParams {
    userId: string, 
    imageUrl: string,
    accessToken: string,
    caption: string,
}