var data = [{
        brand_name: "Cysvax",
        product_desc: "Prophylactic vaccination against Porcine Cysticercosis <br> <span class=\"marpdf\"><img class=\"alignnone zoom size-full wp-image-811\" alt=\"Cysvax Lit (DCGI submission)\" src=\"http:\/\/www.indimmune.com\/wp-content\/themes\/IIL\/images\/doc_pdf.png\" width=\"16\" height=\"16\"><a href=\"http:\/\/www.indimmune.com\/wp-content\/uploads\/2017\/05\/Cysvax-Lit-DCGI-submission.pdf\" target=\"_blank\">Download Full Details<\/a><\/span>",
        animals: "<img class='zoom' src='http://www.indimmune.com/wp-content/uploads/2013/12/pig.png'/>"
    },
    {
        brand_name: "Raksha BQ",
        product_desc: "The vaccine is recommended for prophylactic vaccination against Black Quarter vaccine in bovines.",
        animals: "<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/buffalo.png\" alt=\"0\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/camel.png\" alt=\"1\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/cow.png\" alt=\"2\">"
    },
    {
        brand_name: "Raksha HS + BQ",
        product_desc: "The vaccine is recommended for prophylactic vaccination against Hemorrhagic Septicemia and Black Quarter in bovines.",
        animals: "<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/buffalo.png\" alt=\"0\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/camel.png\" alt=\"1\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/cow.png\" alt=\"2\">"
    },
    {
        brand_name: "Raksha Triovac",
        product_desc: "The vaccine is recommended for prophylactic vaccination against Foot and Mouth Disease , Hemorrhagic Septicemia and Black Quarter in bovines.",
        animals: "<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/buffalo.png\" alt=\"0\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/camel.png\" alt=\"1\"> &nbsp;<img class='zoom' src=\"http://www.indimmune.com/wp-content/uploads/2013/12/cow.png\" alt=\"2\">"
    },
    {
        brand_name: "Brucella Rev1",
        product_desc: "The vaccine is recommended for prophylactic vaccinations against brucellosis in sheep and goats and the vaccine strain Brucella melitensis Rev1 is used in the vaccine",
        animals: "<img class='zoom' src=\"http:\/\/www.indimmune.com\/wp-content\/uploads\/2013\/12\/goat.png\" alt=\"0\"> &nbsp;<img class='zoom' src=\"http:\/\/www.indimmune.com\/wp-content\/uploads\/2013\/12\/sheep.png\" alt=\"1\">"
    },
    {
        brand_name: "Brucella s19",
        product_desc: "Bruvax having S 19 strain is recommended for prophylactic vaccination against Brucellosis in female calves and non pregnant and non lactating animals.",
        animals: "<img class='zoom' src=\"http:\/\/www.indimmune.com\/wp-content\/uploads\/2013\/12\/buffalo.png\" alt=\"0\"> &nbsp;<img class='zoom' src=\"http:\/\/www.indimmune.com\/wp-content\/uploads\/2013\/12\/cow.png\" alt=\"1\"> "
    }
]

var columns = {
    'brand_name': 'Brand Name',
    'product_desc': 'Product Description',
    'animals': 'Animals'
}

var TestData = {
    data: data,
    columns: columns
}

var table = $('#lsvaccine').tableSortable({
    data: TestData.data,
    columns: TestData.columns,
    dateParsing: true,
    processHtml: function(row, key) {
        if (key === 'avatar_url') {
            return '<a href="' + row[key] + '" target="_blank">View Avatar</a>'
        }
        if (key === 'url') {
            return '<a href="' + row[key] + '" target="_blank">Github Link</a>'
        }
        if (key === 'site_admin' && row[key]) {
            return '<span class="btn btn-warning btn-sm">Admin</span>'
        }
        return row[key]
    },  
    columnsHtml: function(value, key) {
        return value;
    },
    pagination: 5,
    showPaginationLabel: true,
    prevText: 'Prev',
    nextText: 'Next',
    searchField: $('#search'),
    responsive: [{
            maxWidth: 992,
            minWidth: 769,
            columns: TestData.col,
            pagination: true,
            paginationLength: 3
        },
        {
            maxWidth: 768,
            minWidth: 0,
            columns: TestData.colXS,
            pagination: true,
            paginationLength: 2
        }
    ]
});