function discriminant(A, B, C) {
    return (Math.pow(B, 2) - (4*A*C))
}

function isNumber(value) {
    if (isNaN(value)) {
        return false
    }
    return true
}

function quadratic(A, B, C) {
    
    let D = discriminant(A, B, C)

    if (D >= 0) { 
        ans1 = ( -B + ( Math.sqrt(D) ))/(2*A)
        ans2 = ( -B - ( Math.sqrt(D) ))/(2*A)
        return Array(ans1, ans2, true)
    }

    ans1 = (-B/(2*A)) + '+' + '('+ ((Math.sqrt(Math.abs(D)))/(2*A)) + 'i' + ')'
    ans2 = (-B/(2*A)) + '-' + '('+ ((Math.sqrt(Math.abs(D)))/(2*A)) + 'i' + ')'
    return Array(ans1, ans2, false)
}

function main() {
    let A = document.getElementById('TermA').value
    let B = document.getElementById('TermB').value
    let C = document.getElementById('TermC').value

    A = Number(A)
    B = Number(B)
    C = Number(C)

    if (isNumber(A) && isNumber(B) && isNumber(C)) {

        let ansArr = quadratic(A, B, C)
        document.getElementById('roots').innerHTML = '<br><br> Root 1: ' +  ansArr[0] + '<br> Root 2: ' + ansArr[1]

        if (!ansArr[2]) {
            document.getElementById('Uh oh').innerHTML = '<br> The roots appear to be complex!'
        } else {
            document.getElementById('Uh oh').innerHTML = ''
        }

    } else {
        window.alert("Please enter a valid number!")
    }
}

document.getElementById('Submit').onclick = main