document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counter');
  let count = 0;
  let paused = false;
  let interval = setInterval(updateCounter, 1000);

  function updateCounter() {
    if (!paused) {
      count++;
      counter.textContent = count;
    }
  }

  document.getElementById('plus').addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });

  document.getElementById('minus').addEventListener('click', () => {
    count--;
    counter.textContent = count;
  });

  document.getElementById('heart').addEventListener('click', () => {
    let likesUl = document.querySelector('.likes');
    let existingLike = document.querySelector(`[data-num="${count}"]`);

    if (existingLike) {
      let likes = parseInt(existingLike.getAttribute('data-likes'));
      likes++;
      existingLike.setAttribute('data-likes', likes);
      existingLike.textContent = `${count} has been liked ${likes} time${likes > 1 ? 's' : ''}`;
    } else {
      let li = document.createElement('li');
      li.setAttribute('data-num', count);
      li.setAttribute('data-likes', 1);
      li.textContent = `${count} has been liked 1 time`;
      likesUl.appendChild(li);
    }
  });

  document.getElementById('pause').addEventListener('click', (e) => {
    paused = !paused;
    e.target.textContent = paused ? 'resume' : 'pause';

    // Toggle all other buttons
    document.querySelectorAll('button:not(#pause)').forEach(btn => {
      btn.disabled = paused;
    });
  });

  document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    const commentList = document.getElementById('list');
    const p = document.createElement('p');
    p.textContent = commentText;
    commentList.appendChild(p);
    commentInput.value = '';
  });
});
