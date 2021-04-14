#!/bin/bash

echo "Configuring dragonstackdb..."

heroku pg:reset DATABASE

heroku pg:psql --app dragon-stack-2021 < ./bin/sql/account.sql
heroku pg:psql --app dragon-stack-2021 < ./bin/sql/generation.sql
heroku pg:psql --app dragon-stack-2021 < ./bin/sql/dragon.sql
heroku pg:psql --app dragon-stack-2021 < ./bin/sql/trait.sql
heroku pg:psql --app dragon-stack-2021 < ./bin/sql/dragonTrait.sql
heroku pg:psql --app dragon-stack-2021 < ./bin/sql/accountDragon.sql

echo "dragonstackdb configured!"