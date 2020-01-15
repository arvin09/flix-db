<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <!-- <img alt="Flix DB logo" src="../assets/logo.png" /> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="moiveDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >MOVIES</a
            >
            <div class="dropdown-menu" aria-labelledby="moiveDropdown">
              <a class="dropdown-item" href="#">Popular</a>
              <a class="dropdown-item" href="#">Top Rated</a>
              <a class="dropdown-item" href="#">Up Coming</a>
              <a class="dropdown-item" href="#">Now Playing</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="tvShowsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >TV SHOWS</a
            >
            <div class="dropdown-menu" aria-labelledby="tvShowsDropdown">
              <a class="dropdown-item" href="#">Popular</a>
              <a class="dropdown-item" href="#">Top Rated</a>
              <a class="dropdown-item" href="#">ON TV</a>
              <a class="dropdown-item" href="#">Aired Today</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="tvShowsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >PEOPLE</a
            >
            <div class="dropdown-menu" aria-labelledby="tvShowsDropdown">
              <a class="dropdown-item" href="#">Popular People</a>
            </div>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">LOGIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SIGN UP</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="search">
      <form class="form-inline my-2 my-lg-0">
        <div class="bar">
          <svg
            class="bi bi-search"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search for movie, tv show, person "
            aria-label="Search"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 768px) {
  .dropdown:hover .dropdown-menu, .btn-group:hover .dropdown-menu {
		display: block;
	}
	.dropdown-menu{
		margin-top: 0;
	}
	.dropdown-toggle{
		margin-bottom: 2px;
	}
	.navbar .dropdown-toggle, .nav-tabs .dropdown-toggle{
		margin-bottom: 0;
	}
}

.dropdown-menu {
    width: 500px;
    background: transparent;
    border: 0;
}
.dropdown-menu a {
    display: inline-block;
}

.nav-link {
  padding: 0, 20px;
}

.dropdown-item {
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: transparent;
  color: red;
}

nav {
  .navbar-brand {
    img {
      width: 60%;
    }
    text-align: left;
  }

  .nav-link {
    font-weight: bold;
  }
  height: 110px
}
#search {
  input {
    width: 80%;
    border-radius: 0;
    border: 0;
    font-style: italic;
    outline: none;
    box-shadow: none;
  }

  .bar {
    width: 100%;
  }

  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
}
</style>
