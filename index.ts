import postgres from "postgres"

const test = async() => {
  const sql = postgres({port: 54322, username: "postgres", password:"postgres"})
  await sql`create table if not exists postgresjs_jsonb_array_bug(test_col jsonb)`
  const my_row = {
    test_col: [false, false, false]
  }
  try{
    await sql`insert into postgresjs_jsonb_array_bug ${sql(my_row)}`;
  } catch(err: any){
    console.error(`error inserting, bug!`, err)
  }
  process.exit(0)
}

test()
