


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

function play(N) {
    let step = 0;
    let rabbitPlace = Math.floor(Math.random() * N)

    let initialPlace = rabbitPlace;

    for (i = N % 2; i < N; i++) {
        step++;
        if (i == rabbitPlace) {
            return {
                rabbitPlace,
                step,
                initialPlace
            }
        } else {
            rabbitPlace = jump(rabbitPlace, N)
        }
    }

    for (i = (N + 1) % 2; i < N; i++) {
        if (i == rabbitPlace) {
            // console.log(`rabbit has been found at ${rabbitPlace} in ${step} steps. The initial places was ${initialPlace}`)
            return {
                rabbitPlace,
                step,
                initialPlace
            }
        } else {
            rabbitPlace = jump(rabbitPlace, N)
        }
    }
    throw new Error("never comes here")

}



function main() {
    let results = []
    let c = 1e5;
    let N = 100+1;
    for (let i = 0; i < c; i++) {
        let result = play(N)
        results.push(result);

    }

    results = results.sort((a, b) => a.step - b.step).reverse()
    console.log(results.slice(0, 10));
}
main();