<template>
  <nav aria-label="Page navigation" class="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          @click="changePage('previous')"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click="changePage('first')"
          href="#"
          aria-label="First"
        >
          <span aria-hidden="true">First</span>
        </a>
      </li>
      <li v-for="page in pages" :key="page" class="page-item">
        <a class="page-link" @click="changePage(page)" href="#">
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click="changePage('last')"
          href="#"
          aria-label="Last"
        >
          <span aria-hidden="true">Last</span>
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          @click="changePage('next')"
          href="#"
          aria-label="Next"
        >
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
    totalPages: Number,
    currentPage: {
      type: Number,
      default: 1
    },
    visiblePages: {
      type: Number,
      default: 5
    }
  },
  created() {
    this.current = this.currentPage;
  },
  data() {
    return {
      current: 1
    };
  },
  computed: {
    firstPageToShow() {
      if (this.minVisiblePage < 1) {
        return 1;
      } else if (this.maxVisiblePage > this.totalPages) {
        return this.totalPages + 1 - this.visiblePagesComputed;
      }
      return this.minVisiblePage;
    },
    halfOfVisiblePages() {
      return Math.floor(this.visiblePagesComputed / 2);
    },
    isFirstPage() {
      return this.current === 1;
    },
    isLastPage() {
      return this.current === this.totalPages;
    },
    lastPageToShow() {
      if (this.maxVisiblePage > this.totalPages) {
        return this.totalPages;
      } else if (this.minVisiblePage < 1) {
        return this.visiblePagesComputed;
      }
      return this.maxVisiblePage;
    },
    maxVisiblePage() {
      return this.current + this.halfOfVisiblePages;
    },
    minVisiblePage() {
      return this.current - this.halfOfVisiblePages;
    },
    pages() {
      const pages = [];
      for (let i = this.firstPageToShow; i <= this.lastPageToShow; i++) {
        pages.push(i);
      }
      return pages;
    },
    visiblePagesComputed() {
      return this.visiblePages <= this.totalPages
        ? this.visiblePages
        : this.totalPages;
    }
  },
  watch: {
    currentPage: function currentPage(newVal) {
      if (this.current !== newVal) {
        this.changePage(newVal);
      }
    }
  },
  methods: {
    setCurrentPage(page) {
      this.current = page;
    },
    changePage(page) {
      switch (page) {
        case "first":
          this.current = 1;
          break;
        case "previous":
          if (this.current - 1 >= 1) {
            this.current -= 1;
          }
          break;
        case "next":
          if (this.current + 1 <= this.totalPages) {
            this.current += 1;
          }
          break;
        case "last":
          this.current = this.totalPages;
          break;
        default:
          this.current = page <= this.totalPages ? page : this.totalPages;
      }
      this.$emit("page-changed", this.current);
    }
  }
};
</script>
