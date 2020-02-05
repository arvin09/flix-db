<template>
  <nav aria-label="Page navigation" class="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in minPage" :key="page" class="page-item">
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "pagination",
  props: {
    totalPage: Number,
    current: Number,
    minPage: {
      type: Number,
      default: 5
    }
  }
};
</script>
