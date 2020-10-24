<template>
  <div class="app-catalog">
    <h1>Catalog</h1>
    <div class="app-catalog__list">
      <catalog-item
        v-for="product in products"
        :key="product.article"
        :produt_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/catalog/CatalogItem.vue";

export default {
  name: "AppCatalog",
  components: {
    CatalogItem,
  },
  props: {},
  data: () => ({
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
  }),
  computed: {},
};
</script>

<style lang="scss">
.app-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>