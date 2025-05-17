>[!NOTE] 
>### 1. 添加 MinIO 客户端依赖

在您的 Spring Boot 项目的 pom.xml 文件中添加 MinIO 客户端依赖：
```  xml
<dependency>
          <groupId>io.minio</groupId>
          <artifactId>minio</artifactId>
          <version>8.4.3</version>
</dependency>
```
接下来，在application.properties或application.yml中配置Minio的访问信息，例如：
``` yml
minio:
  endpoint: http://localhost:9000
  access-key: YOUR_ACCESS_KEY
  secret-key: YOUR_SECRET_KEY
  bucket-name: your-bucket-name
```
>[!NOTE]
>### 2. 创建 MinIO 配置类

创建一个配置类，用于初始化 MinIO 客户端。创建一个名为 MinioConfig 的类：
``` java
import io.minio.MinioClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MinioConfig {


    @Value("${minio.endpoint}")
    private String endpoint;
    @Value("${minio.accessKey}")
    private String accessKey;
    @Value("${minio.secretKey}")
    private String secretKey;

    @Bean
    public MinioClient minioClient() {

        MinioClient minioClient =
                MinioClient.builder()
                        .endpoint(endpoint)
                        .credentials(accessKey, secretKey)
                        .build();
        return minioClient;
    }
}
```
>[!NOTE] 
>### 3.现在可以开始使用了，下面是一个上传图片的示例：
``` java
import org.joda.time.DateTime;
@Service
public class FileUploadServiceImpl implements FileUploadService {

    @Autowired
    private MinioClient minioClient;

    @Value("${minio.bucketName}")
    private String bucketName;

    @Value("${minio.endpoint}")
    private String endpoint;

    //使用minio图片上传
    @Override
    public String uploadFile(MultipartFile file) {
        //获取文件实际名称
        String objectName = file.getOriginalFilename();
        try {
            //上传文件输入流
            InputStream inputStream = file.getInputStream();

            String uuid = UUID.randomUUID().toString().replaceAll("-","");
            objectName = uuid+objectName;
            //对上传文件进行分组，根据当前年/月/日
            // objectName:  2025/5/12/uuid01.jpg
            String currentDateTime = new DateTime().toString("yyyy/MM/dd");
            objectName = currentDateTime+"/"+objectName;
            PutObjectArgs putObjectArgs = PutObjectArgs.builder()
                    .object(objectName)
                    .stream(inputStream, file.getSize(), -1)
                    .bucket(bucketName)
                    .build();
            minioClient.putObject(putObjectArgs);
        } catch (Exception e) {
            throw new HgyxException("上传图片失败",201);
        }
        String url = endpoint+"/"+bucketName+"/"+objectName;
        return url;
    }
}
```
