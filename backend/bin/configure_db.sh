#!/bin/bash

export PGPASSWORD='12345'

echo "Configuring dragonstackdb..."

dropdb dragon-stack-db
createdb dragon-stack-db

psql dragon-stack-db < ./bin/sql/account.sql
psql dragon-stack-db < ./bin/sql/generation.sql
psql dragon-stack-db < ./bin/sql/dragon.sql
psql dragon-stack-db < ./bin/sql/trait.sql
psql dragon-stack-db < ./bin/sql/dragonTrait.sql
psql dragon-stack-db < ./bin/sql/accountDragon.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured!"
