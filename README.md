# Bank Application

## Frontend Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend project:
    ```sh
    npm start
    ```

## Backend Setup

1. Create a MySQL database:
    ```sql
    CREATE DATABASE bankdb;
    CREATE USER 'bankuser'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON bankdb.* TO 'bankuser'@'localhost';
    FLUSH PRIVILEGES;
    ```

2. Configure database connection information:

   In the `src/main/resources/application.properties` file:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/bankdb
    spring.datasource.username=bankuser
    spring.datasource.password=password
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```

3. Build and run the backend project:
    ```sh
    ./gradlew build
    ./gradlew bootRun
    ```

## Test the Project

Run the project tests:
```sh
./gradlew test
