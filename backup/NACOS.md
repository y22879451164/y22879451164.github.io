 ### 在父工程添加依赖：
```xml
<properties>
    <alibaba.version>2.2.2.RELEASE</alibaba.version>
</properties>
<dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
</dependencyManagement>
```
### 在需要进行服务注册的模块下添加依赖：
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```
### 如果需要进行配置管理，还需要添加如下依赖：
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```
### nacos通过namespace、group、dataid这三部分去定位一个具体的配置文件:
1、通过namespace、group找到具体的环境和具体的项目。
2、通过dataid找到具体的配置文件，dataid有三部分组成
比如：content-service-dev.yaml配置文件  由（content-service）-（dev）. (yaml)三部分组成
content-service：第一部分，它是在application.yaml中配置的应用名，即spring.application.name的值。
dev：第二部分，它是环境名，通过spring.profiles.active指定，
Yaml: 第三部分，它是配置文件的后缀
我们启动项目中传入spring.profiles.active的参数决定引用哪个环境的配置文件，例如：传入spring.profiles.active=dev表示使用dev环境的配置文件即content-service-dev.yaml。
### 接下来在本地配置bootstrap.yaml文件
```yaml
#微服务配置
spring:
  application:
    name: your-application-name
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        namespace: dev
        group: your-group-name
      config:
        namespace: dev
        group: your-group-name
        file-extension: yaml
        refresh-enabled: true
  profiles:
    active: dev
```
### 在客户端微服务启动类中添加注解
``` java
@EnableDiscoveryClient
```