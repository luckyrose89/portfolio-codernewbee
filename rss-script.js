let url =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcodernewbee-blog.netlify.com%2Frss.xml&api_key=cewflxnhxawfvh5qgyh98ltpzrvhfnugmeifd57h";

let twitterUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FQcPOZnueFlV97i7f.xml&api_key=cewflxnhxawfvh5qgyh98ltpzrvhfnugmeifd57h";

fetch(url)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      return data;
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

fetch(twitterUrl)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
      return data;
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
