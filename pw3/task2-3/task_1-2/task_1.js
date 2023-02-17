let fix = document.getElementById('text')
let but = document.getElementById('but').addEventListener('click', () => {
    // fix.textContent = fix.textContent.replace(/'/g, '"')
    fix.textContent = fix.textContent.replace(/\B'|'\B/g, '"')
})
