import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TrackedRepoModel = runtime.Types.Result.DefaultSelection<Prisma.$TrackedRepoPayload>;
export type AggregateTrackedRepo = {
    _count: TrackedRepoCountAggregateOutputType | null;
    _min: TrackedRepoMinAggregateOutputType | null;
    _max: TrackedRepoMaxAggregateOutputType | null;
};
export type TrackedRepoMinAggregateOutputType = {
    userId: string | null;
    repoId: string | null;
    addedAt: Date | null;
};
export type TrackedRepoMaxAggregateOutputType = {
    userId: string | null;
    repoId: string | null;
    addedAt: Date | null;
};
export type TrackedRepoCountAggregateOutputType = {
    userId: number;
    repoId: number;
    addedAt: number;
    _all: number;
};
export type TrackedRepoMinAggregateInputType = {
    userId?: true;
    repoId?: true;
    addedAt?: true;
};
export type TrackedRepoMaxAggregateInputType = {
    userId?: true;
    repoId?: true;
    addedAt?: true;
};
export type TrackedRepoCountAggregateInputType = {
    userId?: true;
    repoId?: true;
    addedAt?: true;
    _all?: true;
};
export type TrackedRepoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackedRepoWhereInput;
    orderBy?: Prisma.TrackedRepoOrderByWithRelationInput | Prisma.TrackedRepoOrderByWithRelationInput[];
    cursor?: Prisma.TrackedRepoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrackedRepoCountAggregateInputType;
    _min?: TrackedRepoMinAggregateInputType;
    _max?: TrackedRepoMaxAggregateInputType;
};
export type GetTrackedRepoAggregateType<T extends TrackedRepoAggregateArgs> = {
    [P in keyof T & keyof AggregateTrackedRepo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrackedRepo[P]> : Prisma.GetScalarType<T[P], AggregateTrackedRepo[P]>;
};
export type TrackedRepoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackedRepoWhereInput;
    orderBy?: Prisma.TrackedRepoOrderByWithAggregationInput | Prisma.TrackedRepoOrderByWithAggregationInput[];
    by: Prisma.TrackedRepoScalarFieldEnum[] | Prisma.TrackedRepoScalarFieldEnum;
    having?: Prisma.TrackedRepoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrackedRepoCountAggregateInputType | true;
    _min?: TrackedRepoMinAggregateInputType;
    _max?: TrackedRepoMaxAggregateInputType;
};
export type TrackedRepoGroupByOutputType = {
    userId: string;
    repoId: string;
    addedAt: Date;
    _count: TrackedRepoCountAggregateOutputType | null;
    _min: TrackedRepoMinAggregateOutputType | null;
    _max: TrackedRepoMaxAggregateOutputType | null;
};
export type GetTrackedRepoGroupByPayload<T extends TrackedRepoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrackedRepoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrackedRepoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrackedRepoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrackedRepoGroupByOutputType[P]>;
}>>;
export type TrackedRepoWhereInput = {
    AND?: Prisma.TrackedRepoWhereInput | Prisma.TrackedRepoWhereInput[];
    OR?: Prisma.TrackedRepoWhereInput[];
    NOT?: Prisma.TrackedRepoWhereInput | Prisma.TrackedRepoWhereInput[];
    userId?: Prisma.StringFilter<"TrackedRepo"> | string;
    repoId?: Prisma.StringFilter<"TrackedRepo"> | string;
    addedAt?: Prisma.DateTimeFilter<"TrackedRepo"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    repo?: Prisma.XOR<Prisma.RepoScalarRelationFilter, Prisma.RepoWhereInput>;
};
export type TrackedRepoOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    repo?: Prisma.RepoOrderByWithRelationInput;
};
export type TrackedRepoWhereUniqueInput = Prisma.AtLeast<{
    userId_repoId?: Prisma.TrackedRepoUserIdRepoIdCompoundUniqueInput;
    AND?: Prisma.TrackedRepoWhereInput | Prisma.TrackedRepoWhereInput[];
    OR?: Prisma.TrackedRepoWhereInput[];
    NOT?: Prisma.TrackedRepoWhereInput | Prisma.TrackedRepoWhereInput[];
    userId?: Prisma.StringFilter<"TrackedRepo"> | string;
    repoId?: Prisma.StringFilter<"TrackedRepo"> | string;
    addedAt?: Prisma.DateTimeFilter<"TrackedRepo"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    repo?: Prisma.XOR<Prisma.RepoScalarRelationFilter, Prisma.RepoWhereInput>;
}, "userId_repoId">;
export type TrackedRepoOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    _count?: Prisma.TrackedRepoCountOrderByAggregateInput;
    _max?: Prisma.TrackedRepoMaxOrderByAggregateInput;
    _min?: Prisma.TrackedRepoMinOrderByAggregateInput;
};
export type TrackedRepoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrackedRepoScalarWhereWithAggregatesInput | Prisma.TrackedRepoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrackedRepoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrackedRepoScalarWhereWithAggregatesInput | Prisma.TrackedRepoScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"TrackedRepo"> | string;
    repoId?: Prisma.StringWithAggregatesFilter<"TrackedRepo"> | string;
    addedAt?: Prisma.DateTimeWithAggregatesFilter<"TrackedRepo"> | Date | string;
};
export type TrackedRepoCreateInput = {
    addedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrackedReposInput;
    repo: Prisma.RepoCreateNestedOneWithoutTrackedByInput;
};
export type TrackedRepoUncheckedCreateInput = {
    userId: string;
    repoId: string;
    addedAt?: Date | string;
};
export type TrackedRepoUpdateInput = {
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrackedReposNestedInput;
    repo?: Prisma.RepoUpdateOneRequiredWithoutTrackedByNestedInput;
};
export type TrackedRepoUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoCreateManyInput = {
    userId: string;
    repoId: string;
    addedAt?: Date | string;
};
export type TrackedRepoUpdateManyMutationInput = {
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    repoId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoListRelationFilter = {
    every?: Prisma.TrackedRepoWhereInput;
    some?: Prisma.TrackedRepoWhereInput;
    none?: Prisma.TrackedRepoWhereInput;
};
export type TrackedRepoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TrackedRepoUserIdRepoIdCompoundUniqueInput = {
    userId: string;
    repoId: string;
};
export type TrackedRepoCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type TrackedRepoMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type TrackedRepoMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    repoId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type TrackedRepoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput> | Prisma.TrackedRepoCreateWithoutUserInput[] | Prisma.TrackedRepoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutUserInput | Prisma.TrackedRepoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrackedRepoCreateManyUserInputEnvelope;
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
};
export type TrackedRepoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput> | Prisma.TrackedRepoCreateWithoutUserInput[] | Prisma.TrackedRepoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutUserInput | Prisma.TrackedRepoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TrackedRepoCreateManyUserInputEnvelope;
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
};
export type TrackedRepoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput> | Prisma.TrackedRepoCreateWithoutUserInput[] | Prisma.TrackedRepoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutUserInput | Prisma.TrackedRepoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrackedRepoUpsertWithWhereUniqueWithoutUserInput | Prisma.TrackedRepoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrackedRepoCreateManyUserInputEnvelope;
    set?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    disconnect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    delete?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    update?: Prisma.TrackedRepoUpdateWithWhereUniqueWithoutUserInput | Prisma.TrackedRepoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrackedRepoUpdateManyWithWhereWithoutUserInput | Prisma.TrackedRepoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
};
export type TrackedRepoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput> | Prisma.TrackedRepoCreateWithoutUserInput[] | Prisma.TrackedRepoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutUserInput | Prisma.TrackedRepoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TrackedRepoUpsertWithWhereUniqueWithoutUserInput | Prisma.TrackedRepoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TrackedRepoCreateManyUserInputEnvelope;
    set?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    disconnect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    delete?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    update?: Prisma.TrackedRepoUpdateWithWhereUniqueWithoutUserInput | Prisma.TrackedRepoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TrackedRepoUpdateManyWithWhereWithoutUserInput | Prisma.TrackedRepoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
};
export type TrackedRepoCreateNestedManyWithoutRepoInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput> | Prisma.TrackedRepoCreateWithoutRepoInput[] | Prisma.TrackedRepoUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutRepoInput | Prisma.TrackedRepoCreateOrConnectWithoutRepoInput[];
    createMany?: Prisma.TrackedRepoCreateManyRepoInputEnvelope;
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
};
export type TrackedRepoUncheckedCreateNestedManyWithoutRepoInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput> | Prisma.TrackedRepoCreateWithoutRepoInput[] | Prisma.TrackedRepoUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutRepoInput | Prisma.TrackedRepoCreateOrConnectWithoutRepoInput[];
    createMany?: Prisma.TrackedRepoCreateManyRepoInputEnvelope;
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
};
export type TrackedRepoUpdateManyWithoutRepoNestedInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput> | Prisma.TrackedRepoCreateWithoutRepoInput[] | Prisma.TrackedRepoUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutRepoInput | Prisma.TrackedRepoCreateOrConnectWithoutRepoInput[];
    upsert?: Prisma.TrackedRepoUpsertWithWhereUniqueWithoutRepoInput | Prisma.TrackedRepoUpsertWithWhereUniqueWithoutRepoInput[];
    createMany?: Prisma.TrackedRepoCreateManyRepoInputEnvelope;
    set?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    disconnect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    delete?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    update?: Prisma.TrackedRepoUpdateWithWhereUniqueWithoutRepoInput | Prisma.TrackedRepoUpdateWithWhereUniqueWithoutRepoInput[];
    updateMany?: Prisma.TrackedRepoUpdateManyWithWhereWithoutRepoInput | Prisma.TrackedRepoUpdateManyWithWhereWithoutRepoInput[];
    deleteMany?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
};
export type TrackedRepoUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput> | Prisma.TrackedRepoCreateWithoutRepoInput[] | Prisma.TrackedRepoUncheckedCreateWithoutRepoInput[];
    connectOrCreate?: Prisma.TrackedRepoCreateOrConnectWithoutRepoInput | Prisma.TrackedRepoCreateOrConnectWithoutRepoInput[];
    upsert?: Prisma.TrackedRepoUpsertWithWhereUniqueWithoutRepoInput | Prisma.TrackedRepoUpsertWithWhereUniqueWithoutRepoInput[];
    createMany?: Prisma.TrackedRepoCreateManyRepoInputEnvelope;
    set?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    disconnect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    delete?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    connect?: Prisma.TrackedRepoWhereUniqueInput | Prisma.TrackedRepoWhereUniqueInput[];
    update?: Prisma.TrackedRepoUpdateWithWhereUniqueWithoutRepoInput | Prisma.TrackedRepoUpdateWithWhereUniqueWithoutRepoInput[];
    updateMany?: Prisma.TrackedRepoUpdateManyWithWhereWithoutRepoInput | Prisma.TrackedRepoUpdateManyWithWhereWithoutRepoInput[];
    deleteMany?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
};
export type TrackedRepoCreateWithoutUserInput = {
    addedAt?: Date | string;
    repo: Prisma.RepoCreateNestedOneWithoutTrackedByInput;
};
export type TrackedRepoUncheckedCreateWithoutUserInput = {
    repoId: string;
    addedAt?: Date | string;
};
export type TrackedRepoCreateOrConnectWithoutUserInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput>;
};
export type TrackedRepoCreateManyUserInputEnvelope = {
    data: Prisma.TrackedRepoCreateManyUserInput | Prisma.TrackedRepoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TrackedRepoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrackedRepoUpdateWithoutUserInput, Prisma.TrackedRepoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TrackedRepoCreateWithoutUserInput, Prisma.TrackedRepoUncheckedCreateWithoutUserInput>;
};
export type TrackedRepoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateWithoutUserInput, Prisma.TrackedRepoUncheckedUpdateWithoutUserInput>;
};
export type TrackedRepoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TrackedRepoScalarWhereInput;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateManyMutationInput, Prisma.TrackedRepoUncheckedUpdateManyWithoutUserInput>;
};
export type TrackedRepoScalarWhereInput = {
    AND?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
    OR?: Prisma.TrackedRepoScalarWhereInput[];
    NOT?: Prisma.TrackedRepoScalarWhereInput | Prisma.TrackedRepoScalarWhereInput[];
    userId?: Prisma.StringFilter<"TrackedRepo"> | string;
    repoId?: Prisma.StringFilter<"TrackedRepo"> | string;
    addedAt?: Prisma.DateTimeFilter<"TrackedRepo"> | Date | string;
};
export type TrackedRepoCreateWithoutRepoInput = {
    addedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTrackedReposInput;
};
export type TrackedRepoUncheckedCreateWithoutRepoInput = {
    userId: string;
    addedAt?: Date | string;
};
export type TrackedRepoCreateOrConnectWithoutRepoInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput>;
};
export type TrackedRepoCreateManyRepoInputEnvelope = {
    data: Prisma.TrackedRepoCreateManyRepoInput | Prisma.TrackedRepoCreateManyRepoInput[];
    skipDuplicates?: boolean;
};
export type TrackedRepoUpsertWithWhereUniqueWithoutRepoInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrackedRepoUpdateWithoutRepoInput, Prisma.TrackedRepoUncheckedUpdateWithoutRepoInput>;
    create: Prisma.XOR<Prisma.TrackedRepoCreateWithoutRepoInput, Prisma.TrackedRepoUncheckedCreateWithoutRepoInput>;
};
export type TrackedRepoUpdateWithWhereUniqueWithoutRepoInput = {
    where: Prisma.TrackedRepoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateWithoutRepoInput, Prisma.TrackedRepoUncheckedUpdateWithoutRepoInput>;
};
export type TrackedRepoUpdateManyWithWhereWithoutRepoInput = {
    where: Prisma.TrackedRepoScalarWhereInput;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateManyMutationInput, Prisma.TrackedRepoUncheckedUpdateManyWithoutRepoInput>;
};
export type TrackedRepoCreateManyUserInput = {
    repoId: string;
    addedAt?: Date | string;
};
export type TrackedRepoUpdateWithoutUserInput = {
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    repo?: Prisma.RepoUpdateOneRequiredWithoutTrackedByNestedInput;
};
export type TrackedRepoUncheckedUpdateWithoutUserInput = {
    repoId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoUncheckedUpdateManyWithoutUserInput = {
    repoId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoCreateManyRepoInput = {
    userId: string;
    addedAt?: Date | string;
};
export type TrackedRepoUpdateWithoutRepoInput = {
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTrackedReposNestedInput;
};
export type TrackedRepoUncheckedUpdateWithoutRepoInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoUncheckedUpdateManyWithoutRepoInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrackedRepoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    repoId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trackedRepo"]>;
export type TrackedRepoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    repoId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trackedRepo"]>;
export type TrackedRepoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    repoId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trackedRepo"]>;
export type TrackedRepoSelectScalar = {
    userId?: boolean;
    repoId?: boolean;
    addedAt?: boolean;
};
export type TrackedRepoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "repoId" | "addedAt", ExtArgs["result"]["trackedRepo"]>;
export type TrackedRepoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
};
export type TrackedRepoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
};
export type TrackedRepoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    repo?: boolean | Prisma.RepoDefaultArgs<ExtArgs>;
};
export type $TrackedRepoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TrackedRepo";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        repo: Prisma.$RepoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        repoId: string;
        addedAt: Date;
    }, ExtArgs["result"]["trackedRepo"]>;
    composites: {};
};
export type TrackedRepoGetPayload<S extends boolean | null | undefined | TrackedRepoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload, S>;
export type TrackedRepoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrackedRepoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrackedRepoCountAggregateInputType | true;
};
export interface TrackedRepoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TrackedRepo'];
        meta: {
            name: 'TrackedRepo';
        };
    };
    findUnique<T extends TrackedRepoFindUniqueArgs>(args: Prisma.SelectSubset<T, TrackedRepoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrackedRepoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrackedRepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrackedRepoFindFirstArgs>(args?: Prisma.SelectSubset<T, TrackedRepoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrackedRepoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrackedRepoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrackedRepoFindManyArgs>(args?: Prisma.SelectSubset<T, TrackedRepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrackedRepoCreateArgs>(args: Prisma.SelectSubset<T, TrackedRepoCreateArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrackedRepoCreateManyArgs>(args?: Prisma.SelectSubset<T, TrackedRepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TrackedRepoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrackedRepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TrackedRepoDeleteArgs>(args: Prisma.SelectSubset<T, TrackedRepoDeleteArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrackedRepoUpdateArgs>(args: Prisma.SelectSubset<T, TrackedRepoUpdateArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrackedRepoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrackedRepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrackedRepoUpdateManyArgs>(args: Prisma.SelectSubset<T, TrackedRepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TrackedRepoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrackedRepoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TrackedRepoUpsertArgs>(args: Prisma.SelectSubset<T, TrackedRepoUpsertArgs<ExtArgs>>): Prisma.Prisma__TrackedRepoClient<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TrackedRepoCountArgs>(args?: Prisma.Subset<T, TrackedRepoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrackedRepoCountAggregateOutputType> : number>;
    aggregate<T extends TrackedRepoAggregateArgs>(args: Prisma.Subset<T, TrackedRepoAggregateArgs>): Prisma.PrismaPromise<GetTrackedRepoAggregateType<T>>;
    groupBy<T extends TrackedRepoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrackedRepoGroupByArgs['orderBy'];
    } : {
        orderBy?: TrackedRepoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrackedRepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrackedRepoFieldRefs;
}
export interface Prisma__TrackedRepoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    repo<T extends Prisma.RepoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RepoDefaultArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrackedRepoFieldRefs {
    readonly userId: Prisma.FieldRef<"TrackedRepo", 'String'>;
    readonly repoId: Prisma.FieldRef<"TrackedRepo", 'String'>;
    readonly addedAt: Prisma.FieldRef<"TrackedRepo", 'DateTime'>;
}
export type TrackedRepoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    where: Prisma.TrackedRepoWhereUniqueInput;
};
export type TrackedRepoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    where: Prisma.TrackedRepoWhereUniqueInput;
};
export type TrackedRepoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrackedRepoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrackedRepoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrackedRepoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackedRepoCreateInput, Prisma.TrackedRepoUncheckedCreateInput>;
};
export type TrackedRepoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrackedRepoCreateManyInput | Prisma.TrackedRepoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrackedRepoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    data: Prisma.TrackedRepoCreateManyInput | Prisma.TrackedRepoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TrackedRepoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TrackedRepoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateInput, Prisma.TrackedRepoUncheckedUpdateInput>;
    where: Prisma.TrackedRepoWhereUniqueInput;
};
export type TrackedRepoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrackedRepoUpdateManyMutationInput, Prisma.TrackedRepoUncheckedUpdateManyInput>;
    where?: Prisma.TrackedRepoWhereInput;
    limit?: number;
};
export type TrackedRepoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrackedRepoUpdateManyMutationInput, Prisma.TrackedRepoUncheckedUpdateManyInput>;
    where?: Prisma.TrackedRepoWhereInput;
    limit?: number;
    include?: Prisma.TrackedRepoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TrackedRepoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    where: Prisma.TrackedRepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrackedRepoCreateInput, Prisma.TrackedRepoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrackedRepoUpdateInput, Prisma.TrackedRepoUncheckedUpdateInput>;
};
export type TrackedRepoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
    where: Prisma.TrackedRepoWhereUniqueInput;
};
export type TrackedRepoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackedRepoWhereInput;
    limit?: number;
};
export type TrackedRepoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrackedRepoSelect<ExtArgs> | null;
    omit?: Prisma.TrackedRepoOmit<ExtArgs> | null;
    include?: Prisma.TrackedRepoInclude<ExtArgs> | null;
};
