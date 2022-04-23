---
sidebar: auto
---

# 目录
## 一、项目测试目录说明

【强制】src/test/java/...项目或者模块包基本路径/integrationtest   集成测试目录，在这个目录下，放具体的包及测试类，类名以 "IntTest"结尾，表示这是集成测试。
【强制】src/test/java/...项目或者模块包基本路径/spec   单元测试目录，在这个目录下，放具体的包及单元测试类，类名以 "Spec"结尾，遵循TDD规范。

## 二、单元测试命令说明
```
mvn install  生成测试覆盖率报告（报告目录：target/site/jacoco/index.html）

mvn test 运行单元测试

mvn integration-test  运行集成测试

mvn verify 运行集成测试
```

## 三、项目要求说明
     1、整体测试覆盖率不低于70%，核心模块测试覆盖率不低于80%
     2、要求每层接口出入参 xxRspxx、ReqParam 放在每层的bean下；
     3、建议每层有自己的出入参数类；
     4、要求config constants enums exception util放到common层，特殊情况需要说明；
     5、禁止项目中使用json、object、map作为出入参；
     6、禁止底层模块依赖高层模块。


## 四、项目分层说明
 ```$xslt
 <modules>
    <module>shopping-guider-common</module>      第一层：config constants enums exception util
   
    <module>shopping-guider-dao</module>         第二层：feign messagebus.producer mysql
   
    <module>shopping-guider-mgr</module>         第三层：impl bean
   
    <module>shopping-guider-domain</module>      第四层：impl bean
   
    <module>shopping-guider-service</module>     第五层：impl bean eventbus
   
    <module>shopping-guider-controller</module>  第六层：controller messagebus.consumer job aop dto filter
 </modules>
 ```
## 五、分层解释
     1、dao：属于基础设施层数据访问层，主要通过网络操作数据（feign，messagebus.producer，mysql）等。
     2、mgr：在领域中没有实际意义，此层存在的意义是对dao层简单的封装和调用，隔离domain层与dao层之间的耦合，也可理解为防腐层，将出参转化为更贴近自己项目的领域对象。
     3、domain：领域服务，一般在设计的时候就已经能确定有哪几个核心域了，在这层创建对应的领域服务即可。
     4、service：应用服务层，每一个方法可以讲述本服务的一个完整的用户故事。
     5、controller：展示层／接口层