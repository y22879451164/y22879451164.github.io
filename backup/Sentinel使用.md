## 管理控制台
首先下载控制台的jar包
[https://github.com/alibaba/Sentinel/releases](url)
修改文件名为sentinel-dashboard.jar，然后使用以下命令启动：
```powershell
java -Dserver.port=8090 -Dcsp.sentinel.dashboard.server=localhost:8090 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar
```
启动成功后，访问[http://localhost:8090](url)，默认登录的用户名和密码都是sentinel.

## 微服务整合
引入sentinel依赖:
```xml
<dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
            <version>${spring-cloud-alibaba.version}</version>
</dependency>
```
修改application.yaml文件，添加如下内容：
```yaml
spring:
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8090 #配置Sentinel dashboard地址
```