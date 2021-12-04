


function jump(currentPlace, N) {
    if (currentPlace == 0) {
        return 1;
    } else if (currentPlace == N - 1) {
        return N - 2;
    } else {
        let increment = Math.random() > 0.5 ? 1 : -1;
        return currentPlace + increment;
    }
}

// There are n holes in a line, and there is a rabbit hinding one of the holes
// you can look only one hole at a time
// and every time you look at a hole
// the rabbit jumps to adjacent hole
// it can goes one left or one right
// find the rabbit




function main() {
    let N = 1000;
    let step = 0;
    let rabbitPlace = Math.floor(Math.random() * N)
    let initialPlace = rabbitPlace;

    for (let k = 1; k < N - 1; k++) {
        for (let i = 0; i < N; i = i + k) {
            step++
            if (i == rabbitPlace) {
                console.log(`rabbit has been found at ${rabbitPlace} in ${step} steps. The initial places was ${initialPlace}`)
                return;
            } else {
                rabbitPlace = jump(rabbitPlace, N)
            }
        }
    }

}

main();