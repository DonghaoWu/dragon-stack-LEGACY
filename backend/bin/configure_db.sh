#!/bin/bash

export PGPASSWORD='12345'

echo "Configuring dragonstackdb..."

dropdb dragonstackdb
createdb dragonstackdb

psql dragonstackdb < ./bin/sql/account.sql
psql dragonstackdb < ./bin/sql/generation.sql
psql dragonstackdb < ./bin/sql/dragon.sql
psql dragonstackdb < ./bin/sql/trait.sql
psql dragonstackdb < ./bin/sql/dragonTrait.sql
psql dragonstackdb < ./bin/sql/accountDragon.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured!"
