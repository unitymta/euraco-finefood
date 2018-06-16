/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'spr/bxslider': 'js/jquery.bxSlider.min',
        'spr/colorbox': 'js/jquery.colorbox.min',
        'spr/isotope': 'js/jquery.isotope.min',
        'spr/slick': 'js/slick.min'
    },
    shim: {
        'spr/bxslider': {
            deps: ['jquery']
        },
        'spr/colorbox': {
            deps: ['jquery']
        },
        'spr/isotope': {
            deps: ['jquery']
        },
        'spr/slick': {
            deps: ['jquery']
        }
    },
    deps: [
        "js/common",
        "js/magento",
        "js/custom"
    ],

};