<!-- @format -->

<template>
  <div>
    <Row>
      <Col></Col>
    </Row>
    <draggable>
      <Card v-for="(item,index) in leftList" :key="index">{{item.text}}</Card>
    </draggable>
    <draggable>
      <Card v-for="(item,index) in leftList" :key="index">{{item.text}}</Card>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'drag-list',
  components: {
    draggable
  },
  data() {
    return {
      leftList: [
        {
          text: '111111'
        },
        {
          text: '22222'
        },
        {
          text: '3333'
        },
        {
          text: '4444'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
