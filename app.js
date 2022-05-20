const log = document.querySelectorAll('#word #logo path');

for(i = 0; i < log.length; i++) {
    console.log(`Letter ${i} is ${log[i].getTotalLength()}`);
}
// set timer that refreshes your page every 5s
setTimeout(() => {
    window.location.reload(true);
}, 5000);