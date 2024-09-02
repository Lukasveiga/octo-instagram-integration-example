export interface InstagramRepository {
    getUserInfo(userId: string): Promise<InstagramUserInfo>;
    saveUserInfo(account: InstagramBusinessAccount): Promise<void>;
}

export interface InstagramUserInfo {
    igUserId: string;
}

export interface InstagramBusinessAccount {
    id: string
}