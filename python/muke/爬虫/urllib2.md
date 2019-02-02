### 一：

1. 爬虫方法 直接请求

```
import urllib2
# 直接请求
response = urllib2.urlopen("http://www.baidu.com")
# 获取状态码 如果成功200
print response.getcode()
# 读取内容
cont = response.read()
```

2. 下载方法：添加data，httpheader
```
import urllib2
#创建request
request.add_data('a','1')
#添加http的header
request.add_header('User-Agent','Mozilla/5.0')
#发送请求获取结果
response = urllib2.urlopen(request)
```