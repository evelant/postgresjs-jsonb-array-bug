"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("postgres"));
const test = async () => {
    const sql = (0, postgres_1.default)({ port: 54322, username: "postgres", password: "postgres" });
    await sql `create table if not exists postgresjs_jsonb_array_bug(test_col jsonb)`;
    const my_row = {
        test_col: [false, false, false]
    };
    try {
        await sql `insert into postgresjs_jsonb_array_bug ${sql(my_row)}`;
    }
    catch (err) {
        console.error(`error inserting, bug!`, err);
    }
    process.exit(0);
};
test();
