function qwe() {
  if (confirm('Вы мистер Pickar?')) {
    qwe1();
  } else {
    alert('Можете уходить вам тут не рады');
  }
}
const message = 'Заходи в голосовой чат';
qwe();

function qwe1() {
  if (confirm('Можно поплакать в твоё плечо?')) {
    alert(message);
  } else {
    if (confirm('Бывает, может тогда просто в OSU')) {
      alert(message);
    } else {
      alert('Сегодня больше не буду отвлекать');
    }
  }
}
