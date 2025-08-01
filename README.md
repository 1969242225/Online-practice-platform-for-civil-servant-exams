# 考公刷题通

> 作者：[李宇乐](https://github.com/1969242225)

## 项目介绍

基于 Next.js 服务端渲染 + Spring Boot + Redis + MySQL + Elasticsearch 的 考公刷题平台。

管理员可以创建题库、题目和题解，并批量关联题目到题库；用户可以注册登录、分词检索题目、在线刷题并查看刷题记录日历等。

项目使用数据库连接池、热 Key 探测、缓存、高级数据结构来提升性能。通过流量控制、熔断、动态 IP 黑白名单过滤、同端登录冲突检测、分级反爬虫策略来提升系统和内容的安全性。


### 项目三大阶段

1）第一阶段，开发基础的刷题平台，实战 Next.js 服务端渲染 + Spring Boot 应用的快速开发。

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E5%BA%93%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2.png?raw=true)

2）第二阶段，对项目功能进行扩展，实战如 Redis 缓存和高级数据结构、Elasticsearch 搜索引擎、Druid 连接池、并发编程、热 key 探测的应用。

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E5%88%B7%E9%A2%98%E8%AE%B0%E5%BD%95%E9%A1%B5%E9%9D%A2.png?raw=true)

3）第三阶段，对项目安全性进行优化，比如基于 Sentinel 进行网站流量控制和熔断、基于 Nacos 实现动态的 IP 黑白名单、基于 Sa-Token 实现同端登录冲突检测、基于 Redis 实现分级反爬虫策略等。最终将项目上线并保证可用性。

![](https://pic.yupi.icu/1285/202409291632109.PNG)



### 项目展示



题目搜索页面：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E7%9B%AE%E6%90%9C%E7%B4%A2%E9%A1%B5%E9%9D%A2.png?raw=true)

题库详情页面：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E5%BA%93%E8%AF%A6%E6%83%85%E9%A1%B5%E9%9D%A2.png?raw=true)

题目管理页面，涉及批量操作和动态弹窗的开发：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E7%9B%AE%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2.png?raw=true)

本项目架构设计图：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%9B%BE.png?raw=true)

主要业务E-R图：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E4%B8%BB%E8%A6%81%E4%B8%9A%E5%8A%A1E-R%E5%9B%BE.png?raw=true)

各用例图：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E7%94%A8%E4%BE%8B%E5%9B%BE.png?raw=true)
![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E7%AE%A1%E7%90%86%E5%91%98%E7%94%A8%E4%BE%8B%E5%9B%BE.png?raw=true)

各功能结构图：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E7%9B%AE%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%BB%93%E6%9E%84%E5%9B%BE.png?raw=true)
![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E9%A2%98%E5%BA%93%E6%A8%A1%E5%9D%97%E5%8A%9F%E8%83%BD%E7%BB%93%E6%9E%84%E5%9B%BE.png?raw=true)

各时序图：

![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E7%AE%A1%E7%90%86%E5%91%98%E6%93%8D%E4%BD%9C%E9%A2%98%E7%9B%AE%E6%97%B6%E5%BA%8F%E5%9B%BE.png?raw=true)
![](https://github.com/1969242225/Online-practice-platform-for-civil-servant-exams/blob/main/images/%E7%AE%A1%E7%90%86%E5%91%98%E6%93%8D%E4%BD%9C%E9%A2%98%E5%BA%93%E6%97%B6%E5%BA%8F%E5%9B%BE.png?raw=true)

## 技术选型

### 后端

- Java Spring Boot 框架 + Maven 多模块构建
- MySQL 数据库 + MyBatis-Plus 框架 + MyBatis X
- Redis 分布式缓存 + Caffeine 本地缓存
- Redission 分布式锁 + BitMap + BloomFilter
- ⭐️ Elasticsearch 搜索引擎
- ⭐️ Druid 数据库连接池 + 并发编程
- ⭐️ Sa-Token 权限控制
- ⭐️ HotKey 热点探测
- ⭐️ Sentinel 流量控制
- ⭐️ Nacos 配置中心
- ⭐️ 多角度项目优化：性能、安全性、可用性



### 前端

- React 18 框架
- ⭐️ Next.js 服务端渲染
- ⭐️ Redux 状态管理
- Ant Design 组件库
- 富文本编辑器组件
- ⭐️ 前端工程化：ESLint + Prettier + TypeScript
- ⭐️ OpenAPI 前端代码生成

## 项目大纲

以下展示了核心内容

### 第一阶段：基础刷题平台

1. 项目介绍 | 项目背景、核心业务流程
2. 项目介绍 | 项目功能梳理
3. 项目介绍 | 技术选型和架构设计
4. 后端开发 | 需求分析和库表设计
5. 后端开发 | 后端项目初始化
6. 后端开发 | 后端基础功能开发
7. 后端开发 | 后端核心业务流程开发
8. 前端开发 | 前端技术选型（服务端渲染）
9. 前端模板 | 前端初始化和工程化配置
10. 前端模板 | Next.js 开发规范
11. 前端模板 | Next.js 万用模板开发
12. 前端开发 | 基础页面开发（登录注册和管理页面）
13. 前端开发 | 核心页面开发（主页 + 刷题页 + 搜索页）

### 第二阶段：进阶功能扩展

1. 用户功能扩展 | 刷题记录日历
2. 用户功能扩展 | BitMap 及性能优化
3. 用户功能扩展 | 题目分词搜索
4. 用户功能扩展 | Elasticsearch 从入门到实战
5. 用户功能扩展 | Elasticsearch 数据同步
6. 管理功能扩展 | 题目批量管理
7. 管理功能扩展 | 批处理操作优化
8. 管理功能扩展 | Druid 连接池
9. 管理功能扩展 | 自动缓存热门题库
10. 管理功能扩展 | HotKey 从入门到实战

### 第三阶段：企业级优化和上线

1. 流量安全优化 | Sentinel 从入门到实战
2. 流量安全优化 | 单接口限流熔断
3. 流量安全优化 | 热点参数限流熔断
4. 流量安全优化 | Sentinel 规则持久化
5. 流量安全优化 | 方案设计（BloomFilter + 配置中心）
6. 流量安全优化 | Nacos 从入门到实战
7. 流量安全优化 | 动态 IP 黑名单
8. 内容安全优化 | Sa-Token 从入门到实战
9. 内容安全优化 | 同端登录冲突检测
10. 内容安全优化 | 反爬虫方案设计
11. 内容安全优化 | 基于 Redis 分级反爬虫
