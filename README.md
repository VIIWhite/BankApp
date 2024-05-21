# Bank Application

## 前端设置

1. 导航到 `frontend` 目录：
    ```sh
    cd frontend
    ```
2. 安装依赖项：
    ```sh
    npm install
    ```
3. 启动前端项目：
    ```sh
    npm start
    ```

## 后端设置

1. 创建 MySQL 数据库：
    ```sql
    CREATE DATABASE bankdb;
    CREATE USER 'bankuser'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON bankdb.* TO 'bankuser'@'localhost';
    FLUSH PRIVILEGES;
    ```

2. 配置数据库连接信息：

   在 `src/main/resources/application.properties` 文件中：
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/bankdb
    spring.datasource.username=bankuser
    spring.datasource.password=password
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```

3. 构建和运行后端项目：
    ```sh
    ./gradlew build
    ./gradlew bootRun
    ```

## 测试项目

运行项目测试：
```sh
./gradlew test
