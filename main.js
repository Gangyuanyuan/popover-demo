clickMe.addEventListener('click', function(e) {
  let p1 = document.getElementById('popover')
  if (!p1.classList.contains('show')) { // 判断当前类是否包含show
    p1.classList.add('show')
    e.stopPropagation() // 阻断冒泡
  } else {
    p1.classList.remove('show')
  }
  document.addEventListener('click', function() { // 只在button被点击时监听document，节省空间
    p1.classList.remove('show')
  })
})

popover.addEventListener('click', function(e) {
  e.stopPropagation() // 阻断冒泡
})
