#!/bin/bash

echo "Configuring dragon-stack-2021..."

heroku pg:reset DATABASE

heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/account.sql
heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/generation.sql
heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/dragon.sql
heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/trait.sql
heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/dragonTrait.sql
heroku pg:psql --app dragon-stack-2021 < ./backend/bin/sql/accountDragon.sql

node ./backend/bin/insertTraits_heroku.js

echo "dragon-stack-2021 configured!"