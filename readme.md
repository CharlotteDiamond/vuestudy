笔记：
https://gitee.com/marina-37/vue3_vite_ts




辨析：
1.v-bind, v-on, v-model:v-bind的绑定只是单向的,它会将data中的数据投影到绑定的地方,在被绑定的地方对数据修改时,data中的原始数据是不会改变的；v-model的绑定是双向的,不仅将data中的数据对标签内进行绑定,还会将标签中的数据反向绑定到data中,标签数据改变后data中的数据也会同步改变；v-on绑定的是事件(函数)是vue中methods中的数据,触发v-on绑定,就会执行其所绑定的事件。
