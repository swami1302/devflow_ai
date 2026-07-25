import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    githubId: string | null;
    login: string | null;
    avatarUrl: string | null;
    accessTokenEnc: runtime.Bytes | null;
    tokenIv: runtime.Bytes | null;
    tokenRevoked: boolean | null;
    datetimeRevoked: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    githubId: string | null;
    login: string | null;
    avatarUrl: string | null;
    accessTokenEnc: runtime.Bytes | null;
    tokenIv: runtime.Bytes | null;
    tokenRevoked: boolean | null;
    datetimeRevoked: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    githubId: number;
    login: number;
    avatarUrl: number;
    accessTokenEnc: number;
    tokenIv: number;
    tokenRevoked: number;
    datetimeRevoked: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    githubId?: true;
    login?: true;
    avatarUrl?: true;
    accessTokenEnc?: true;
    tokenIv?: true;
    tokenRevoked?: true;
    datetimeRevoked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    githubId?: true;
    login?: true;
    avatarUrl?: true;
    accessTokenEnc?: true;
    tokenIv?: true;
    tokenRevoked?: true;
    datetimeRevoked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    githubId?: true;
    login?: true;
    avatarUrl?: true;
    accessTokenEnc?: true;
    tokenIv?: true;
    tokenRevoked?: true;
    datetimeRevoked?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked: boolean;
    datetimeRevoked: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    githubId?: Prisma.StringFilter<"User"> | string;
    login?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringFilter<"User"> | string;
    accessTokenEnc?: Prisma.BytesFilter<"User"> | runtime.Bytes;
    tokenIv?: Prisma.BytesFilter<"User"> | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFilter<"User"> | boolean;
    datetimeRevoked?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    trackedRepos?: Prisma.TrackedRepoListRelationFilter;
    briefs?: Prisma.BriefListRelationFilter;
    cacheRows?: Prisma.GithubCacheListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    login?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    accessTokenEnc?: Prisma.SortOrder;
    tokenIv?: Prisma.SortOrder;
    tokenRevoked?: Prisma.SortOrder;
    datetimeRevoked?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trackedRepos?: Prisma.TrackedRepoOrderByRelationAggregateInput;
    briefs?: Prisma.BriefOrderByRelationAggregateInput;
    cacheRows?: Prisma.GithubCacheOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    githubId?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    login?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringFilter<"User"> | string;
    accessTokenEnc?: Prisma.BytesFilter<"User"> | runtime.Bytes;
    tokenIv?: Prisma.BytesFilter<"User"> | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFilter<"User"> | boolean;
    datetimeRevoked?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    trackedRepos?: Prisma.TrackedRepoListRelationFilter;
    briefs?: Prisma.BriefListRelationFilter;
    cacheRows?: Prisma.GithubCacheListRelationFilter;
}, "id" | "githubId">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    login?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    accessTokenEnc?: Prisma.SortOrder;
    tokenIv?: Prisma.SortOrder;
    tokenRevoked?: Prisma.SortOrder;
    datetimeRevoked?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    githubId?: Prisma.StringWithAggregatesFilter<"User"> | string;
    login?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: Prisma.StringWithAggregatesFilter<"User"> | string;
    accessTokenEnc?: Prisma.BytesWithAggregatesFilter<"User"> | runtime.Bytes;
    tokenIv?: Prisma.BytesWithAggregatesFilter<"User"> | runtime.Bytes;
    tokenRevoked?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    datetimeRevoked?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoCreateNestedManyWithoutUserInput;
    briefs?: Prisma.BriefCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedCreateNestedManyWithoutUserInput;
    briefs?: Prisma.BriefUncheckedCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUpdateManyWithoutUserNestedInput;
    briefs?: Prisma.BriefUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedUpdateManyWithoutUserNestedInput;
    briefs?: Prisma.BriefUncheckedUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    login?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    accessTokenEnc?: Prisma.SortOrder;
    tokenIv?: Prisma.SortOrder;
    tokenRevoked?: Prisma.SortOrder;
    datetimeRevoked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    login?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    accessTokenEnc?: Prisma.SortOrder;
    tokenIv?: Prisma.SortOrder;
    tokenRevoked?: Prisma.SortOrder;
    datetimeRevoked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    login?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    accessTokenEnc?: Prisma.SortOrder;
    tokenIv?: Prisma.SortOrder;
    tokenRevoked?: Prisma.SortOrder;
    datetimeRevoked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BytesFieldUpdateOperationsInput = {
    set?: runtime.Bytes;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutTrackedReposInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTrackedReposInput, Prisma.UserUncheckedCreateWithoutTrackedReposInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTrackedReposInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTrackedReposNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTrackedReposInput, Prisma.UserUncheckedCreateWithoutTrackedReposInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTrackedReposInput;
    upsert?: Prisma.UserUpsertWithoutTrackedReposInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTrackedReposInput, Prisma.UserUpdateWithoutTrackedReposInput>, Prisma.UserUncheckedUpdateWithoutTrackedReposInput>;
};
export type UserCreateNestedOneWithoutCacheRowsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCacheRowsInput, Prisma.UserUncheckedCreateWithoutCacheRowsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCacheRowsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCacheRowsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCacheRowsInput, Prisma.UserUncheckedCreateWithoutCacheRowsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCacheRowsInput;
    upsert?: Prisma.UserUpsertWithoutCacheRowsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCacheRowsInput, Prisma.UserUpdateWithoutCacheRowsInput>, Prisma.UserUncheckedUpdateWithoutCacheRowsInput>;
};
export type UserCreateNestedOneWithoutBriefsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBriefsInput, Prisma.UserUncheckedCreateWithoutBriefsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBriefsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBriefsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBriefsInput, Prisma.UserUncheckedCreateWithoutBriefsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBriefsInput;
    upsert?: Prisma.UserUpsertWithoutBriefsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBriefsInput, Prisma.UserUpdateWithoutBriefsInput>, Prisma.UserUncheckedUpdateWithoutBriefsInput>;
};
export type UserCreateWithoutTrackedReposInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    briefs?: Prisma.BriefCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutTrackedReposInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    briefs?: Prisma.BriefUncheckedCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutTrackedReposInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTrackedReposInput, Prisma.UserUncheckedCreateWithoutTrackedReposInput>;
};
export type UserUpsertWithoutTrackedReposInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTrackedReposInput, Prisma.UserUncheckedUpdateWithoutTrackedReposInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTrackedReposInput, Prisma.UserUncheckedCreateWithoutTrackedReposInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTrackedReposInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTrackedReposInput, Prisma.UserUncheckedUpdateWithoutTrackedReposInput>;
};
export type UserUpdateWithoutTrackedReposInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefs?: Prisma.BriefUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTrackedReposInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefs?: Prisma.BriefUncheckedUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCacheRowsInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoCreateNestedManyWithoutUserInput;
    briefs?: Prisma.BriefCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCacheRowsInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedCreateNestedManyWithoutUserInput;
    briefs?: Prisma.BriefUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCacheRowsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCacheRowsInput, Prisma.UserUncheckedCreateWithoutCacheRowsInput>;
};
export type UserUpsertWithoutCacheRowsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCacheRowsInput, Prisma.UserUncheckedUpdateWithoutCacheRowsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCacheRowsInput, Prisma.UserUncheckedCreateWithoutCacheRowsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCacheRowsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCacheRowsInput, Prisma.UserUncheckedUpdateWithoutCacheRowsInput>;
};
export type UserUpdateWithoutCacheRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUpdateManyWithoutUserNestedInput;
    briefs?: Prisma.BriefUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCacheRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedUpdateManyWithoutUserNestedInput;
    briefs?: Prisma.BriefUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBriefsInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBriefsInput = {
    id?: string;
    githubId: string;
    login: string;
    avatarUrl: string;
    accessTokenEnc: runtime.Bytes;
    tokenIv: runtime.Bytes;
    tokenRevoked?: boolean;
    datetimeRevoked?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedCreateNestedManyWithoutUserInput;
    cacheRows?: Prisma.GithubCacheUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBriefsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBriefsInput, Prisma.UserUncheckedCreateWithoutBriefsInput>;
};
export type UserUpsertWithoutBriefsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBriefsInput, Prisma.UserUncheckedUpdateWithoutBriefsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBriefsInput, Prisma.UserUncheckedCreateWithoutBriefsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBriefsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBriefsInput, Prisma.UserUncheckedUpdateWithoutBriefsInput>;
};
export type UserUpdateWithoutBriefsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBriefsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    login?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    accessTokenEnc?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenIv?: Prisma.BytesFieldUpdateOperationsInput | runtime.Bytes;
    tokenRevoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    datetimeRevoked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trackedRepos?: Prisma.TrackedRepoUncheckedUpdateManyWithoutUserNestedInput;
    cacheRows?: Prisma.GithubCacheUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    trackedRepos: number;
    briefs: number;
    cacheRows: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trackedRepos?: boolean | UserCountOutputTypeCountTrackedReposArgs;
    briefs?: boolean | UserCountOutputTypeCountBriefsArgs;
    cacheRows?: boolean | UserCountOutputTypeCountCacheRowsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountTrackedReposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackedRepoWhereInput;
};
export type UserCountOutputTypeCountBriefsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefWhereInput;
};
export type UserCountOutputTypeCountCacheRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubCacheWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    login?: boolean;
    avatarUrl?: boolean;
    accessTokenEnc?: boolean;
    tokenIv?: boolean;
    tokenRevoked?: boolean;
    datetimeRevoked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trackedRepos?: boolean | Prisma.User$trackedReposArgs<ExtArgs>;
    briefs?: boolean | Prisma.User$briefsArgs<ExtArgs>;
    cacheRows?: boolean | Prisma.User$cacheRowsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    login?: boolean;
    avatarUrl?: boolean;
    accessTokenEnc?: boolean;
    tokenIv?: boolean;
    tokenRevoked?: boolean;
    datetimeRevoked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    login?: boolean;
    avatarUrl?: boolean;
    accessTokenEnc?: boolean;
    tokenIv?: boolean;
    tokenRevoked?: boolean;
    datetimeRevoked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    githubId?: boolean;
    login?: boolean;
    avatarUrl?: boolean;
    accessTokenEnc?: boolean;
    tokenIv?: boolean;
    tokenRevoked?: boolean;
    datetimeRevoked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "githubId" | "login" | "avatarUrl" | "accessTokenEnc" | "tokenIv" | "tokenRevoked" | "datetimeRevoked" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trackedRepos?: boolean | Prisma.User$trackedReposArgs<ExtArgs>;
    briefs?: boolean | Prisma.User$briefsArgs<ExtArgs>;
    cacheRows?: boolean | Prisma.User$cacheRowsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        trackedRepos: Prisma.$TrackedRepoPayload<ExtArgs>[];
        briefs: Prisma.$BriefPayload<ExtArgs>[];
        cacheRows: Prisma.$GithubCachePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        githubId: string;
        login: string;
        avatarUrl: string;
        accessTokenEnc: runtime.Bytes;
        tokenIv: runtime.Bytes;
        tokenRevoked: boolean;
        datetimeRevoked: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trackedRepos<T extends Prisma.User$trackedReposArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$trackedReposArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    briefs<T extends Prisma.User$briefsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$briefsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cacheRows<T extends Prisma.User$cacheRowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cacheRowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly githubId: Prisma.FieldRef<"User", 'String'>;
    readonly login: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly accessTokenEnc: Prisma.FieldRef<"User", 'Bytes'>;
    readonly tokenIv: Prisma.FieldRef<"User", 'Bytes'>;
    readonly tokenRevoked: Prisma.FieldRef<"User", 'Boolean'>;
    readonly datetimeRevoked: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$trackedReposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    where?: Prisma.TrackedRepoWhereInput;
    orderBy?: Prisma.TrackedRepoOrderByWithRelationInput | Prisma.TrackedRepoOrderByWithRelationInput[];
    cursor?: Prisma.TrackedRepoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrackedRepoScalarFieldEnum | Prisma.TrackedRepoScalarFieldEnum[];
};
export type User$briefsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    where?: Prisma.BriefWhereInput;
    orderBy?: Prisma.BriefOrderByWithRelationInput | Prisma.BriefOrderByWithRelationInput[];
    cursor?: Prisma.BriefWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefScalarFieldEnum | Prisma.BriefScalarFieldEnum[];
};
export type User$cacheRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    where?: Prisma.GithubCacheWhereInput;
    orderBy?: Prisma.GithubCacheOrderByWithRelationInput | Prisma.GithubCacheOrderByWithRelationInput[];
    cursor?: Prisma.GithubCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GithubCacheScalarFieldEnum | Prisma.GithubCacheScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
