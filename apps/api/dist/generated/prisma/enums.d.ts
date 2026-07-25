export declare const GitHubResource: {
    readonly commit: "commit";
    readonly issue: "issue";
    readonly prs: "prs";
    readonly runs: "runs";
    readonly notifications: "notifications";
};
export type GitHubResource = (typeof GitHubResource)[keyof typeof GitHubResource];
