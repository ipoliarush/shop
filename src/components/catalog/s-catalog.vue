<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :produt_data="product"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/catalog/v-catalog-item.vue";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: "1.jpg",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Мужские",
        },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 3150.12312412,
          article: "T2",
          available: true,
          category: "Женские",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>