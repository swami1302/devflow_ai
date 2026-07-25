import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BriefModel = runtime.Types.Result.DefaultSelection<Prisma.$BriefPayload>;
export type AggregateBrief = {
    _count: BriefCountAggregateOutputType | null;
    _min: BriefMinAggregateOutputType | null;
    _max: BriefMaxAggregateOutputType | null;
};
export type BriefMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    model: string | null;
    generatedAt: Date | null;
};
export type BriefMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    model: string | null;
    generatedAt: Date | null;
};
export type BriefCountAggregateOutputType = {
    id: number;
    userId: number;
    windowStart: number;
    windowEnd: number;
    content: number;
    model: number;
    generatedAt: number;
    _all: number;
};
export type BriefMinAggregateInputType = {
    id?: true;
    userId?: true;
    windowStart?: true;
    windowEnd?: true;
    model?: true;
    generatedAt?: true;
};
export type BriefMaxAggregateInputType = {
    id?: true;
    userId?: true;
    windowStart?: true;
    windowEnd?: true;
    model?: true;
    generatedAt?: true;
};
export type BriefCountAggregateInputType = {
    id?: true;
    userId?: true;
    windowStart?: true;
    windowEnd?: true;
    content?: true;
    model?: true;
    generatedAt?: true;
    _all?: true;
};
export type BriefAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefWhereInput;
    orderBy?: Prisma.BriefOrderByWithRelationInput | Prisma.BriefOrderByWithRelationInput[];
    cursor?: Prisma.BriefWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BriefCountAggregateInputType;
    _min?: BriefMinAggregateInputType;
    _max?: BriefMaxAggregateInputType;
};
export type GetBriefAggregateType<T extends BriefAggregateArgs> = {
    [P in keyof T & keyof AggregateBrief]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrief[P]> : Prisma.GetScalarType<T[P], AggregateBrief[P]>;
};
export type BriefGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefWhereInput;
    orderBy?: Prisma.BriefOrderByWithAggregationInput | Prisma.BriefOrderByWithAggregationInput[];
    by: Prisma.BriefScalarFieldEnum[] | Prisma.BriefScalarFieldEnum;
    having?: Prisma.BriefScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BriefCountAggregateInputType | true;
    _min?: BriefMinAggregateInputType;
    _max?: BriefMaxAggregateInputType;
};
export type BriefGroupByOutputType = {
    id: string;
    userId: string;
    windowStart: Date;
    windowEnd: Date;
    content: runtime.JsonValue;
    model: string;
    generatedAt: Date;
    _count: BriefCountAggregateOutputType | null;
    _min: BriefMinAggregateOutputType | null;
    _max: BriefMaxAggregateOutputType | null;
};
export type GetBriefGroupByPayload<T extends BriefGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BriefGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BriefGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BriefGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BriefGroupByOutputType[P]>;
}>>;
export type BriefWhereInput = {
    AND?: Prisma.BriefWhereInput | Prisma.BriefWhereInput[];
    OR?: Prisma.BriefWhereInput[];
    NOT?: Prisma.BriefWhereInput | Prisma.BriefWhereInput[];
    id?: Prisma.StringFilter<"Brief"> | string;
    userId?: Prisma.StringFilter<"Brief"> | string;
    windowStart?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    windowEnd?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    content?: Prisma.JsonFilter<"Brief">;
    model?: Prisma.StringFilter<"Brief"> | string;
    generatedAt?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BriefOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_windowEnd?: Prisma.BriefUserIdWindowEndCompoundUniqueInput;
    AND?: Prisma.BriefWhereInput | Prisma.BriefWhereInput[];
    OR?: Prisma.BriefWhereInput[];
    NOT?: Prisma.BriefWhereInput | Prisma.BriefWhereInput[];
    userId?: Prisma.StringFilter<"Brief"> | string;
    windowStart?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    windowEnd?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    content?: Prisma.JsonFilter<"Brief">;
    model?: Prisma.StringFilter<"Brief"> | string;
    generatedAt?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_windowEnd">;
export type BriefOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
    _count?: Prisma.BriefCountOrderByAggregateInput;
    _max?: Prisma.BriefMaxOrderByAggregateInput;
    _min?: Prisma.BriefMinOrderByAggregateInput;
};
export type BriefScalarWhereWithAggregatesInput = {
    AND?: Prisma.BriefScalarWhereWithAggregatesInput | Prisma.BriefScalarWhereWithAggregatesInput[];
    OR?: Prisma.BriefScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BriefScalarWhereWithAggregatesInput | Prisma.BriefScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Brief"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Brief"> | string;
    windowStart?: Prisma.DateTimeWithAggregatesFilter<"Brief"> | Date | string;
    windowEnd?: Prisma.DateTimeWithAggregatesFilter<"Brief"> | Date | string;
    content?: Prisma.JsonWithAggregatesFilter<"Brief">;
    model?: Prisma.StringWithAggregatesFilter<"Brief"> | string;
    generatedAt?: Prisma.DateTimeWithAggregatesFilter<"Brief"> | Date | string;
};
export type BriefCreateInput = {
    id?: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBriefsInput;
};
export type BriefUncheckedCreateInput = {
    id?: string;
    userId: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
};
export type BriefUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBriefsNestedInput;
};
export type BriefUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefCreateManyInput = {
    id?: string;
    userId: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
};
export type BriefUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefListRelationFilter = {
    every?: Prisma.BriefWhereInput;
    some?: Prisma.BriefWhereInput;
    none?: Prisma.BriefWhereInput;
};
export type BriefOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BriefUserIdWindowEndCompoundUniqueInput = {
    userId: string;
    windowEnd: Date | string;
};
export type BriefCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type BriefMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type BriefMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    generatedAt?: Prisma.SortOrder;
};
export type BriefCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput> | Prisma.BriefCreateWithoutUserInput[] | Prisma.BriefUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BriefCreateOrConnectWithoutUserInput | Prisma.BriefCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BriefCreateManyUserInputEnvelope;
    connect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
};
export type BriefUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput> | Prisma.BriefCreateWithoutUserInput[] | Prisma.BriefUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BriefCreateOrConnectWithoutUserInput | Prisma.BriefCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BriefCreateManyUserInputEnvelope;
    connect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
};
export type BriefUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput> | Prisma.BriefCreateWithoutUserInput[] | Prisma.BriefUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BriefCreateOrConnectWithoutUserInput | Prisma.BriefCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BriefUpsertWithWhereUniqueWithoutUserInput | Prisma.BriefUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BriefCreateManyUserInputEnvelope;
    set?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    disconnect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    delete?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    connect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    update?: Prisma.BriefUpdateWithWhereUniqueWithoutUserInput | Prisma.BriefUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BriefUpdateManyWithWhereWithoutUserInput | Prisma.BriefUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BriefScalarWhereInput | Prisma.BriefScalarWhereInput[];
};
export type BriefUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput> | Prisma.BriefCreateWithoutUserInput[] | Prisma.BriefUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BriefCreateOrConnectWithoutUserInput | Prisma.BriefCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BriefUpsertWithWhereUniqueWithoutUserInput | Prisma.BriefUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BriefCreateManyUserInputEnvelope;
    set?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    disconnect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    delete?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    connect?: Prisma.BriefWhereUniqueInput | Prisma.BriefWhereUniqueInput[];
    update?: Prisma.BriefUpdateWithWhereUniqueWithoutUserInput | Prisma.BriefUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BriefUpdateManyWithWhereWithoutUserInput | Prisma.BriefUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BriefScalarWhereInput | Prisma.BriefScalarWhereInput[];
};
export type BriefCreateWithoutUserInput = {
    id?: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
};
export type BriefUncheckedCreateWithoutUserInput = {
    id?: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
};
export type BriefCreateOrConnectWithoutUserInput = {
    where: Prisma.BriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput>;
};
export type BriefCreateManyUserInputEnvelope = {
    data: Prisma.BriefCreateManyUserInput | Prisma.BriefCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BriefUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BriefWhereUniqueInput;
    update: Prisma.XOR<Prisma.BriefUpdateWithoutUserInput, Prisma.BriefUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BriefCreateWithoutUserInput, Prisma.BriefUncheckedCreateWithoutUserInput>;
};
export type BriefUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BriefWhereUniqueInput;
    data: Prisma.XOR<Prisma.BriefUpdateWithoutUserInput, Prisma.BriefUncheckedUpdateWithoutUserInput>;
};
export type BriefUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BriefScalarWhereInput;
    data: Prisma.XOR<Prisma.BriefUpdateManyMutationInput, Prisma.BriefUncheckedUpdateManyWithoutUserInput>;
};
export type BriefScalarWhereInput = {
    AND?: Prisma.BriefScalarWhereInput | Prisma.BriefScalarWhereInput[];
    OR?: Prisma.BriefScalarWhereInput[];
    NOT?: Prisma.BriefScalarWhereInput | Prisma.BriefScalarWhereInput[];
    id?: Prisma.StringFilter<"Brief"> | string;
    userId?: Prisma.StringFilter<"Brief"> | string;
    windowStart?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    windowEnd?: Prisma.DateTimeFilter<"Brief"> | Date | string;
    content?: Prisma.JsonFilter<"Brief">;
    model?: Prisma.StringFilter<"Brief"> | string;
    generatedAt?: Prisma.DateTimeFilter<"Brief"> | Date | string;
};
export type BriefCreateManyUserInput = {
    id?: string;
    windowStart: Date | string;
    windowEnd: Date | string;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model: string;
    generatedAt?: Date | string;
};
export type BriefUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    generatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    content?: boolean;
    model?: boolean;
    generatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brief"]>;
export type BriefSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    content?: boolean;
    model?: boolean;
    generatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brief"]>;
export type BriefSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    content?: boolean;
    model?: boolean;
    generatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brief"]>;
export type BriefSelectScalar = {
    id?: boolean;
    userId?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    content?: boolean;
    model?: boolean;
    generatedAt?: boolean;
};
export type BriefOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "windowStart" | "windowEnd" | "content" | "model" | "generatedAt", ExtArgs["result"]["brief"]>;
export type BriefInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BriefIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BriefIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BriefPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Brief";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        windowStart: Date;
        windowEnd: Date;
        content: runtime.JsonValue;
        model: string;
        generatedAt: Date;
    }, ExtArgs["result"]["brief"]>;
    composites: {};
};
export type BriefGetPayload<S extends boolean | null | undefined | BriefDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BriefPayload, S>;
export type BriefCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BriefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BriefCountAggregateInputType | true;
};
export interface BriefDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Brief'];
        meta: {
            name: 'Brief';
        };
    };
    findUnique<T extends BriefFindUniqueArgs>(args: Prisma.SelectSubset<T, BriefFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BriefFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BriefFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BriefFindFirstArgs>(args?: Prisma.SelectSubset<T, BriefFindFirstArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BriefFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BriefFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BriefFindManyArgs>(args?: Prisma.SelectSubset<T, BriefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BriefCreateArgs>(args: Prisma.SelectSubset<T, BriefCreateArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BriefCreateManyArgs>(args?: Prisma.SelectSubset<T, BriefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BriefCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BriefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BriefDeleteArgs>(args: Prisma.SelectSubset<T, BriefDeleteArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BriefUpdateArgs>(args: Prisma.SelectSubset<T, BriefUpdateArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BriefDeleteManyArgs>(args?: Prisma.SelectSubset<T, BriefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BriefUpdateManyArgs>(args: Prisma.SelectSubset<T, BriefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BriefUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BriefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BriefUpsertArgs>(args: Prisma.SelectSubset<T, BriefUpsertArgs<ExtArgs>>): Prisma.Prisma__BriefClient<runtime.Types.Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BriefCountArgs>(args?: Prisma.Subset<T, BriefCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BriefCountAggregateOutputType> : number>;
    aggregate<T extends BriefAggregateArgs>(args: Prisma.Subset<T, BriefAggregateArgs>): Prisma.PrismaPromise<GetBriefAggregateType<T>>;
    groupBy<T extends BriefGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BriefGroupByArgs['orderBy'];
    } : {
        orderBy?: BriefGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BriefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBriefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BriefFieldRefs;
}
export interface Prisma__BriefClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BriefFieldRefs {
    readonly id: Prisma.FieldRef<"Brief", 'String'>;
    readonly userId: Prisma.FieldRef<"Brief", 'String'>;
    readonly windowStart: Prisma.FieldRef<"Brief", 'DateTime'>;
    readonly windowEnd: Prisma.FieldRef<"Brief", 'DateTime'>;
    readonly content: Prisma.FieldRef<"Brief", 'Json'>;
    readonly model: Prisma.FieldRef<"Brief", 'String'>;
    readonly generatedAt: Prisma.FieldRef<"Brief", 'DateTime'>;
}
export type BriefFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    where: Prisma.BriefWhereUniqueInput;
};
export type BriefFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    where: Prisma.BriefWhereUniqueInput;
};
export type BriefFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BriefFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BriefFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BriefCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefCreateInput, Prisma.BriefUncheckedCreateInput>;
};
export type BriefCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BriefCreateManyInput | Prisma.BriefCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BriefCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    data: Prisma.BriefCreateManyInput | Prisma.BriefCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BriefIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BriefUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefUpdateInput, Prisma.BriefUncheckedUpdateInput>;
    where: Prisma.BriefWhereUniqueInput;
};
export type BriefUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BriefUpdateManyMutationInput, Prisma.BriefUncheckedUpdateManyInput>;
    where?: Prisma.BriefWhereInput;
    limit?: number;
};
export type BriefUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefUpdateManyMutationInput, Prisma.BriefUncheckedUpdateManyInput>;
    where?: Prisma.BriefWhereInput;
    limit?: number;
    include?: Prisma.BriefIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BriefUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    where: Prisma.BriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefCreateInput, Prisma.BriefUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BriefUpdateInput, Prisma.BriefUncheckedUpdateInput>;
};
export type BriefDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
    where: Prisma.BriefWhereUniqueInput;
};
export type BriefDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefWhereInput;
    limit?: number;
};
export type BriefDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefSelect<ExtArgs> | null;
    omit?: Prisma.BriefOmit<ExtArgs> | null;
    include?: Prisma.BriefInclude<ExtArgs> | null;
};
