function firstUniqChar(s) {
    const count = new Map();
    const n = s.length;
    // build hash map: character and how often it appears
    for (let i = 0; i < n; i++) {
        const c = s.charAt(i);
        count.set(c, (count.get(c) || 0) + 1);
    }

    // find the index
    for (let i = 0; i < n; i++) {
        if (count.get(s.charAt(i)) === 1) {
            return i;
        }
    }
    return -1;
}