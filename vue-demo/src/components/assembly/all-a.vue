
<template>
    <div class="zhujian-all">
        <h3 class="h3name">
            我是一个全局性的组件
        </h3>
        <br class="huanxin">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
$color: red;

@media (max-width:200) and (min-width:500) {}

@media print {

    * {
        color: #3299fc;
    }
}

.zhujian-all {
    .h3name {
        color: $color;
    }

    .huanxin {
        color: #3296fa;
    }
}
</style>
