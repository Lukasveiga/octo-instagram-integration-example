export interface InstagramRepository {
    getUserInfo(userId: string): Promise<UserInstagramInfo>;
    saveUserInfo(account: UserInstagramInfo): Promise<void>;
}

export interface UserInstagramInfo {
    userId: string,
    igUserId: string,
}