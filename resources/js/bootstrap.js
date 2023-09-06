/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
import 'bootstrap';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import lozad from 'lozad'
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const el = document.querySelector('img');
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();