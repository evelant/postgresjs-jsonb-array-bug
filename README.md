# Bug
postgresjs insert helper fails when inserting an array of booleans into a jsonb column.

#To Reproduce
```
pnpm install
pnpm test
```

#Output
```
error inserting, bug! PostgresError: column "test_col" is of type jsonb but expression is of type boolean
    at ErrorResponse (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/connection.js:769:26)
    at handle (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/connection.js:472:6)
    at Socket.data (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/connection.js:313:9)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
    at cachedError (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/query.js:171:23)
    at new Query (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/query.js:36:24)
    at sql (/Users/imagio/dev/postgresjs-jsonb-array-bug/node_modules/.pnpm/postgres@3.3.4/node_modules/postgres/cjs/src/index.js:111:11)
    at test (/Users/imagio/dev/postgresjs-jsonb-array-bug/index.js:14:19)
```
