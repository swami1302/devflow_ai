import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RepoModel = runtime.Types.Result.DefaultSelection<Prisma.$RepoPayload>;
export type AggregateRepo = {
    _count: RepoCountAggregateOutputType | null;
    _min: RepoMinAggregateOutputType | null;
    _max: RepoMaxAggregateOutputType | null;
};
export type RepoMinAggregateOutputType = {
    id: string | null;
    githubId: string | null;
    fullName: string | null;
    private: boolean | null;
    defaultBranch: string | null;
};
export type RepoMaxAggregateOutputType = {
    id: string | null;
    githubId: string | null;
    fullName: string | null;
    private: boolean | null;
    defaultBranch: string | null;
};
export type RepoCountAggregateOutputType = {
    id: number;
    githubId: number;
    fullName: number;
    private: number;
    defaultBranch: number;
    _all: number;
};
export type RepoMinAggregateInputType = {
    id?: true;
    githubId?: true;
    fullName?: true;
    private?: true;
    defaultBranch?: true;
};
export type RepoMaxAggregateInputType = {
    id?: true;
    githubId?: true;
    fullName?: true;
    private?: true;
    defaultBranch?: true;
};
export type RepoCountAggregateInputType = {
    id?: true;
    githubId?: true;
    fullName?: true;
    private?: true;
    defaultBranch?: true;
    _all?: true;
};
export type RepoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepoWhereInput;
    orderBy?: Prisma.RepoOrderByWithRelationInput | Prisma.RepoOrderByWithRelationInput[];
    cursor?: Prisma.RepoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RepoCountAggregateInputType;
    _min?: RepoMinAggregateInputType;
    _max?: RepoMaxAggregateInputType;
};
export type GetRepoAggregateType<T extends RepoAggregateArgs> = {
    [P in keyof T & keyof AggregateRepo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRepo[P]> : Prisma.GetScalarType<T[P], AggregateRepo[P]>;
};
export type RepoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepoWhereInput;
    orderBy?: Prisma.RepoOrderByWithAggregationInput | Prisma.RepoOrderByWithAggregationInput[];
    by: Prisma.RepoScalarFieldEnum[] | Prisma.RepoScalarFieldEnum;
    having?: Prisma.RepoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RepoCountAggregateInputType | true;
    _min?: RepoMinAggregateInputType;
    _max?: RepoMaxAggregateInputType;
};
export type RepoGroupByOutputType = {
    id: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    _count: RepoCountAggregateOutputType | null;
    _min: RepoMinAggregateOutputType | null;
    _max: RepoMaxAggregateOutputType | null;
};
export type GetRepoGroupByPayload<T extends RepoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RepoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RepoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RepoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RepoGroupByOutputType[P]>;
}>>;
export type RepoWhereInput = {
    AND?: Prisma.RepoWhereInput | Prisma.RepoWhereInput[];
    OR?: Prisma.RepoWhereInput[];
    NOT?: Prisma.RepoWhereInput | Prisma.RepoWhereInput[];
    id?: Prisma.StringFilter<"Repo"> | string;
    githubId?: Prisma.StringFilter<"Repo"> | string;
    fullName?: Prisma.StringFilter<"Repo"> | string;
    private?: Prisma.BoolFilter<"Repo"> | boolean;
    defaultBranch?: Prisma.StringFilter<"Repo"> | string;
    trackedBy?: Prisma.TrackedRepoListRelationFilter;
    caches?: Prisma.GithubCacheListRelationFilter;
};
export type RepoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    private?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    trackedBy?: Prisma.TrackedRepoOrderByRelationAggregateInput;
    caches?: Prisma.GithubCacheOrderByRelationAggregateInput;
};
export type RepoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    githubId?: string;
    AND?: Prisma.RepoWhereInput | Prisma.RepoWhereInput[];
    OR?: Prisma.RepoWhereInput[];
    NOT?: Prisma.RepoWhereInput | Prisma.RepoWhereInput[];
    fullName?: Prisma.StringFilter<"Repo"> | string;
    private?: Prisma.BoolFilter<"Repo"> | boolean;
    defaultBranch?: Prisma.StringFilter<"Repo"> | string;
    trackedBy?: Prisma.TrackedRepoListRelationFilter;
    caches?: Prisma.GithubCacheListRelationFilter;
}, "id" | "githubId">;
export type RepoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    private?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    _count?: Prisma.RepoCountOrderByAggregateInput;
    _max?: Prisma.RepoMaxOrderByAggregateInput;
    _min?: Prisma.RepoMinOrderByAggregateInput;
};
export type RepoScalarWhereWithAggregatesInput = {
    AND?: Prisma.RepoScalarWhereWithAggregatesInput | Prisma.RepoScalarWhereWithAggregatesInput[];
    OR?: Prisma.RepoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RepoScalarWhereWithAggregatesInput | Prisma.RepoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Repo"> | string;
    githubId?: Prisma.StringWithAggregatesFilter<"Repo"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Repo"> | string;
    private?: Prisma.BoolWithAggregatesFilter<"Repo"> | boolean;
    defaultBranch?: Prisma.StringWithAggregatesFilter<"Repo"> | string;
};
export type RepoCreateInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    trackedBy?: Prisma.TrackedRepoCreateNestedManyWithoutRepoInput;
    caches?: Prisma.GithubCacheCreateNestedManyWithoutRepoInput;
};
export type RepoUncheckedCreateInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    trackedBy?: Prisma.TrackedRepoUncheckedCreateNestedManyWithoutRepoInput;
    caches?: Prisma.GithubCacheUncheckedCreateNestedManyWithoutRepoInput;
};
export type RepoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    trackedBy?: Prisma.TrackedRepoUpdateManyWithoutRepoNestedInput;
    caches?: Prisma.GithubCacheUpdateManyWithoutRepoNestedInput;
};
export type RepoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    trackedBy?: Prisma.TrackedRepoUncheckedUpdateManyWithoutRepoNestedInput;
    caches?: Prisma.GithubCacheUncheckedUpdateManyWithoutRepoNestedInput;
};
export type RepoCreateManyInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
};
export type RepoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RepoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RepoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    private?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
};
export type RepoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    private?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
};
export type RepoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    githubId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    private?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
};
export type RepoScalarRelationFilter = {
    is?: Prisma.RepoWhereInput;
    isNot?: Prisma.RepoWhereInput;
};
export type RepoNullableScalarRelationFilter = {
    is?: Prisma.RepoWhereInput | null;
    isNot?: Prisma.RepoWhereInput | null;
};
export type RepoCreateNestedOneWithoutTrackedByInput = {
    create?: Prisma.XOR<Prisma.RepoCreateWithoutTrackedByInput, Prisma.RepoUncheckedCreateWithoutTrackedByInput>;
    connectOrCreate?: Prisma.RepoCreateOrConnectWithoutTrackedByInput;
    connect?: Prisma.RepoWhereUniqueInput;
};
export type RepoUpdateOneRequiredWithoutTrackedByNestedInput = {
    create?: Prisma.XOR<Prisma.RepoCreateWithoutTrackedByInput, Prisma.RepoUncheckedCreateWithoutTrackedByInput>;
    connectOrCreate?: Prisma.RepoCreateOrConnectWithoutTrackedByInput;
    upsert?: Prisma.RepoUpsertWithoutTrackedByInput;
    connect?: Prisma.RepoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepoUpdateToOneWithWhereWithoutTrackedByInput, Prisma.RepoUpdateWithoutTrackedByInput>, Prisma.RepoUncheckedUpdateWithoutTrackedByInput>;
};
export type RepoCreateNestedOneWithoutCachesInput = {
    create?: Prisma.XOR<Prisma.RepoCreateWithoutCachesInput, Prisma.RepoUncheckedCreateWithoutCachesInput>;
    connectOrCreate?: Prisma.RepoCreateOrConnectWithoutCachesInput;
    connect?: Prisma.RepoWhereUniqueInput;
};
export type RepoUpdateOneWithoutCachesNestedInput = {
    create?: Prisma.XOR<Prisma.RepoCreateWithoutCachesInput, Prisma.RepoUncheckedCreateWithoutCachesInput>;
    connectOrCreate?: Prisma.RepoCreateOrConnectWithoutCachesInput;
    upsert?: Prisma.RepoUpsertWithoutCachesInput;
    disconnect?: Prisma.RepoWhereInput | boolean;
    delete?: Prisma.RepoWhereInput | boolean;
    connect?: Prisma.RepoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepoUpdateToOneWithWhereWithoutCachesInput, Prisma.RepoUpdateWithoutCachesInput>, Prisma.RepoUncheckedUpdateWithoutCachesInput>;
};
export type RepoCreateWithoutTrackedByInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    caches?: Prisma.GithubCacheCreateNestedManyWithoutRepoInput;
};
export type RepoUncheckedCreateWithoutTrackedByInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    caches?: Prisma.GithubCacheUncheckedCreateNestedManyWithoutRepoInput;
};
export type RepoCreateOrConnectWithoutTrackedByInput = {
    where: Prisma.RepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepoCreateWithoutTrackedByInput, Prisma.RepoUncheckedCreateWithoutTrackedByInput>;
};
export type RepoUpsertWithoutTrackedByInput = {
    update: Prisma.XOR<Prisma.RepoUpdateWithoutTrackedByInput, Prisma.RepoUncheckedUpdateWithoutTrackedByInput>;
    create: Prisma.XOR<Prisma.RepoCreateWithoutTrackedByInput, Prisma.RepoUncheckedCreateWithoutTrackedByInput>;
    where?: Prisma.RepoWhereInput;
};
export type RepoUpdateToOneWithWhereWithoutTrackedByInput = {
    where?: Prisma.RepoWhereInput;
    data: Prisma.XOR<Prisma.RepoUpdateWithoutTrackedByInput, Prisma.RepoUncheckedUpdateWithoutTrackedByInput>;
};
export type RepoUpdateWithoutTrackedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    caches?: Prisma.GithubCacheUpdateManyWithoutRepoNestedInput;
};
export type RepoUncheckedUpdateWithoutTrackedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    caches?: Prisma.GithubCacheUncheckedUpdateManyWithoutRepoNestedInput;
};
export type RepoCreateWithoutCachesInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    trackedBy?: Prisma.TrackedRepoCreateNestedManyWithoutRepoInput;
};
export type RepoUncheckedCreateWithoutCachesInput = {
    id?: string;
    githubId: string;
    fullName: string;
    private: boolean;
    defaultBranch: string;
    trackedBy?: Prisma.TrackedRepoUncheckedCreateNestedManyWithoutRepoInput;
};
export type RepoCreateOrConnectWithoutCachesInput = {
    where: Prisma.RepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepoCreateWithoutCachesInput, Prisma.RepoUncheckedCreateWithoutCachesInput>;
};
export type RepoUpsertWithoutCachesInput = {
    update: Prisma.XOR<Prisma.RepoUpdateWithoutCachesInput, Prisma.RepoUncheckedUpdateWithoutCachesInput>;
    create: Prisma.XOR<Prisma.RepoCreateWithoutCachesInput, Prisma.RepoUncheckedCreateWithoutCachesInput>;
    where?: Prisma.RepoWhereInput;
};
export type RepoUpdateToOneWithWhereWithoutCachesInput = {
    where?: Prisma.RepoWhereInput;
    data: Prisma.XOR<Prisma.RepoUpdateWithoutCachesInput, Prisma.RepoUncheckedUpdateWithoutCachesInput>;
};
export type RepoUpdateWithoutCachesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    trackedBy?: Prisma.TrackedRepoUpdateManyWithoutRepoNestedInput;
};
export type RepoUncheckedUpdateWithoutCachesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    githubId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    private?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    trackedBy?: Prisma.TrackedRepoUncheckedUpdateManyWithoutRepoNestedInput;
};
export type RepoCountOutputType = {
    trackedBy: number;
    caches: number;
};
export type RepoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trackedBy?: boolean | RepoCountOutputTypeCountTrackedByArgs;
    caches?: boolean | RepoCountOutputTypeCountCachesArgs;
};
export type RepoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoCountOutputTypeSelect<ExtArgs> | null;
};
export type RepoCountOutputTypeCountTrackedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrackedRepoWhereInput;
};
export type RepoCountOutputTypeCountCachesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GithubCacheWhereInput;
};
export type RepoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    fullName?: boolean;
    private?: boolean;
    defaultBranch?: boolean;
    trackedBy?: boolean | Prisma.Repo$trackedByArgs<ExtArgs>;
    caches?: boolean | Prisma.Repo$cachesArgs<ExtArgs>;
    _count?: boolean | Prisma.RepoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repo"]>;
export type RepoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    fullName?: boolean;
    private?: boolean;
    defaultBranch?: boolean;
}, ExtArgs["result"]["repo"]>;
export type RepoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    githubId?: boolean;
    fullName?: boolean;
    private?: boolean;
    defaultBranch?: boolean;
}, ExtArgs["result"]["repo"]>;
export type RepoSelectScalar = {
    id?: boolean;
    githubId?: boolean;
    fullName?: boolean;
    private?: boolean;
    defaultBranch?: boolean;
};
export type RepoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "githubId" | "fullName" | "private" | "defaultBranch", ExtArgs["result"]["repo"]>;
export type RepoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trackedBy?: boolean | Prisma.Repo$trackedByArgs<ExtArgs>;
    caches?: boolean | Prisma.Repo$cachesArgs<ExtArgs>;
    _count?: boolean | Prisma.RepoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RepoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RepoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RepoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Repo";
    objects: {
        trackedBy: Prisma.$TrackedRepoPayload<ExtArgs>[];
        caches: Prisma.$GithubCachePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        githubId: string;
        fullName: string;
        private: boolean;
        defaultBranch: string;
    }, ExtArgs["result"]["repo"]>;
    composites: {};
};
export type RepoGetPayload<S extends boolean | null | undefined | RepoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RepoPayload, S>;
export type RepoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RepoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RepoCountAggregateInputType | true;
};
export interface RepoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Repo'];
        meta: {
            name: 'Repo';
        };
    };
    findUnique<T extends RepoFindUniqueArgs>(args: Prisma.SelectSubset<T, RepoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RepoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RepoFindFirstArgs>(args?: Prisma.SelectSubset<T, RepoFindFirstArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RepoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RepoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RepoFindManyArgs>(args?: Prisma.SelectSubset<T, RepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RepoCreateArgs>(args: Prisma.SelectSubset<T, RepoCreateArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RepoCreateManyArgs>(args?: Prisma.SelectSubset<T, RepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RepoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RepoDeleteArgs>(args: Prisma.SelectSubset<T, RepoDeleteArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RepoUpdateArgs>(args: Prisma.SelectSubset<T, RepoUpdateArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RepoDeleteManyArgs>(args?: Prisma.SelectSubset<T, RepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RepoUpdateManyArgs>(args: Prisma.SelectSubset<T, RepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RepoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RepoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RepoUpsertArgs>(args: Prisma.SelectSubset<T, RepoUpsertArgs<ExtArgs>>): Prisma.Prisma__RepoClient<runtime.Types.Result.GetResult<Prisma.$RepoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RepoCountArgs>(args?: Prisma.Subset<T, RepoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RepoCountAggregateOutputType> : number>;
    aggregate<T extends RepoAggregateArgs>(args: Prisma.Subset<T, RepoAggregateArgs>): Prisma.PrismaPromise<GetRepoAggregateType<T>>;
    groupBy<T extends RepoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RepoGroupByArgs['orderBy'];
    } : {
        orderBy?: RepoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RepoFieldRefs;
}
export interface Prisma__RepoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trackedBy<T extends Prisma.Repo$trackedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Repo$trackedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrackedRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    caches<T extends Prisma.Repo$cachesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Repo$cachesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GithubCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RepoFieldRefs {
    readonly id: Prisma.FieldRef<"Repo", 'String'>;
    readonly githubId: Prisma.FieldRef<"Repo", 'String'>;
    readonly fullName: Prisma.FieldRef<"Repo", 'String'>;
    readonly private: Prisma.FieldRef<"Repo", 'Boolean'>;
    readonly defaultBranch: Prisma.FieldRef<"Repo", 'String'>;
}
export type RepoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where: Prisma.RepoWhereUniqueInput;
};
export type RepoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where: Prisma.RepoWhereUniqueInput;
};
export type RepoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where?: Prisma.RepoWhereInput;
    orderBy?: Prisma.RepoOrderByWithRelationInput | Prisma.RepoOrderByWithRelationInput[];
    cursor?: Prisma.RepoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepoScalarFieldEnum | Prisma.RepoScalarFieldEnum[];
};
export type RepoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where?: Prisma.RepoWhereInput;
    orderBy?: Prisma.RepoOrderByWithRelationInput | Prisma.RepoOrderByWithRelationInput[];
    cursor?: Prisma.RepoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepoScalarFieldEnum | Prisma.RepoScalarFieldEnum[];
};
export type RepoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where?: Prisma.RepoWhereInput;
    orderBy?: Prisma.RepoOrderByWithRelationInput | Prisma.RepoOrderByWithRelationInput[];
    cursor?: Prisma.RepoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepoScalarFieldEnum | Prisma.RepoScalarFieldEnum[];
};
export type RepoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepoCreateInput, Prisma.RepoUncheckedCreateInput>;
};
export type RepoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RepoCreateManyInput | Prisma.RepoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    data: Prisma.RepoCreateManyInput | Prisma.RepoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepoUpdateInput, Prisma.RepoUncheckedUpdateInput>;
    where: Prisma.RepoWhereUniqueInput;
};
export type RepoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RepoUpdateManyMutationInput, Prisma.RepoUncheckedUpdateManyInput>;
    where?: Prisma.RepoWhereInput;
    limit?: number;
};
export type RepoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepoUpdateManyMutationInput, Prisma.RepoUncheckedUpdateManyInput>;
    where?: Prisma.RepoWhereInput;
    limit?: number;
};
export type RepoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where: Prisma.RepoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepoCreateInput, Prisma.RepoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RepoUpdateInput, Prisma.RepoUncheckedUpdateInput>;
};
export type RepoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
    where: Prisma.RepoWhereUniqueInput;
};
export type RepoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepoWhereInput;
    limit?: number;
};
export type Repo$trackedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Repo$cachesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RepoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepoSelect<ExtArgs> | null;
    omit?: Prisma.RepoOmit<ExtArgs> | null;
    include?: Prisma.RepoInclude<ExtArgs> | null;
};
