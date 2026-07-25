import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Repo: "Repo";
    readonly TrackedRepo: "TrackedRepo";
    readonly GithubCache: "GithubCache";
    readonly Brief: "Brief";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly githubId: "githubId";
    readonly login: "login";
    readonly avatarUrl: "avatarUrl";
    readonly accessTokenEnc: "accessTokenEnc";
    readonly tokenIv: "tokenIv";
    readonly tokenRevoked: "tokenRevoked";
    readonly datetimeRevoked: "datetimeRevoked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RepoScalarFieldEnum: {
    readonly id: "id";
    readonly githubId: "githubId";
    readonly fullName: "fullName";
    readonly private: "private";
    readonly defaultBranch: "defaultBranch";
};
export type RepoScalarFieldEnum = (typeof RepoScalarFieldEnum)[keyof typeof RepoScalarFieldEnum];
export declare const TrackedRepoScalarFieldEnum: {
    readonly userId: "userId";
    readonly repoId: "repoId";
    readonly addedAt: "addedAt";
};
export type TrackedRepoScalarFieldEnum = (typeof TrackedRepoScalarFieldEnum)[keyof typeof TrackedRepoScalarFieldEnum];
export declare const GithubCacheScalarFieldEnum: {
    readonly id: "id";
    readonly repoId: "repoId";
    readonly userId: "userId";
    readonly resource: "resource";
    readonly etag: "etag";
    readonly payload: "payload";
    readonly fetchedAt: "fetchedAt";
    readonly expiresAt: "expiresAt";
};
export type GithubCacheScalarFieldEnum = (typeof GithubCacheScalarFieldEnum)[keyof typeof GithubCacheScalarFieldEnum];
export declare const BriefScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly windowStart: "windowStart";
    readonly windowEnd: "windowEnd";
    readonly content: "content";
    readonly model: "model";
    readonly generatedAt: "generatedAt";
};
export type BriefScalarFieldEnum = (typeof BriefScalarFieldEnum)[keyof typeof BriefScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
