# `@nextjs-template/graphql`

## Usage

```
# vi .env # Update
yarn build #=> Output files to `/generated/*` and `/dist/*`
```

## Schema

The current `src/schema.graphql` was exported by Hasura.

<img width="1006" alt="Hasura Schema" src="https://user-images.githubusercontent.com/1271863/100516504-bf241d00-31c7-11eb-8f85-eb02a3112096.png">

```bash
npx graphqurl https://<project-name>.hasura.app/v1/graphql --introspect > src/schema.graphql
```

Remove `src/schema.graphql` if you want to specify a URL in your .env `SCHEMA_PATH`.

## Handling Hasura Cloud's database in code

The [Hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/index.html) allows you to easily manage Hasura Cloud's database.  
After completing the settings in Hasura Cloud, execute the following command.

```bash
# If you have not created an `.env`
cp .env.example .env # Then, set it up

# Add `hasura` directory
hasura init
# ✔ Name of project directory : hasura

cd hasura

vi config.yaml
#-endpoint: http://localhost:8080
#+endpoint: https://<project-name>.hasura.app
#+admin_secret: <HASURA_GRAPHQL_ADMIN_SECRET> # optional

hasura migrate create "init" --from-server
# ref: https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_migrate_create.html

hasura metadata export
# ref: https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_metadata_export.html

hasura seeds create tables_seed <--from-table table1 --from-table table2>
# ref: https://hasura.io/docs/1.0/graphql/core/hasura-cli/hasura_seeds_create.html
```

### Apply the code to Hasura Cloud

```bash
hasura migrate apply
hasura metadata apply
hasura seeds apply
```
