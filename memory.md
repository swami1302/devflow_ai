# Memory — DevFlow AI Phase 1 implementation

Last updated: 2026-07-25

## What was built

- `docs/PLAN.md` rewritten: hackathon framing removed, 8-point structural changes applied, Supabase+RLS integration documented, Prisma 7 gotchas added.
- pnpm workspace: `apps/api` (NestJS @devflow/api:4000), `apps/web` (Next.js @devflow/web:3000), both correctly configured.
- **Phase 1 — Database layer complete:**
  - Prisma 7 schema written: 5 tables (User, Repo, TrackedRepo, GithubCache, Brief) with proper unique constraints
  - `prisma migrate dev --name init` succeeded — tables created in Supabase
  - Supabase RLS policies enabled on all tables, policies using `current_setting('app.user_id')` for owner-only access
  - Prisma service created: `src/lib/prisma/prisma.service.ts` — uses @prisma/adapter-pg with pooled connection (DATABASE_URL), OnModuleInit/Destroy lifecycle
  - PrismaModule marked @Global(), imported in AppModule, ready for injection
- **Infrastructure — Logger:**
  - Winston logger module scaffolded: `src/lib/logger/` (module + service generated via `nest g`)
  - LoggerModule imported in AppModule, needs Winston configuration

## Decisions made

- Backend = NestJS only, direct cross-origin to frontend, no proxy
- Auth = hand-rolled OAuth2 (Phase 1 lesson), not Supabase Auth / NextAuth / better-auth
- DB = Supabase Postgres + Prisma v7 + RLS (Row Level Security via `current_setting`)
- Prisma connection: pooled URL (6543 Supavisor) at runtime, direct URL (5432) for migrations in prisma.config.ts
- Prisma adapter: @prisma/adapter-pg (Prisma 7 pattern, not extending PrismaClient)
- Logger: Winston (structured logging, not built-in NestJS logger)
- **Work style: Agentic learning** — take autonomy, don't ask per micro-step; user wants initiative and decisions, not permission-seeking

## Problems solved

- Prisma 7 breaking changes (url/directUrl removed from schema.prisma, moved to prisma.config.ts + runtime adapter)
- Supabase connection string confusion (pooler vs direct, port 6543 vs 5432)
- RLS policy testing (disabled policies to insert test data, then re-enabled)
- Prisma MCP irrelevant (Prisma Postgres host product, not Supabase)

## Current state

- Database layer ready: Prisma service injectable, RLS in place, migration successful
- Logger: scaffolded, not yet wired (needs Winston config)
- @apps/api/CLAUDE.md updated with:
  - Prisma MCP + Supabase skill usage requirements (no hallucination)
  - Nest CLI preference (never manually create files)
  - NestJS-first patterns locked in
- AppModule imports: PrismaModule, LoggerModule

## Next session starts with

Wire Winston into logger.service.ts (createLogger, transports for console + file). Mark LoggerModule @Global(). Then start auth module (OAuth App registration + NestJS guards).

**Work autonomously:** take decisions, implement, report back. Don't ask for permission on every step. User chose agentic learning style.

## Open questions

- Supabase Realtime vs webhook-based brief invalidation (Phase 5, deferred)
- OAuth App → GitHub App migration (Stretch item)
