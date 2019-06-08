$(document).ready(function () {
    $(".desc").hide();
    $(".animal-health-desc").show();

    // Onload load the default breadcrumb
    $(".bv-breadcrumb").html("<li><a href='javascript:menuClickEvent(0)'>Business Verticals</a></li><li>Animal Health</li>");

    // on click make anchor active
    var selector = '.left-sub-menu a';

    $(selector).on('click', function () {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });

    // Light Slider configuration
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true
    });
    loadContentFromTxtFile(null, "li-animal-health");
    menuClickEvent(null);
});

function menuClickEvent(title) {
    var arrayTitle = ["Facilities", "Vaccines", "Health Products", "CRM", "Veterinary Resources"];
    var index = parseInt(title);

    // initial hide all div content 
    $(".desc").hide();

    index = title == null ? localStorage.getItem("menu_index") : index;

    try {
        if (index != 0) {

            // Binding the title 
            $(".title-bv").html(arrayTitle[index - 1]);

            // function for breadcrumb 
            $(".bv-breadcrumb").html("<li><a href='javascript:menuClickEvent(0)'>Business Verticals</a></li><li><a href='javascript:menuClickEvent(0)'>Animal Health</a></li>" + "<li>" + arrayTitle[index - 1] + "</li>");

            title = "li-" + arrayTitle[index - 1].toLowerCase().replace(' ', '-');

            //enabling the div content
            switch (index - 1 + "") {
                case "0": loadContentFromTxtFile("facilities-desc", title); break;
                case "1": loadContentFromTxtFile("vaccines-desc", title); break;
                case "3": loadContentFromTxtFile("crm-desc", title); break;
            }

            localStorage.setItem("menu_index", index);

        }
        else {
            // Removing the active class from left side menu
            $(".left-sub-menu a").removeClass('active');

            // Adding the title
            $(".title-bv").html("Animal Health");

            // Appending and modifying the breadcrumb
            $(".bv-breadcrumb").html("<li><a href='javascript:menuClickEvent(0)'>Business Verticals</a></li><li>Animal Health</li>");

            // Enabling the div content 
            $(".animal-health-desc").show();

            loadContentFromTxtFile("animal-health-desc", "li-animal-health");
        }
    } catch (error) { }
}

function loadContentFromTxtFile(filename, title) {
    try {
        var _file_name = "";
        _file_name = localStorage.getItem("file_name");
        filename = filename ? filename : (_file_name ? _file_name : "animal-health-desc");

        // loading the content from the local storages
        $.ajax({
            url: "staffs/" + filename + ".txt",
            dataType: "text",
            cache: false,
            success: function (data) {
                LoadContentFilters(data, filename,title);

                // loading the content into the local storage while reloading the content
                localStorage.setItem("file_name", filename);
            }
        });

    } catch (e) {

    }
}

function LoadContentFilters(_content, _file_name, title) {
    try {
        if (_content) {
            $("." + _file_name).html(_content).show();

            if (_file_name == "facilities-desc") {
                $('#image-gallery').lightSlider({
                    gallery: true,
                    item: 1,
                    vertical: true,
                    vThumbWidth: 50,
                    verticalHeight: 300,
                    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
                    thumbItem: 9,
                    slideMargin: 0,
                    enableTouch: true, enableDrag: true,
                    speed: 500,
                    auto: true,
                    loop: true,
                    onSliderLoad: function () {
                        $('#image-gallery').removeClass('cS-hidden');
                    }
                });
            }
            if (_file_name == "vaccines-desc") {
                var js = document.createElement("script");
                js.type = "text/javascript";
                js.src = "js/table.js";
                document.body.appendChild(js);

                js = document.createElement("script");
                js.type = "text/javascript";
                js.src = "js/cmvaccines.js";
                document.body.appendChild(js);
            }


            $(".li-left-sub-menu").removeClass('active');
            $("." + title).attr("class", "active");
        }
    } catch (error) {

    }
}