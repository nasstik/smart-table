<<<<<<< HEAD
import {rules, createComparison} from "../lib/compare.js";
=======
import {rules, createComparison, defaultRules} from "../lib/compare.js";
>>>>>>> 42ab57a (Доделала)


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
<<<<<<< HEAD

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data;
=======
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]  
    );

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
>>>>>>> 42ab57a (Доделала)
    }
}