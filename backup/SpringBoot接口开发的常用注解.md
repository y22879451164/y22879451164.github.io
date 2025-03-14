1. `@Controller`标记此类是一个控制器，可以返回视图解析器指定的html页面，通过`@ResponseBody`可以将结果返回json、xml数据。
2. `@RestController`相当于`@ResponseBody`加`@Controller`，实现rest接口开发，返回ison数据，不能返回html页面。
3. `@RequestMapping`定义接口地址，可以标记在类上也可以标记在方法上，支持http的post、put、get等方法。
4. `@RequestBody`定义在方法上，用于将json串转成java对象。
5. `@PathVarible`接收请求路径中占位符的值。
6. `@ApiOperation` Swagger注解，对接口方法进行说明。
7. `@Api` Swagger注解，对接口类进行说明。
8. `@Autowired`基于类型注入。
9. `@Resourc`基于名称注入，如果基于名称注入失败转为基于类型注入。