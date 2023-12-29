const userList = document.querySelector('.user-list');
const userPost = document.querySelector('.user-post');

function makeElement(tag, content, isBold = false) {
  let output = document.createElement(tag);
  if (tag === 'div') {
    output.innerHTML = content;
    if (isBold) {
      const boldSpan = document.createElement('span');
      boldSpan.className = 'bold';
      boldSpan.textContent = content;
      output.innerHTML = `Title: ${boldSpan}, Body: ${post.body} `;
    }
  } else {
    output.textContent = content;
  }
  return output;
}


function fetchPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => res.json())
    .then(posts => {
      userPost.innerHTML = "";
      for (let post of posts) {
        const postDiv = makeElement('div', `<span class="bold">${post.title}</span> : ${post.body} <br><hr><br>`);
        userPost.append(postDiv);
      }
    });
}


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    for (let user of data) {
      const li = makeElement('li', `${user.name}/${user.email}`);
      userList.append(li);

      li.addEventListener('click', () => {
        fetchPosts(user.id);
      });
    }
  });
