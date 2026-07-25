import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GithubCacheModel = runtime.Types.Result.DefaultSelection<Prisma.$GithubCachePayload>;
export type AggregateGithubCache = {
    _count: GithubCacheCountAggregateOutputType | null;
    _min: GithubCacheMinAggregateOutputType | null;
    _max: GithubCacheMaxAggregateOutputType | null;
};
export type GithubCacheMinAggregateOutputType = {
    id: string | null;
    repoId: string | null;
    userId: string | null;
    resource: $Enums.GitHubResource | null;
    etag: string | null;
    fetchedAt: Date | null;
    expiresAt: Date | null;
};
export type GithubCacheMaxAggregateOutputType = {
    id: string | null;
    repoId: string | null;
    userId: string | null;
    resource: $Enums.GitHubResource | null;
    etag: string | null;
    fetchedAt: Date | null;
    expiresAt: Date | null;
};
export type GithubCacheCountAggregateOutputType = {
    id: number;
    repoId: number;
    userId: number;
    resource: number;
    etag: number;
    payload: number;
    fetchedAt: number;
    expiresAt: number;
    _all: number;
};
export type GithubCacheMinAggregateInputType = {
    id?: true;
    repoId?: true;
    userId?: true;
    resource?: true;
    etag?: true;
    fetchedAt?: true;
    expiresAt?: true;
};
export type GithubCacheMaxAggregateInputType = {
    id?: true;
    repoId?: true;
    userId?: true;
    resource?: true;
    etag?: true;
    fetchedAt?: true;
    expiresAt?: true;
};
export type GithubCacheCountAggregateInputType = {
    id?: true;
    repoId?: true;
    userId?: true;
    resource?: true;
    etag?: true;
    payload?: true;
    fetchedAt?: true;
    expiresAt?: true;
    _all?: true;
};
export type GithubCacheAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubCacheWhereInput;
    orderBy?: Prisma.GithubCacheOrderByWithRelationInput | Prisma.GithubCacheOrderByWithRelationInput[];
    cursor?: Prisma.GithubCacheWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GithubCacheCountAggregateInputType;
    _min?: GithubCacheMinAggregateInputType;
    _max?: GithubCacheMaxAggregateInputType;
};
export type GetGithubCacheAggregateType<T extends GithubCacheAggregateArgs> = {
    [P in keyof T & keyof AggregateGithubCache]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGithubCache[P]> : Prisma.GetScalarType<T[P], AggregateGithubCache[P]>;
};
export type GithubCacheGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubCacheWhereInput;
    orderBy?: Prisma.GithubCacheOrderByWithAggregationInput | Prisma.GithubCacheOrderByWithAggregationInput[];
    by: Prisma.GithubCacheScalarFieldEnum[] | Prisma.GithubCacheScalarFieldEnum;
    having?: Prisma.GithubCacheScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GithubCacheCountAggregateInputType | true;
    _min?: GithubCacheMinAggregateInputType;
    _max?: GithubCacheMaxAggregateInputType;
};
export type GithubCacheGroupByOutputType = {
    id: string;
    repoId: string | null;
    userId: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: runtime.JsonValue;
    fetchedAt: Date;
    expiresAt: Date | null;
    _count: GithubCacheCountAggregateOutputType | null;
    _min: GithubCacheMinAggregateOutputType | null;
    _max: GithubCacheMaxAggregateOutputType | null;
};
export type GetGithubCacheGroupByPayload<T extends GithubCacheGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GithubCacheGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GithubCacheGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GithubCacheGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GithubCacheGroupByOutputType[P]>;
}>>;
export type GithubCacheWhereInput = {
    AND?: Prisma.GithubCacheWhereInput | Prisma.GithubCacheWhereInput[];
    OR?: Prisma.GithubCacheWhereInput[];
    NOT?: Prisma.GithubCacheWhereInput | Prisma.GithubCacheWhereInput[];
    id?: Prisma.StringFilter<"GithubCache"> | string;
    repoId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    userId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    resource?: Prisma.EnumGitHubResourceFilter<"GithubCache"> | $Enums.GitHubResource;
    etag?: Prisma.StringFilter<"GithubCache"> | string;
    payload?: Prisma.JsonFilter<"GithubCache">;
    fetchedAt?: Prisma.DateTimeFilter<"GithubCache"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"GithubCache"> | Date | string | null;
    repo?: Prisma.XOR<Prisma.RepoNullableScalarRelationFilter, Prisma.RepoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type GithubCacheOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    repoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    etag?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    repo?: Prisma.RepoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type GithubCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_repoId_resource?: Prisma.GithubCacheUserIdRepoIdResourceCompoundUniqueInput;
    AND?: Prisma.GithubCacheWhereInput | Prisma.GithubCacheWhereInput[];
    OR?: Prisma.GithubCacheWhereInput[];
    NOT?: Prisma.GithubCacheWhereInput | Prisma.GithubCacheWhereInput[];
    repoId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    userId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    resource?: Prisma.EnumGitHubResourceFilter<"GithubCache"> | $Enums.GitHubResource;
    etag?: Prisma.StringFilter<"GithubCache"> | string;
    payload?: Prisma.JsonFilter<"GithubCache">;
    fetchedAt?: Prisma.DateTimeFilter<"GithubCache"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"GithubCache"> | Date | string | null;
    repo?: Prisma.XOR<Prisma.RepoNullableScalarRelationFilter, Prisma.RepoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "userId_repoId_resource">;
export type GithubCacheOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    repoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    etag?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.GithubCacheCountOrderByAggregateInput;
    _max?: Prisma.GithubCacheMaxOrderByAggregateInput;
    _min?: Prisma.GithubCacheMinOrderByAggregateInput;
};
export type GithubCacheScalarWhereWithAggregatesInput = {
    AND?: Prisma.GithubCacheScalarWhereWithAggregatesInput | Prisma.GithubCacheScalarWhereWithAggregatesInput[];
    OR?: Prisma.GithubCacheScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GithubCacheScalarWhereWithAggregatesInput | Prisma.GithubCacheScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GithubCache"> | string;
    repoId?: Prisma.StringNullableWithAggregatesFilter<"GithubCache"> | string | null;
    userId?: Prisma.StringNullableWithAggregatesFilter<"GithubCache"> | string | null;
    resource?: Prisma.EnumGitHubResourceWithAggregatesFilter<"GithubCache"> | $Enums.GitHubResource;
    etag?: Prisma.StringWithAggregatesFilter<"GithubCache"> | string;
    payload?: Prisma.JsonWithAggregatesFilter<"GithubCache">;
    fetchedAt?: Prisma.DateTimeWithAggregatesFilter<"GithubCache"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"GithubCache"> | Date | string | null;
};
export type GithubCacheCreateInput = {
    id?: string;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
    repo?: Prisma.RepoCreateNestedOneWithoutCachesInput;
    user?: Prisma.UserCreateNestedOneWithoutCacheRowsInput;
};
export type GithubCacheUncheckedCreateInput = {
    id?: string;
    repoId?: string | null;
    userId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repo?: Prisma.RepoUpdateOneWithoutCachesNestedInput;
    user?: Prisma.UserUpdateOneWithoutCacheRowsNestedInput;
};
export type GithubCacheUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheCreateManyInput = {
    id?: string;
    repoId?: string | null;
    userId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheListRelationFilter = {
    every?: Prisma.GithubCacheWhereInput;
    some?: Prisma.GithubCacheWhereInput;
    none?: Prisma.GithubCacheWhereInput;
};
export type GithubCacheOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GithubCacheUserIdRepoIdResourceCompoundUniqueInput = {
    userId: string;
    repoId: string;
    resource: $Enums.GitHubResource;
};
export type GithubCacheCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    etag?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type GithubCacheMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    etag?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type GithubCacheMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    resource?: Prisma.SortOrder;
    etag?: Prisma.SortOrder;
    fetchedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type GithubCacheCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput> | Prisma.GithubCacheCreateWithoutUserInput[] | Prisma.GithubCacheUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutUserInput | Prisma.GithubCacheCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GithubCacheCreateManyUserInputEnvelope;
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
};
export type GithubCacheUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput> | Prisma.GithubCacheCreateWithoutUserInput[] | Prisma.GithubCacheUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutUserInput | Prisma.GithubCacheCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GithubCacheCreateManyUserInputEnvelope;
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
};
export type GithubCacheUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput> | Prisma.GithubCacheCreateWithoutUserInput[] | Prisma.GithubCacheUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutUserInput | Prisma.GithubCacheCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GithubCacheUpsertWithWhereUniqueWithoutUserInput | Prisma.GithubCacheUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GithubCacheCreateManyUserInputEnvelope;
    set?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    disconnect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    delete?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    update?: Prisma.GithubCacheUpdateWithWhereUniqueWithoutUserInput | Prisma.GithubCacheUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GithubCacheUpdateManyWithWhereWithoutUserInput | Prisma.GithubCacheUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
};
export type GithubCacheUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput> | Prisma.GithubCacheCreateWithoutUserInput[] | Prisma.GithubCacheUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutUserInput | Prisma.GithubCacheCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GithubCacheUpsertWithWhereUniqueWithoutUserInput | Prisma.GithubCacheUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GithubCacheCreateManyUserInputEnvelope;
    set?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    disconnect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    delete?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    update?: Prisma.GithubCacheUpdateWithWhereUniqueWithoutUserInput | Prisma.GithubCacheUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GithubCacheUpdateManyWithWhereWithoutUserInput | Prisma.GithubCacheUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
};
export type GithubCacheCreateNestedManyWithoutRepoInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput> | Prisma.GithubCacheCreateWithoutRepoInput[] | Prisma.GithubCacheUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutRepoInput | Prisma.GithubCacheCreateOrConnectWithoutRepoInput[];
    createMany?: Prisma.GithubCacheCreateManyRepoInputEnvelope;
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
};
export type GithubCacheUncheckedCreateNestedManyWithoutRepoInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput> | Prisma.GithubCacheCreateWithoutRepoInput[] | Prisma.GithubCacheUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutRepoInput | Prisma.GithubCacheCreateOrConnectWithoutRepoInput[];
    createMany?: Prisma.GithubCacheCreateManyRepoInputEnvelope;
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
};
export type GithubCacheUpdateManyWithoutRepoNestedInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput> | Prisma.GithubCacheCreateWithoutRepoInput[] | Prisma.GithubCacheUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutRepoInput | Prisma.GithubCacheCreateOrConnectWithoutRepoInput[];
    upsert?: Prisma.GithubCacheUpsertWithWhereUniqueWithoutRepoInput | Prisma.GithubCacheUpsertWithWhereUniqueWithoutRepoInput[];
    createMany?: Prisma.GithubCacheCreateManyRepoInputEnvelope;
    set?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    disconnect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    delete?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    update?: Prisma.GithubCacheUpdateWithWhereUniqueWithoutRepoInput | Prisma.GithubCacheUpdateWithWhereUniqueWithoutRepoInput[];
    updateMany?: Prisma.GithubCacheUpdateManyWithWhereWithoutRepoInput | Prisma.GithubCacheUpdateManyWithWhereWithoutRepoInput[];
    deleteMany?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
};
export type GithubCacheUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput> | Prisma.GithubCacheCreateWithoutRepoInput[] | Prisma.GithubCacheUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.GithubCacheCreateOrConnectWithoutRepoInput | Prisma.GithubCacheCreateOrConnectWithoutRepoInput[];
    upsert?: Prisma.GithubCacheUpsertWithWhereUniqueWithoutRepoInput | Prisma.GithubCacheUpsertWithWhereUniqueWithoutRepoInput[];
    createMany?: Prisma.GithubCacheCreateManyRepoInputEnvelope;
    set?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    disconnect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    delete?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    connect?: Prisma.GithubCacheWhereUniqueInput | Prisma.GithubCacheWhereUniqueInput[];
    update?: Prisma.GithubCacheUpdateWithWhereUniqueWithoutRepoInput | Prisma.GithubCacheUpdateWithWhereUniqueWithoutRepoInput[];
    updateMany?: Prisma.GithubCacheUpdateManyWithWhereWithoutRepoInput | Prisma.GithubCacheUpdateManyWithWhereWithoutRepoInput[];
    deleteMany?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
};
export type EnumGitHubResourceFieldUpdateOperationsInput = {
    set?: $Enums.GitHubResource;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type GithubCacheCreateWithoutUserInput = {
    id?: string;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
    repo?: Prisma.RepoCreateNestedOneWithoutCachesInput;
};
export type GithubCacheUncheckedCreateWithoutUserInput = {
    id?: string;
    repoId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheCreateOrConnectWithoutUserInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    create: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput>;
};
export type GithubCacheCreateManyUserInputEnvelope = {
    data: Prisma.GithubCacheCreateManyUserInput | Prisma.GithubCacheCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type GithubCacheUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    update: Prisma.XOR<Prisma.GithubCacheUpdateWithoutUserInput, Prisma.GithubCacheUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GithubCacheCreateWithoutUserInput, Prisma.GithubCacheUncheckedCreateWithoutUserInput>;
};
export type GithubCacheUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    data: Prisma.XOR<Prisma.GithubCacheUpdateWithoutUserInput, Prisma.GithubCacheUncheckedUpdateWithoutUserInput>;
};
export type GithubCacheUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GithubCacheScalarWhereInput;
    data: Prisma.XOR<Prisma.GithubCacheUpdateManyMutationInput, Prisma.GithubCacheUncheckedUpdateManyWithoutUserInput>;
};
export type GithubCacheScalarWhereInput = {
    AND?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
    OR?: Prisma.GithubCacheScalarWhereInput[];
    NOT?: Prisma.GithubCacheScalarWhereInput | Prisma.GithubCacheScalarWhereInput[];
    id?: Prisma.StringFilter<"GithubCache"> | string;
    repoId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    userId?: Prisma.StringNullableFilter<"GithubCache"> | string | null;
    resource?: Prisma.EnumGitHubResourceFilter<"GithubCache"> | $Enums.GitHubResource;
    etag?: Prisma.StringFilter<"GithubCache"> | string;
    payload?: Prisma.JsonFilter<"GithubCache">;
    fetchedAt?: Prisma.DateTimeFilter<"GithubCache"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"GithubCache"> | Date | string | null;
};
export type GithubCacheCreateWithoutRepoInput = {
    id?: string;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
    user?: Prisma.UserCreateNestedOneWithoutCacheRowsInput;
};
export type GithubCacheUncheckedCreateWithoutRepoInput = {
    id?: string;
    userId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheCreateOrConnectWithoutRepoInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    create: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput>;
};
export type GithubCacheCreateManyRepoInputEnvelope = {
    data: Prisma.GithubCacheCreateManyRepoInput | Prisma.GithubCacheCreateManyRepoInput[];
    skipDuplicates?: boolean;
};
export type GithubCacheUpsertWithWhereUniqueWithoutRepoInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    update: Prisma.XOR<Prisma.GithubCacheUpdateWithoutRepoInput, Prisma.GithubCacheUncheckedUpdateWithoutRepoInput>;
    create: Prisma.XOR<Prisma.GithubCacheCreateWithoutRepoInput, Prisma.GithubCacheUncheckedCreateWithoutRepoInput>;
};
export type GithubCacheUpdateWithWhereUniqueWithoutRepoInput = {
    where: Prisma.GithubCacheWhereUniqueInput;
    data: Prisma.XOR<Prisma.GithubCacheUpdateWithoutRepoInput, Prisma.GithubCacheUncheckedUpdateWithoutRepoInput>;
};
export type GithubCacheUpdateManyWithWhereWithoutRepoInput = {
    where: Prisma.GithubCacheScalarWhereInput;
    data: Prisma.XOR<Prisma.GithubCacheUpdateManyMutationInput, Prisma.GithubCacheUncheckedUpdateManyWithoutRepoInput>;
};
export type GithubCacheCreateManyUserInput = {
    id?: string;
    repoId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    repo?: Prisma.RepoUpdateOneWithoutCachesNestedInput;
};
export type GithubCacheUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheCreateManyRepoInput = {
    id?: string;
    userId?: string | null;
    resource: $Enums.GitHubResource;
    etag: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type GithubCacheUpdateWithoutRepoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneWithoutCacheRowsNestedInput;
};
export type GithubCacheUncheckedUpdateWithoutRepoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheUncheckedUpdateManyWithoutRepoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resource?: Prisma.EnumGitHubResourceFieldUpdateOperationsInput | $Enums.GitHubResource;
    etag?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    fetchedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type GithubCacheSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repoId?: boolean;
    userId?: boolean;
    resource?: boolean;
    etag?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
    expiresAt?: boolean;
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
}, ExtArgs["result"]["githubCache"]>;
export type GithubCacheSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repoId?: boolean;
    userId?: boolean;
    resource?: boolean;
    etag?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
    expiresAt?: boolean;
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
}, ExtArgs["result"]["githubCache"]>;
export type GithubCacheSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repoId?: boolean;
    userId?: boolean;
    resource?: boolean;
    etag?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
    expiresAt?: boolean;
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
}, ExtArgs["result"]["githubCache"]>;
export type GithubCacheSelectScalar = {
    id?: boolean;
    repoId?: boolean;
    userId?: boolean;
    resource?: boolean;
    etag?: boolean;
    payload?: boolean;
    fetchedAt?: boolean;
    expiresAt?: boolean;
};
export type GithubCacheOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "repoId" | "userId" | "resource" | "etag" | "payload" | "fetchedAt" | "expiresAt", ExtArgs["result"]["githubCache"]>;
export type GithubCacheInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
};
export type GithubCacheIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
};
export type GithubCacheIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    repo?: boolean | Prisma.GithubCache$repoArgs<ExtArgs>;
    user?: boolean | Prisma.GithubCache$userArgs<ExtArgs>;
};
export type $GithubCachePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GithubCache";
    objects: {
        repo: Prisma.$RepoPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        repoId: string | null;
        userId: string | null;
        resource: $Enums.GitHubResource;
        etag: string;
        payload: runtime.JsonValue;
        fetchedAt: Date;
        expiresAt: Date | null;
    }, ExtArgs["result"]["githubCache"]>;
    composites: {};
};
export type GithubCacheGetPayload<S extends boolean | null | undefined | GithubCacheDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GithubCachePayload, S>;
export type GithubCacheCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GithubCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GithubCacheCountAggregateInputType | true;
};
export interface GithubCacheDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GithubCache'];
        meta: {
            name: 'GithubCache';
        };
    };
    findUnique<T extends GithubCacheFindUniqueArgs>(args: Prisma.SelectSubset<T, GithubCacheFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GithubCacheFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GithubCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GithubCacheFindFirstArgs>(args?: Prisma.SelectSubset<T, GithubCacheFindFirstArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GithubCacheFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GithubCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GithubCacheFindManyArgs>(args?: Prisma.SelectSubset<T, GithubCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GithubCacheCreateArgs>(args: Prisma.SelectSubset<T, GithubCacheCreateArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GithubCacheCreateManyArgs>(args?: Prisma.SelectSubset<T, GithubCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GithubCacheCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GithubCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GithubCacheDeleteArgs>(args: Prisma.SelectSubset<T, GithubCacheDeleteArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GithubCacheUpdateArgs>(args: Prisma.SelectSubset<T, GithubCacheUpdateArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GithubCacheDeleteManyArgs>(args?: Prisma.SelectSubset<T, GithubCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GithubCacheUpdateManyArgs>(args: Prisma.SelectSubset<T, GithubCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GithubCacheUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GithubCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GithubCacheUpsertArgs>(args: Prisma.SelectSubset<T, GithubCacheUpsertArgs<ExtArgs>>): Prisma.Prisma__GithubCacheClient<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GithubCacheCountArgs>(args?: Prisma.Subset<T, GithubCacheCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GithubCacheCountAggregateOutputType> : number>;
    aggregate<T extends GithubCacheAggregateArgs>(args: Prisma.Subset<T, GithubCacheAggregateArgs>): Prisma.PrismaPromise<GetGithubCacheAggregateType<T>>;
    groupBy<T extends GithubCacheGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GithubCacheGroupByArgs['orderBy'];
    } : {
        orderBy?: GithubCacheGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GithubCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GithubCacheFieldRefs;
}
export interface Prisma__GithubCacheClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    repo<T extends Prisma.GithubCache$repoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GithubCache$repoArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.GithubCache$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GithubCache$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GithubCacheFieldRefs {
    readonly id: Prisma.FieldRef<"GithubCache", 'String'>;
    readonly repoId: Prisma.FieldRef<"GithubCache", 'String'>;
    readonly userId: Prisma.FieldRef<"GithubCache", 'String'>;
    readonly resource: Prisma.FieldRef<"GithubCache", 'GitHubResource'>;
    readonly etag: Prisma.FieldRef<"GithubCache", 'String'>;
    readonly payload: Prisma.FieldRef<"GithubCache", 'Json'>;
    readonly fetchedAt: Prisma.FieldRef<"GithubCache", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"GithubCache", 'DateTime'>;
}
export type GithubCacheFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    where: Prisma.GithubCacheWhereUniqueInput;
};
export type GithubCacheFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    where: Prisma.GithubCacheWhereUniqueInput;
};
export type GithubCacheFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GithubCacheFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GithubCacheFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GithubCacheCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GithubCacheCreateInput, Prisma.GithubCacheUncheckedCreateInput>;
};
export type GithubCacheCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GithubCacheCreateManyInput | Prisma.GithubCacheCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GithubCacheCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    data: Prisma.GithubCacheCreateManyInput | Prisma.GithubCacheCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GithubCacheIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GithubCacheUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GithubCacheUpdateInput, Prisma.GithubCacheUncheckedUpdateInput>;
    where: Prisma.GithubCacheWhereUniqueInput;
};
export type GithubCacheUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GithubCacheUpdateManyMutationInput, Prisma.GithubCacheUncheckedUpdateManyInput>;
    where?: Prisma.GithubCacheWhereInput;
    limit?: number;
};
export type GithubCacheUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GithubCacheUpdateManyMutationInput, Prisma.GithubCacheUncheckedUpdateManyInput>;
    where?: Prisma.GithubCacheWhereInput;
    limit?: number;
    include?: Prisma.GithubCacheIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GithubCacheUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    where: Prisma.GithubCacheWhereUniqueInput;
    create: Prisma.XOR<Prisma.GithubCacheCreateInput, Prisma.GithubCacheUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GithubCacheUpdateInput, Prisma.GithubCacheUncheckedUpdateInput>;
};
export type GithubCacheDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
    where: Prisma.GithubCacheWhereUniqueInput;
};
export type GithubCacheDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubCacheWhereInput;
    limit?: number;
};
export type GithubCache$repoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where?: Prisma.RepoWhereInput;
};
export type GithubCache$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type GithubCacheDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GithubCacheSelect<ExtArgs> | null;
    omit?: Prisma.GithubCacheOmit<ExtArgs> | null;
    include?: Prisma.GithubCacheInclude<ExtArgs> | null;
};
