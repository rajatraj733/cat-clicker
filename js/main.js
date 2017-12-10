// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

var cats = [
    {
        name: 'cat1',
        src: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
        clickCount: 0

    },
    {
        name: 'cat2',
        src: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clickCount: 0
    },
    {
        name: 'cat3',
        src: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        clickCount: 0
    },
    {
        name: 'cat4',
        src: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
        clickCount: 0
    }
];
var selectedCat;


var octopus = {
    init: function() {
        view.init(cats);
    },
    renderCat: function(cat) {

        return () => {
            selectedCat = cat;
            view.renderCat(cat)};
    },
    incrementClick: function() {

      return () => {
          selectedCat.clickCount++;
        view.renderClicks(selectedCat.clickCount);
      }
    }


};

var view = {
    init: function(cats) {
        this.initCatCanvas();
        this.initAdminViews();
        let listDiv = document.createElement("div");
        document.body.appendChild(listDiv);
        cats.forEach((cat) => {
            let child = document.createElement("div");
            child.textContent = cat.name;
            child.addEventListener('click', octopus.renderCat(cat));
            listDiv.appendChild(child);
        })
    },
    initAdminViews: function() {
        this.adminButton = document.getElementById("adminButton");
        this.nameTextBox = document.getElementById("name");
        this.srcTextBox = document.getElementById("src");
        this.clickCountTextBox = document.getElementById("clickCount");
        this.saveButton = document.getElementById("saveButton");
        this.cancelButton = document.getElementById("cancelButton");
        this.adminDiv = document.getElementById("adminDiv");
        this.adminDiv.addEventListener('click', function () {
            
        })
    },
    initCatCanvas: function () {
        let catDiv = document.createElement("div");
        catDiv.style.position = 'absolute';
        catDiv.style.left = '200px';
        document.body.appendChild(catDiv);
        this.catNameDiv = document.createElement("div");
        this.catImage = document.createElement("img");
        this.catClicksDiv = document.createElement("div");
        catDiv.appendChild(this.catNameDiv);
        catDiv.appendChild(this.catImage);
        catDiv.appendChild(this.catClicksDiv);
        this.catImage.addEventListener('click', octopus.incrementClick());
    },
    renderCat: function(cat) {
        this.catNameDiv.textContent = cat.name;
        this.catClicksDiv.textContent = cat.clickCount;
        this.catImage.setAttribute('src', cat.src);
    },
    renderClicks: function(num) {
        this.catClicksDiv.textContent = num;
    }

};
octopus.init();


/*var e = document.createElement("div");
document.body.appendChild(e);*/

// Let's loop over the numbers in our array
/*for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var name = cats[i].name;

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = name;

    // ... and when we click, alert the value of `name`
    elem.addEventListener('click', (function(numCopy) {
        var click = 0;
        return function() {
            e.innerHTML = '';
            var img = document.createElement('img');
            img.setAttribute('src', cats[numCopy].src);
            e.appendChild(img);
            var div = document.createElement('div');
            div.textContent = click;
            e.appendChild(div);
            img.addEventListener('click', function() {
               click++;
               div.textContent = click;
            });
            // alert(numCop);
        }
    })(i));

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};*/
