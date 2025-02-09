const baseUrl = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const moviesUrl = "discover/movie";
const AccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc";
// Start Movies Api
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc",
  },
};
let ad = document.querySelector(".ad");
let count = 0;

axios
  .request(options)
  .then((res) => {

    const movies = res.data.results;
    document
      .querySelector(".img1")
      .setAttribute("src", `${imgUrl}${movies[count].poster_path
        }`);
    // Add Description To Paragraph
    document.querySelector(
      ".ad  p "
    ).textContent = `${movies[count].overview}`;
    //  Add Title To h1
    document.querySelector(
      ".title"
    ).textContent = `${movies[count].original_title}`;
    document.querySelector(".ad a").setAttribute("href", `https://www.google.com/search?q=https://egybest.onl/${movies[count].original_title}/`);
    document.querySelector(".ad a ").setAttribute("target", "_blank");
    count++;
    if (count === 20) {
      count = 0;
    }
    setTimeout(() => {
      document.querySelector(".stars").style.display = "flex";
    }, 500)
    document.querySelector(".textArea").classList.add("FromBottomToTop")

    document.querySelector(".Year").style.marginLeft = "10px"
    setInterval(() => {

      document.querySelector(".review").textContent = `${movies[count].vote_average}`
      document.querySelector(".Year").textContent = ` ${"Date:" + movies[count].release_date}`;
      document.querySelector(".likesCount").textContent = `${movies[count].vote_count}`;
      document.querySelector(".likes").style.margin = "10px";
      // Add Image To Ad Area
      document
        .querySelector(".img1")
        .setAttribute("src", `${imgUrl}${movies[count].backdrop_path}`);
      // Add Description To Paragraph
      document.querySelector(
        ".ad  p "
      ).textContent = `${movies[count].overview}`;
      //  Add Title To h1
      document.querySelector(
        ".title"
      ).textContent = `${movies[count].original_title}`;
      document.querySelector(".ad a").setAttribute("href", `https://www.google.com/search?q=https://egybest.onl/${movies[count].original_title}/`);
      ;
      document.querySelector(".ad a ").setAttribute("target", "_blank");
      count++;
      if (count === 20) {
        count = 0;
      }
      setTimeout(() => {
        console.log(count);

        document.querySelector(".stars").style.display = "flex";
      }, 500)
      document.querySelector(".textArea").classList.add("FromBottomToTop")
      document.querySelector(".review").textContent = `${movies[count].vote_average}`
      document.querySelector(".Year").textContent = `${movies[count].release_date}`;
      document.querySelector(".likesCount").textContent = `${movies[count].vote_count}`;
    }, 4000)




  }
  )
  .catch((err) => console.error(err));
//End Movies Api
// Start Tv Keys
const TvOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/tv',
  params: {
    include_adult: 'false',
    include_null_first_air_dates: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc'
  }
};
const TvOptionsFive = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/tv',
  params: {
    include_adult: 'false',
    include_null_first_air_dates: 'false',
    language: 'en-US',
    page: "9",
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc'
  }
};
// SearchBar Content
axios
  .request(TvOptionsFive)
  .then(res => {
    const Tvs = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${Tvs[i].
        first_air_date
        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${Tvs[i].
        poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${Tvs[i].name}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${Tvs[i].name}`
      span.innerText = `${Tvs[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".SearchBar").appendChild(div)
    }
    console.log(Tvs)
  })
  .catch(err => console.error(err));

axios
  .request(TvOptions)
  .then(res => {
    const Tvs = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${Tvs[i].
        first_air_date
        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${Tvs[i].
        poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${Tvs[i].name}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${Tvs[i].name}`
      span.innerText = `${Tvs[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".TvList").appendChild(div)
    }
    console.log(Tvs)
  })
  .catch(err => console.error(err));

axios
  .request(TvOptions)
  .then(res => {
    const Tvs = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${Tvs[i].
        first_air_date
        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${Tvs[i].
        poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${Tvs[i].name}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${Tvs[i].name}`
      span.innerText = `${Tvs[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".containerContentBody").appendChild(div)
    }
    console.log(Tvs)
  })
  .catch(err => console.error(err));


// End Tv Keys
//Start Popular Key

const PopularOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: { language: 'en-US', page: '6' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc'
  }
};
axios
  .request(PopularOptions)
  .then(res => {
    const PopularMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${PopularMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${PopularMovies[i].
        poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${PopularMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${PopularMovies[i].title}`
      span.innerText = `${PopularMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".PopularContent").appendChild(div)
    }
    console.log(PopularMovies)
  }).catch(err => console.error(err));

// Start Search Part
axios
  .request(PopularOptions)
  .then(res => {
    const PopularMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${PopularMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${PopularMovies[i].
        poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${PopularMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${PopularMovies[i].title}`
      span.innerText = `${PopularMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".SearchBar").appendChild(div)
    }
    console.log(PopularMovies)
  }).catch(err => console.error(err));

// End Search Part

axios
  .request(PopularOptions)
  .then(res => {
    const PopularMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${PopularMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${PopularMovies[i].backdrop_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${PopularMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${PopularMovies[i].title}`
      span.innerText = `${PopularMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".movieList").appendChild(div)

    }
    console.log(PopularMovies)
  }).catch(err => console.error(err));

//End Popular Key


// Start Upcoming
const UpcomingOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: { language: 'en-US', page: '9' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1MjNjZjY1ZDY2MzQ1ODY2NTUwMWJmNDA2NjNjOCIsIm5iZiI6MTczNzc0NzQ4OS41NTcsInN1YiI6IjY3OTNlYzIxZmVhYzliNzEyNjIzYTA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzpTUlk7MpPef7bnae1Pi6DMZ78Crmds9owU9mA-BHc'
  }
};

axios
  .request(UpcomingOptions)
  .then(res => {
    const UpComingMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${UpComingMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${UpComingMovies[i].poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${UpComingMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${UpComingMovies[i].title}`
      span.innerText = `${UpComingMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".UpcomingContent").appendChild(div)

    }
    console.log(UpComingMovies)
  }).catch(err => console.error(err));

axios
  .request(UpcomingOptions)
  .then(res => {
    const UpComingMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${UpComingMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${UpComingMovies[i].poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${UpComingMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${UpComingMovies[i].title}`
      span.innerText = `${UpComingMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".movieList").appendChild(div)


    }
    console.log(UpComingMovies)
  }).catch(err => console.error(err));
// Start Search Part
axios
  .request(UpcomingOptions)
  .then(res => {
    const UpComingMovies = res.data.results
    for (let i = 0; i < 20; i++) {

      const div = document.createElement("div");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const Likes = document.createElement('i');
      const span = document.createElement("span")
      const spanDate = document.createElement("span")
      spanDate.innerHTML = `Date Of Creation :${UpComingMovies[i].
        release_date

        }`;
      spanDate.classList.add("date")
      img.classList.add("img")
      img.src = `${imgUrl}${UpComingMovies[i].poster_path}`
      link.appendChild(img);
      link.href = `https://www.google.com/search?q=${UpComingMovies[i].title}`;
      div.classList.add("Card")
      h1.classList.add("CardTitle")
      Likes.classList.add("CardHearts")
      Likes.appendChild(span)
      Likes.appendChild(spanDate)
      span.classList.add("voting")
      Likes.classList.add("fas")
      Likes.classList.add("fa-heart")
      h1.innerText = `${UpComingMovies[i].title}`
      span.innerText = `${UpComingMovies[i].vote_count}`
      div.appendChild(link)
      div.appendChild(h1)
      div.appendChild(Likes)
      document.querySelector(".SearchBar").appendChild(div)


    }
    console.log(UpComingMovies)
  }).catch(err => console.error(err));
// End Search Part

// End Upcoming



document.querySelectorAll("img").forEach((im) => {
  im.setAttribute("type", "image/avif");
})