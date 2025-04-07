export function sum(...nums: number[]) {
    return nums.reduce((tot, curr) => tot = tot + curr)
}