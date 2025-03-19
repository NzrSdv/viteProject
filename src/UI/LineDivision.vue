<template>
    <div class="line">
        <div class="inner-line"></div>
    </div>
</template>
<script>
export default {
    name:"LineDivision"
}
</script>
<style>
    .line{
        width: 100%;
        height: 1px;
        background-color: #E6E6E6;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .inner-line{
        width:20%;
        height: 1px;
        background-color: #FFC844;
    }
</style>