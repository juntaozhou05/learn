### һ��JS ajax

```
//����һ:�����첽����
var ajax = new XMLHttpRequest();
//�����:���������url����,����һ�����������,�������������url,���Դ�����,��̬�Ĵ��ݲ���starName�������
ajax.open('get','getStar.php?starName='+name);
//������:��������
ajax.send();
//������:ע���¼� onreadystatechange ״̬�ı�ͻ����
ajax.onreadystatechange = function () {
if (ajax.readyState==4 &&ajax.status==200) {
    //������ ����ܹ���������ж� ˵�� ���� �����Ļ�����,���������ҳ���Ǵ��ڵ�
��������console.log(ajax.responseText);//������Ӧ������
����}
}

```
����JSʵ��promise

```
function PromiseM(){
    this.status='pending';
    this.msg='';
    var process=arguments[0];
    var that=this;
    process(function(){
        that.status='resolve';
        that.msg=arguments[0];
    },function(){
        that.status='reject';     
        that.msg=arguments[0];           
    });
    return this;
}
PromiseM.prototype.then=function(){
    if(this.status=='resolve'){
        arguments[0](this.msg);
    }
    if(this.status=='reject'&&arguments[1]){
        arguments[1](this.msg);
    }
}

```



