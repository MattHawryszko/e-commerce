import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes.js';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/animate.css'
import 'jquery';

import './styles/bgs.scss'
import './styles/text.scss'
import './styles/buttons.scss'
import './styles/navbar.scss'

import './styles/index.scss'
import './styles/login.scss'
import './styles/contact.scss'

import wow from "wow.js"

new wow({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init()


ReactDOM.render(<Routes />, document.getElementById('root'));

