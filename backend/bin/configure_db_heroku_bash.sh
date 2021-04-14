#!/bin/bash

echo "Configuring dragonstackdb..."

heroku pg:reset DATABASE

psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/account.sql
psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/generation.sql
psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/dragon.sql
psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/trait.sql
psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/dragonTrait.sql
psql postgres://limnpmtwspaxbt:349222f74486765a81eafca57ddc88de228ab8fade65d97361e863210c56fb49@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dfkeu67p0gbhi3 < ./bin/sql/accountDragon.sql

echo "dragonstackdb configured!"