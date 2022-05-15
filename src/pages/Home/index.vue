<template>
<div>
  <TypeNav/>
  <ListContainer/>
  <TodayRecommend/>
  <Rank/>
  <Like/>
  <Floor v-for="item in floors" :key="item.id" :floor="item"/>
  <Brand/>
</div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from '@/pages/Home/ListContainer';
import TodayRecommend from '@/pages/Home/TodayRecommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
export default {
  name:'Home',
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch("floorList");
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  }
}
</script>

<style>

</style>


