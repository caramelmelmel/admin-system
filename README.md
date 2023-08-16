## Prerequisites
1. Download the postgres driver
2. Run the following on the command line
```psql -U postgres```

You will get a postgres terminal. Then run the following:
```CREATE USER caramel WITH PASSWORD 'password';```

```GRANT CREATEDB ON DATABASE admin TO caramel;```

```
GRANT CONNECT ON DATABASE admin TO caramel;```

```\q```

3. Install all dependencies
```npm i```

4. To run the whole server, run 
```npm run start```

5. To run the tests run
```npm run test```