// Assign feed api endpoints variables
const url =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcodernewbee-blog.netlify.com%2Frss.xml&api_key=cewflxnhxawfvh5qgyh98ltpzrvhfnugmeifd57h";

const twitterUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FQcPOZnueFlV97i7f.xml&api_key=cewflxnhxawfvh5qgyh98ltpzrvhfnugmeifd57h";

// Select and assign target <ul> elements to variables
const blogList = document.querySelector(".blog-widget");
const tweetList = document.querySelector(".twitter-widget");

// Fetch API data for blog feed
fetch(url)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine response and create html for <li> output
    response.json().then(function(data) {
      for (var i = 0; i < 3; i++) {
        var listItem = document.createElement("li");
        var html =
          '<a href="' +
          data.items[i].link +
          '">' +
          "<h4>" +
          data.items[i].title +
          "</h4>" +
          "<p>" +
          data.items[i].description +
          "<p>" +
          "<p>" +
          data.items[i].pubDate +
          "<p>" +
          "</a>";

        listItem.innerHTML = html;
        listItem.classList.add("blog-Item");
        blogList.appendChild(listItem);
      }
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

// Fetch API data for twitter feed
fetch(twitterUrl)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine response and create html for <li> output
    response.json().then(function(data) {
      for (var i = 0; i < 2; i++) {
        var listItem = document.createElement("li");
        var html =
          '<a href="' +
          data.items[i].link +
          '">' +
          "<p>" +
          data.items[i].title +
          "</p>" +
          "<p>" +
          data.items[i].pubDate +
          "<p>" +
          "</a>";

        listItem.innerHTML = html;
        listItem.classList.add("tweet-Item");
        tweetList.appendChild(listItem);
      }
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
