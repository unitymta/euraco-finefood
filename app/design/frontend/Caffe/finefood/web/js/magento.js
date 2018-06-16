if (typeof require != "undefined" && typeof define != "undefined") {
    define([
        'jquery',
    ], function ($) {
        $(document).ready(function () {
            $(".listing-products").on("click", ".btn-add-to-cart", function (e) {
                $($(this).next('form').find('button')).trigger("click");
            });

            $(".homepage").on("click", ".btn-add-to-cart", function (e) {
                $($(this).next('form').find('button')).trigger("click");
            });
            $(".catalog-product-view").on("click", ".btn-add-to-cart", function (e) {
                // e.preventDefault();
                $('#product_addtocart_form button#product-addtocart-button').trigger("click");
            });

        });
        $(window).on("load",function () {

        });
    }
    );
} 