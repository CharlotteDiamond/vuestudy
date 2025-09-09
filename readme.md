笔记：
https://gitee.com/marina-37/vue3_vite_ts


辨析：
1.v-bind, v-on, v-model:v-bind的绑定只是单向的,它会将data中的数据投影到绑定的地方,在被绑定的地方对数据修改时,data中的原始数据是不会改变的；v-model的绑定是双向的,不仅将data中的数据对标签内进行绑定,还会将标签中的数据反向绑定到data中,标签数据改变后data中的数据也会同步改变；v-on绑定的是事件(函数)是vue中methods中的数据,触发v-on绑定,就会执行其所绑定的事件。
2.v-for遍历 

基础篇 学习资料：
Vue3：
1. Vue3 教程 | 菜鸟教程
2. 尚硅谷Vue3入门到实战，最新版vue3+TypeScript前端开发教程_哔哩哔哩_bilibili
3. 尚硅谷Vue项目实战硅谷甄选，vue3项目+TypeScript前端项目一套通关_哔哩哔哩_bilibili
4. https://cn.vuejs.org/guide/
Flask：
1. Flask 教程 | 菜鸟教程（已完成，内容简单）
2. 【最快速度搞定Flask-框架教程】用5小时讲完的python-flask项目实战全套教程-学完直接就业！flask服务，flask平台等入门到精通web开发_哔哩哔哩_bilibili（非构建大型项目常用方法）
3. Flask 入门教程
4. 欢迎来到 Flask 的世界 — Flask Documentation (3.1.x)