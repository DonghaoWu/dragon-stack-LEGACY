#!/bin/bash

echo "Configuring dragonstackdb..."

psql -U limnpmtwspaxbt dfkeu67p0gbhi3 < ./bin/sql/account.sql

echo "dragonstackdb configured!"